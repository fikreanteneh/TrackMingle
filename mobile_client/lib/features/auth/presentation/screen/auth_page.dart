import 'package:flutter/widgets.dart';
import 'package:near_by_friends/features/auth/presentation/screen/sign_in_slide.dart';
import 'package:near_by_friends/features/auth/presentation/screen/sign_up_slide.dart';

class AuthPage extends StatefulWidget {

  const AuthPage({super.key});

  @override
  _AuthPageState createState() => _AuthPageState();
}

class _AuthPageState extends State<AuthPage> {
  static const Map<String, int> authStates = {
    "SIGNIN": 0,
    "SIGNUP": 1,
    "FORGOT_PASSWORD": 2
  };
  int _currentIndex = 0;
  void _changeSlide(String page) {
    setState(() {
      _currentIndex = authStates[page]!;
    });
  }

  List<Widget> slides = [];

  @override
  void initState() {
    super.initState();
    slides = [
      SignInSlide(changeSlide: _changeSlide,), 
      SignUpSlide(changeSlide: _changeSlide,)
    ];
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        child: Center(
      child: slides[_currentIndex],
    ));
  }
}
