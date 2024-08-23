part of 'signing_bloc.dart';

sealed class SigningState extends Equatable {
  const SigningState();
  
  @override
  List<Object> get props => [];
}

final class SigningInitial extends SigningState {}

final class SignInWithGoogleState extends SigningState {}

final class SignInWithEmailState extends SigningState {}

final class SignUpWithEmailState extends SigningState {}
