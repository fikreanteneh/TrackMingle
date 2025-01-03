import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:go_router/go_router.dart';
import 'package:track_mingle/presentation/blocs/auth_bloc/auth_bloc.dart';

class RouterUtil {
  static String redirectAuth({
    required BuildContext context,
    required String authenticated,
    required String unauthenticated,
  }) {
    if (BlocProvider.of<AuthBloc>(context).state is AuthAuthenticated) {
      return authenticated;
    } else {
      return unauthenticated;
    }
  }
}

class AuthRedirect extends StatelessWidget {
  const AuthRedirect({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocListener<AuthBloc, AuthBlocState>(
      listener: (context, state) {
        if (state is AuthAuthenticated) {
          GoRouter.of(context).go('/home');
        } else if (state is AuthUnauthenticated) {
          GoRouter.of(context).go('/auth');
        }
      },
      child: const Center(
        child: CircularProgressIndicator(),
      ),
    );
  }
}
