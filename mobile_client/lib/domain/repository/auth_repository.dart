import 'package:dartz/dartz.dart';
import 'package:track_mingle/core/error/failure.dart';
import 'package:track_mingle/domain/entity/auth_entity.dart';

abstract class AuthRepository {
  Stream<Either<Failure, AuthEntity>> getCurrentUser();

  Future<Either<Failure, bool>> signInWithGoogle();

  Future<Either<Failure, bool>> signInWithEmail(
      AuthSignInEmailEntity authWithEmailEntity);

  Future<Either<Failure, bool>> signUpWithEmail(
      AuthSignUpEmailEntity authWithEmailEntity);
}
