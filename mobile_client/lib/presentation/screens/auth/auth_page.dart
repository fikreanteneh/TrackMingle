import 'package:flutter/widgets.dart';
import 'package:track_mingle/presentation/screens/auth/sign_in_slide.dart';
import 'package:track_mingle/presentation/screens/auth/sign_up_slide.dart';

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
    slides = [SignInSlide(), SignUpSlide()];
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        child: Center(
      child: slides[_currentIndex],
    ));
  }
}
