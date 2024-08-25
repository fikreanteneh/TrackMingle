import 'package:flutter/widgets.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:track_mingle/domain/entity/auth_entity.dart';
import 'package:track_mingle/presentation/blocs/auth_bloc/auth_bloc.dart';
import 'package:track_mingle/presentation/widget/header_text.dart';
import 'package:track_mingle/presentation/widget/normal_button.dart';
import 'package:track_mingle/presentation/widget/normal_textfield.dart';

class SignInSlide extends StatelessWidget {
  final VoidCallback onSignUpSlide;
  SignInSlide({super.key, required this.onSignUpSlide});
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
        NormalButton(
            onPressed: () {
              BlocProvider.of<AuthBloc>(context).add(AuthSignIn(
                  AuthSignInEmailEntity(
                      email: _emailController.text,
                      password: _passwordController.text)));
            },
            text: "Sign In"),
        HeaderText.linkRedirect(
            "Don't have an account? Sign Up", onSignUpSlide),
      ],
    ));
  }
}
