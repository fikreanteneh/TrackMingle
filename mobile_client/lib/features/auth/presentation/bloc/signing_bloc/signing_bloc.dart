import 'dart:async';

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:near_by_friends/features/auth/domain/auth_entity.dart';
import 'package:near_by_friends/features/auth/domain/auth_repository.dart';

part 'signing_event.dart';
part 'signing_state.dart';

class SigningBloc extends Bloc<SigningEvent, SigningState> {
  final AuthRepository _authRepository;
  SigningBloc(this._authRepository) : super(SigningInitial()) {
    on<SignInWithGoogle>(_signInWithGoogle);
    on<SignInWithEmail>(_signInWithEmail);
    on<SignUpWithEmail>(_signUpWithEmail);
  }

  FutureOr<void> _signInWithGoogle(
      SignInWithGoogle event, Emitter<SigningState> emit) {}

  FutureOr<void> _signInWithEmail(
      SignInWithEmail event, Emitter<SigningState> emit) {}

  FutureOr<void> _signUpWithEmail(
      SignUpWithEmail event, Emitter<SigningState> emit) {}
}
