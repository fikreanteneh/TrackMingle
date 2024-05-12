import 'package:get_it/get_it.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:http/http.dart' as http;
import 'package:internet_connection_checker/internet_connection_checker.dart';
import 'package:near_by_friends/core/config/google_config.dart';
import 'package:near_by_friends/core/config/supabase_config.dart';
import 'package:near_by_friends/core/network/network_info.dart';
import 'package:near_by_friends/features/auth/data/auth_repository_impl.dart';
import 'package:near_by_friends/features/auth/domain/auth_repository.dart';
import 'package:near_by_friends/features/auth/domain/auth_usecase.dart';
import 'package:near_by_friends/features/auth/presentation/bloc/auth_bloc/auth_bloc.dart';
import 'package:near_by_friends/features/auth/presentation/bloc/signing_bloc/signing_bloc.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

final serviceLocator = GetIt.instance;

Future<void> init() async {
  // External
  serviceLocator
    ..registerSingletonAsync<SupabaseClient>(() => SupabaseConfig.initialize())
    ..registerSingleton(() => InternetConnectionChecker())
    ..registerSingleton<GoogleSignIn>(GoogleAuthConfig.initialize())
    ..registerSingleton(() => http.Client());

  await serviceLocator.allReady();

  // Core
  serviceLocator.registerLazySingleton<NetworkInfo>(
      () => NetworkInfoImpl(serviceLocator()));

  // Repository
  serviceLocator.registerLazySingleton<AuthRepository>(() => AuthRepositoryImpl(
      supabase: serviceLocator(), googleSignIn: serviceLocator()));

  // Usecase
  serviceLocator
    ..registerLazySingleton(() => WatchAuthUsecase(serviceLocator()))
    ..registerLazySingleton(() => SignInWithGoogleUsecase(serviceLocator()))
    ..registerLazySingleton(() => SignInWithEmailUsecase(serviceLocator()))
    ..registerLazySingleton(() => SignUpWithEmailUsecase(serviceLocator()));

  // Bloc
  serviceLocator
    ..registerFactory(() => AuthBloc(serviceLocator()))
    ..registerFactory(() => SigningBloc(serviceLocator()));
}
