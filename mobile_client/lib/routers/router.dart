import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:track_mingle/presentation/screens/auth/auth_page.dart';
import 'package:track_mingle/presentation/screens/home/home.dart';
import 'package:track_mingle/routers/redirect_auth.dart';

final _rootNavigatorKey = GlobalKey<NavigatorState>();
final _shellNavigatorKey = GlobalKey<NavigatorState>();

final GoRouter router = GoRouter(
  navigatorKey: _rootNavigatorKey,
  initialLocation: "/",
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => const AuthRedirect(),
      routes: [
        GoRoute(
            path: 'auth',
            name: "Auth",
            builder: (context, state) => const AuthPage()),
        GoRoute(
            path: 'home',
            name: "home",
            builder: (context, state) => const Home()),
      ],
    ),
  ],
);




// redirect: (context, state) => RouterUtil.redirectAuth(
//   context: context,
//   unauthenticated: '/auth',
//   authenticated: '/home',
// ),

// redirect: (context, state) => 'sign_in',
// routes: [
//   ShellRoute(
//       navigatorKey: _shellNavigatorKey,
//       builder: (context, state, child) => Scaffold(body: child),
//       routes: [
//         GoRoute(
//           path: 'sign_in',
//           name: "Sign In",
//           builder: (context, state) => const SignInSlide(),
//         ),
//         GoRoute(
//           path: 'sign_up',
//           name: "Sign Up",
//           builder: (context, state) => const SignUpSlide(),
//         ),
//       ])
// ],