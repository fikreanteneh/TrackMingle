import 'package:flutter/widgets.dart';

class SignUpSlide extends StatefulWidget {
  final void Function(String) changeSlide;
  const SignUpSlide({ Key? key , required this.changeSlide}) : super(key: key);

  @override
  _SignUpSlideState createState() => _SignUpSlideState();
}

class _SignUpSlideState extends State<SignUpSlide> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text("signup"),
      
    );
  }
}