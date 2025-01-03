import 'package:equatable/equatable.dart';

class AuthEntity extends Equatable {
  final String token, email, id;
  const AuthEntity(
      {required this.token, required this.email, required this.id});

  @override
  List<Object?> get props => [token, email, id];
}

class AuthSignInEmailEntity extends Equatable {
  final String email, password;
  const AuthSignInEmailEntity({required this.email, required this.password});

  @override
  List<Object?> get props => [email, password];
}

class AuthSignUpEmailEntity extends Equatable {
  final String email, password, username, fullName;
  const AuthSignUpEmailEntity(this.username, this.fullName,
      {required this.email, required this.password});

  @override
  List<Object?> get props => [email, password, username, fullName];
}
