import 'package:flutter/material.dart';

class NormalTextField extends StatelessWidget {
  final TextEditingController controller;
  final String placeholder;
  final bool isPassword;
  final bool isNumber;

  const NormalTextField(
      {super.key,
      required this.controller,
      required this.placeholder,
      this.isPassword = false,
      this.isNumber = false});

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
