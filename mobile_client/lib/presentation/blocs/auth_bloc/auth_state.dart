part of 'auth_bloc.dart';

sealed class AuthBlocState extends Equatable {
  const AuthBlocState();

  @override
  List<Object> get props => [];
}

final class AuthLoading extends AuthBlocState {}

final class AuthAuthenticated extends AuthBlocState {
  final AuthEntity authEntity;

  const AuthAuthenticated(this.authEntity);

  @override
  List<Object> get props => [authEntity];
}

final class AuthUnauthenticated extends AuthBlocState {}
