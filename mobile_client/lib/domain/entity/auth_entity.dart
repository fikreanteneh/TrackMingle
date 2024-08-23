import 'package:equatable/equatable.dart';

class AuthEntity extends Equatable {
  final String token, email, id;
  const AuthEntity(
      {required this.token, required this.email, required this.id});

  @override
  List<Object?> get props => [token, email, id];
}



class AuthWithEmailEntity extends Equatable {
  final String email, password;
  const AuthWithEmailEntity({required this.email, required this.password});
  
  @override
  // TODO: implement props
  List<Object?> get props => [email, password];
  
}
