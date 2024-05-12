import 'package:dartz/dartz.dart';
import 'package:near_by_friends/core/error/failure.dart';
import 'package:near_by_friends/features/auth/domain/auth_entity.dart';

abstract class AuthRepository {
  Stream<Either<Failure, AuthEntity>> getCurrentUser();
  Future<Either<Failure, bool>> signInWithGoogle();
  Future<Either<Failure, bool>> signInWithEmail(AuthWithEmailEntity authWithEmailEntity);
  Future<Either<Failure, bool>> signUpWithEmail(AuthWithEmailEntity authWithEmailEntity);
}



