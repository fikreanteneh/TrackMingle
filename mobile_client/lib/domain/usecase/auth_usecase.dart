import 'package:dartz/dartz.dart';
import 'package:track_mingle/core/error/failure.dart';
import 'package:track_mingle/core/usecase/usecase.dart';
import 'package:track_mingle/domain/entity/auth_entity.dart';
import 'package:track_mingle/domain/repository/auth_repository.dart';

class WatchAuthUsecase extends UsecaseStream<void, AuthEntity> {
  final AuthRepository repository;
  WatchAuthUsecase(this.repository);

  @override
  Stream<Either<Failure, AuthEntity>> call(void params) {
    return repository.getCurrentUser();
  }
}

//TODO: Implement the usecase for signing in with Google
class SignInWithGoogleUsecase extends UsecaseFuture<AnyParam, bool> {
  final AuthRepository repository;
  SignInWithGoogleUsecase(this.repository);

  @override
  Future<Either<Failure, bool>> call(AnyParam params) async {
    return await repository.signInWithGoogle();
  }
}

class SignInWithEmailUsecase
    extends UsecaseFuture<AuthSignInEmailEntity, bool> {
  final AuthRepository repository;
  SignInWithEmailUsecase(this.repository);

  @override
  Future<Either<Failure, bool>> call(AuthSignInEmailEntity params) async {
    return await repository.signInWithEmail(params);
  }
}

class SignUpWithEmailUsecase
    extends UsecaseFuture<AuthSignUpEmailEntity, bool> {
  final AuthRepository repository;
  SignUpWithEmailUsecase(this.repository);

  @override
  Future<Either<Failure, bool>> call(AuthSignUpEmailEntity params) async {
    return await repository.signUpWithEmail(params);
  }
}
