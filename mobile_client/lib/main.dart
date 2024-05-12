import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:near_by_friends/core/utils/bloc_observer.dart';
import 'package:near_by_friends/features/auth/presentation/bloc/auth_bloc/auth_bloc.dart';
import 'package:near_by_friends/injection_container.dart'
    as injection_container;
import 'package:near_by_friends/injection_container.dart';
import 'package:near_by_friends/router.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await dotenv.load();
  await injection_container.init();
  Bloc.observer = AppBlocObserver();
  runApp(const TrackMingle());
}

class TrackMingle extends StatelessWidget {
  const TrackMingle({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        home: MultiBlocProvider(
          providers: [
            BlocProvider(
              create: (context) => serviceLocator.get<AuthBloc>(),
            ),
          ],
          child: MaterialApp.router(
            debugShowCheckedModeBanner: false,
            routerConfig: router,
          ),
        ));
  }
}
