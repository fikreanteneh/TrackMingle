part of 'auth_bloc.dart';

sealed class AuthBlocEvent extends Equatable {
  const AuthBlocEvent();

  @override
  List<Object> get props => [];
}



class AuthWatch extends AuthBlocEvent {}