import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class CustomTextField extends StatelessWidget {
  final TextEditingController controller;
  final String placeholder;
  final bool isPassword;
  final bool isNumber;

  const CustomTextField(
      {Key? key,
      required this.controller,
      required this.placeholder,
      this.isPassword = false,
      this.isNumber = false})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextField(
      controller: controller,
      obscureText: isPassword,
      keyboardType: isNumber ? TextInputType.number : TextInputType.text,
      decoration: InputDecoration(
        labelText: placeholder,
      ),
    );
  }
}
