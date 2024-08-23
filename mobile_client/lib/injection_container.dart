import 'package:get_it/get_it.dart';
import 'package:google_sign_in/google_sign_in.dart';
import 'package:http/http.dart' as http;
import 'package:internet_connection_checker/internet_connection_checker.dart';
import 'package:track_mingle/core/config/google_config.dart';
import 'package:track_mingle/core/config/supabase_config.dart';
import 'package:track_mingle/core/network/network_info.dart';
import 'package:track_mingle/data/repository_impl/auth_repository_impl.dart';
import 'package:track_mingle/domain/repository/auth_repository.dart';
import 'package:track_mingle/domain/usecase/auth_usecase.dart';
import 'package:track_mingle/presentation/blocs/auth_bloc/auth_bloc.dart';
import 'package:track_mingle/presentation/blocs/signing_bloc/signing_bloc.dart';
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
