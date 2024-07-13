import 'package:dartz/dartz.dart';
import 'package:track_mingle/core/error/failure.dart';
import 'package:track_mingle/core/usecase/usecase.dart';
import 'package:track_mingle/features/auth/domain/auth_entity.dart';
import 'package:track_mingle/features/auth/domain/auth_repository.dart';

class WatchAuthUsecase extends UsecaseStream<Params, AuthEntity> {
  final AuthRepository repository;
  WatchAuthUsecase(this.repository);

  @override
  Stream<Either<Failure, AuthEntity>> call(Params params) {
    return repository.getCurrentUser();
  }
}

class SignInWithGoogleUsecase extends UsecaseFuture<Params, bool> {
  final AuthRepository repository;
  SignInWithGoogleUsecase(this.repository);

  @override
  Future<Either<Failure, bool>> call(Params params) async {
    return await repository.signInWithGoogle();
  }
}

class SignInWithEmailUsecase extends UsecaseFuture<Params, bool> {
  final AuthRepository repository;
  SignInWithEmailUsecase(this.repository);

  @override
  Future<Either<Failure, bool>> call(Params params) async {
    return await repository.signUpWithEmail(params.data);
  }
}

class SignUpWithEmailUsecase extends UsecaseFuture<Params, bool> {
  final AuthRepository repository;
  SignUpWithEmailUsecase(this.repository);

  @override
  Future<Either<Failure, bool>> call(Params params) async {
    return await repository.signUpWithEmail(params.data);
  }
}
