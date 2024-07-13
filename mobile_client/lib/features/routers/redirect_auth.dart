import 'package:flutter/widgets.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:track_mingle/features/auth/presentation/bloc/auth_bloc/auth_bloc.dart';

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
