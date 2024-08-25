import 'package:flutter/widgets.dart';
import 'package:track_mingle/presentation/widget/header_text.dart';
import 'package:track_mingle/presentation/widget/normal_button.dart';
import 'package:track_mingle/presentation/widget/normal_textfield.dart';

class SignUpSlide extends StatelessWidget {
  final VoidCallback onSignInSlide;
  SignUpSlide({super.key, required this.onSignInSlide});
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
      children: [
        HeaderText.headerH1("Sign In"),
        NormalTextField(controller: _emailController, placeholder: "E - mail"),
        NormalTextField(
            controller: _passwordController,
            placeholder: "Password",
            isPassword: true),
        NormalButton(onPressed: () {}, text: "Sign Up"),
        HeaderText.linkRedirect(
            "Already have an Account? Sign in", onSignInSlide),
      ],
    ));
  }
}
