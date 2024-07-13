import 'package:supabase_flutter/supabase_flutter.dart';
import 'package:track_mingle/features/auth/domain/auth_entity.dart';

class AuthModel extends AuthEntity {
  const AuthModel({
    required String email,
    required String id,
    required String token,
  }) : super(email: email, id: id, token: token);

  factory AuthModel.fromSupabaseClient(Session auth) {
    return AuthModel(
        email: auth.user.email ?? "",
        id: auth.user.id,
        token: auth.accessToken);
  }
}
