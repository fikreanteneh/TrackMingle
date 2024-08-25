import 'package:flutter/material.dart';
import 'package:track_mingle/presentation/screens/auth/sign_in_slide.dart';
import 'package:track_mingle/presentation/screens/auth/sign_up_slide.dart';

class AuthPage extends StatefulWidget {
  const AuthPage({super.key});

  @override
  _AuthPageState createState() => _AuthPageState();
}

class _AuthPageState extends State<AuthPage> {
  // 0 - Sign In,  1 - Sign Up
  int _currentIndex = 0;
  void _changeSlide(int slideNumber) {
    setState(() {
      _currentIndex = slideNumber;
    });
  }

  @override
  Widget build(BuildContext context) {
    List<Widget> slides = [
      SignInSlide(onSignUpSlide: () => _changeSlide(1)),
      SignUpSlide(onSignInSlide: () => _changeSlide(0))
    ];

    return Scaffold(
      body: Container(child: slides[_currentIndex]),
    );
  }
}
