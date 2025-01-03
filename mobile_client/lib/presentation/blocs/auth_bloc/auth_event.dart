part of 'auth_bloc.dart';

sealed class AuthBlocEvent extends Equatable {
  const AuthBlocEvent();

  @override
  List<Object> get props => [];
}

class AuthWatch extends AuthBlocEvent {}

class AuthSignIn extends AuthBlocEvent {
  final AuthSignInEmailEntity authSignInEmailEntity;

  const AuthSignIn(this.authSignInEmailEntity);

  @override
  List<Object> get props => [authSignInEmailEntity];
}
