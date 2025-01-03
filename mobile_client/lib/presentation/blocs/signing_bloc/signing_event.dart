part of 'signing_bloc.dart';

sealed class SigningEvent extends Equatable {
  const SigningEvent();

  @override
  List<Object> get props => [];
}

class SignInWithGoogle extends SigningEvent {}

class SignInWithEmail extends SigningEvent {
  final AuthSignInEmailEntity authWithEmailEntity;
  const SignInWithEmail(this.authWithEmailEntity);
}

class SignUpWithEmail extends SigningEvent {
  final AuthSignInEmailEntity authWithEmailEntity;
  const SignUpWithEmail(this.authWithEmailEntity);
}
