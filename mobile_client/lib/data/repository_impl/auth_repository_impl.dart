import 'dart:async';

import 'package:dartz/dartz.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:track_mingle/core/error/failure.dart';
import 'package:track_mingle/data/models/auth_model.dart';
import 'package:track_mingle/domain/entity/auth_entity.dart';
import 'package:track_mingle/domain/repository/auth_repository.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

//TODO Error Handling For All
class AuthRepositoryImpl implements AuthRepository {
  final SupabaseClient supabase;
  final GoogleSignIn googleSignIn;

  AuthRepositoryImpl({required this.supabase, required this.googleSignIn});

  @override
  Stream<Either<Failure, AuthEntity>> getCurrentUser() {
    final controller = StreamController<Either<Failure, AuthEntity>>();

    supabase.auth.onAuthStateChange.listen((data) {
      final session = data.session;
      if (session != null) {
        final authModel = AuthModel.fromSupabaseClient(session);
        controller.add(Right(authModel));
      } else {
        controller.add(
            const Left(Failure(message: 'Unauthenticated', statusCode: 401)));
      }
    });
    return controller.stream;
  }

  @override
  Future<Either<Failure, bool>> signInWithEmail(
      AuthWithEmailEntity authWithEmailEntity) async {
    await supabase.auth.signInWithPassword(
        password: authWithEmailEntity.password,
        email: authWithEmailEntity.email);
    return const Right(true);
  }

  @override
  Future<Either<Failure, bool>> signInWithGoogle() async {
    final googleUser = await googleSignIn.signIn();
    final googleAuth = await googleUser!.authentication;
    final accessToken = googleAuth.accessToken;
    final idToken = googleAuth.idToken;

    if (accessToken == null) {
      throw 'No Access Token found.';
    }
    if (idToken == null) {
      throw 'No ID Token found.';
    }

    final response = await supabase.auth.signInWithIdToken(
      provider: OAuthProvider.google,
      idToken: idToken,
      accessToken: accessToken,
    );
    return const Right(true);
  }

  @override
  Future<Either<Failure, bool>> signUpWithEmail(
      AuthWithEmailEntity authWithEmailEntity) async {
    await supabase.auth.signUp(
        password: authWithEmailEntity.password,
        email: authWithEmailEntity.email);
    return const Right(true);
  }
}
