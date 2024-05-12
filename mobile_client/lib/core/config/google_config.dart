import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:google_sign_in/google_sign_in.dart';

class GoogleAuthConfig {
 
  static GoogleSignIn initialize() {
    const List<String> scopes = [
      'email',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ];

    return GoogleSignIn(
      scopes: scopes,
      clientId: dotenv.env["GOOGLE_CLIENT_ID"] as String
    );
  }
}
