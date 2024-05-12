import 'package:flutter/widgets.dart';
import 'package:near_by_friends/features/auth/presentation/widget/custome_textfield.dart';

class SignInSlide extends StatefulWidget {
  final void Function(String) changeSlide;
  const SignInSlide({super.key, required this.changeSlide});

  @override
  _SignInSlideState createState() => _SignInSlideState();
}

class _SignInSlideState extends State<SignInSlide> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Container(
        child: Column(
      children: [
        const Text("Sign In"),
        CustomTextField(controller: _emailController, placeholder: "email"),
        CustomTextField(controller: _passwordController, placeholder: "email"),
      ],
    ));
  }
}
