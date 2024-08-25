import 'dart:async';

import 'package:bloc/bloc.dart';
import 'package:dartz/dartz.dart';
import 'package:equatable/equatable.dart';
import 'package:track_mingle/core/error/failure.dart';
import 'package:track_mingle/domain/entity/auth_entity.dart';
import 'package:track_mingle/domain/usecase/auth_usecase.dart';

part 'auth_event.dart';
part 'auth_state.dart';

class AuthBloc extends Bloc<AuthBlocEvent, AuthBlocState> {
  final WatchAuthUsecase watchAuthUsecase;
  final SignInWithEmailUsecase signInWithEmailUsecase;
  final SignUpWithEmailUsecase signUpWithEmailUsecase;
  StreamSubscription<Either<Failure, AuthEntity>>? _authSubscription;

  AuthBloc({
    required this.watchAuthUsecase,
    required this.signInWithEmailUsecase,
    required this.signUpWithEmailUsecase,
  }) : super(AuthLoading()) {
    on<AuthWatch>(_watchForAuthState);
    on<AuthSignIn>(_signInWithEmail);
  }

  Future<void> _watchForAuthState(
      AuthWatch event, Emitter<AuthBlocState> emit) async {
    Stream<Either<Failure, AuthEntity>> authSubscription =
        watchAuthUsecase.call(null);
    AuthBlocState state = AuthUnauthenticated();
    await emit.forEach(authSubscription, onData: (data) {
      data.fold((failure) => state = AuthUnauthenticated(),
          (success) => state = AuthAuthenticated(success));
      return state;
    });
  }

  Future<void> _signInWithEmail(
      //If the user correctly signe the wathAuth is going to automatically emit new state
      AuthSignIn event,
      Emitter<AuthBlocState> emit) async {
    emit(AuthLoading());
    final result =
        await signInWithEmailUsecase.call(event.authSignInEmailEntity);
    //TODO: Emit a state if it only failed
  }

  @override
  Future<void> close() {
    _authSubscription?.cancel();
    return super.close();
  }
}
