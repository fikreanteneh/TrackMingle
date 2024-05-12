import 'package:flutter/widgets.dart';
import 'package:go_router/go_router.dart';
import 'package:near_by_friends/features/auth/presentation/screen/auth_page.dart';
import 'package:near_by_friends/splash_screen.dart';

final GoRouter router =
    GoRouter(navigatorKey: GlobalKey<NavigatorState>(), routes: [
  GoRoute(path: '/', builder: (context, state) => SplashScreen()),
  GoRoute(path: '/auth', builder: (context, state) => const AuthPage()),
  // GoRoute(path: '/home', builder: (context, state) => const HomeScreen()),
  // GoRoute(path: '/search', builder: (context, state) => const HomeScreen()),
  // GoRoute(path: '/groups', builder: (context, state) => const HomeScreen()),
  // GoRoute(path: '/profile', builder: (context, state) => const HomeScreen()),
]);
