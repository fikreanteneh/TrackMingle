import 'dart:async';

import 'package:bloc/bloc.dart';
import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';
import 'package:near_by_friends/core/error/failure.dart';
import 'package:near_by_friends/core/usecase/usecase.dart';
import 'package:near_by_friends/features/auth/domain/auth_entity.dart';
import 'package:near_by_friends/features/auth/domain/auth_usecase.dart';

part 'auth_event.dart';
part 'auth_state.dart';

class AuthBloc extends Bloc<AuthWatch, AuthBlocState> {
  final WatchAuthUsecase _watchAuthUsecase;
  StreamSubscription<Either<Failure, AuthEntity>>? _authSubscription;

  AuthBloc(this._watchAuthUsecase) : super(AuthLoading()) {
    on<AuthWatch>(_watchForAuthState);
  }

  Future<void> _watchForAuthState(
      AuthWatch event, Emitter<AuthBlocState> emit) async {
    Stream<Either<Failure, AuthEntity>> authSubscription =
        _watchAuthUsecase.call(Params(null));
    AuthBlocState state = AuthUnauthenticated();
    await emit.forEach(authSubscription, onData: (data) {
      data.fold((failure) => state = AuthUnauthenticated(),
          (success) => state = AuthAuthenticated(success));
      return state;
    });
  }

  @override
  Future<void> close() {
    _authSubscription?.cancel();
    return super.close();
  }
}
