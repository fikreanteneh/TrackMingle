import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:track_mingle/features/auth/presentation/screen/sign_in_slide.dart';
import 'package:track_mingle/features/auth/presentation/screen/sign_up_slide.dart';
import 'package:track_mingle/features/routers/redirect_auth.dart';

final _rootNavigatorKey = GlobalKey<NavigatorState>();
final _shellNavigatorKey = GlobalKey<NavigatorState>();

final GoRouter router = GoRouter(
  navigatorKey: _rootNavigatorKey,
  initialLocation: "/",
  routes: [
    GoRoute(
      path: '/',
      redirect: (context, state) => RouterUtil.redirectAuth(
        context: context,
        unauthenticated: 'auth',
        authenticated: 'app',
      ),
      routes: [
        GoRoute(
          path: 'auth',
          name: "auth",
          redirect: (context, state) => 'signIn',
          routes: [
            ShellRoute(
                navigatorKey: _shellNavigatorKey,
                builder: (context, state, child) => Scaffold(body: child),
                routes: [
                  GoRoute(
                    path: 'signIn',
                    name: "signIn",
                    builder: (context, state) => const SignInSlide(),
                  ),
                  GoRoute(
                    path: 'signUp',
                    name: "signUp",
                    builder: (context, state) => const SignUpSlide(),
                  ),
                ])
          ],
        ),
        GoRoute(
          path: 'app',
          name: "app",
          redirect: (context, state) => 'home',
          routes: const [
            // GoRoute(path: 'home', builder: (context, state) => const HomeScreen()),
            // GoRoute(path: 'search', builder: (context, state) => const HomeScreen()),
            // GoRoute(path: 'groups', builder: (context, state) => const HomeScreen()),
            // GoRoute(path: 'profile', builder: (context, state) => const HomeScreen()),
          ],
        ),
      ],
    ),
  ],
);
