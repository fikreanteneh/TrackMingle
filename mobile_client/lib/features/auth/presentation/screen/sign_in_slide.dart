import 'package:flutter/widgets.dart';
import 'package:track_mingle/features/auth/presentation/widget/custome_textfield.dart';

class SignInSlide extends StatefulWidget {
  const SignInSlide({super.key});

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
