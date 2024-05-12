
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:near_by_friends/features/auth/presentation/bloc/auth_bloc/auth_bloc.dart';

class SplashScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return BlocListener<AuthBloc, AuthBlocState>(listener:(context, state){
      if (state is AuthAuthenticated) {
        context.go('/home');
      } else if (state is AuthUnauthenticated){
        context.go('/auth');
      }
    }, 
    child: 
    Container(
      child: Image.asset('assets/images/cover.jpg'),
    ),);
  }
}
 