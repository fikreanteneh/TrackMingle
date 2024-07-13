import 'dart:async';

import 'package:dartz/dartz.dart';

import '../error/failure.dart';

abstract class Usecase<Params, T> {
  T call(Params params);
}
abstract class UsecaseFuture<Params, Type> implements Usecase<Params, Future<Either<Failure, Type>>> {
  @override
  Future<Either<Failure, Type>> call(Params params);
}

abstract class UsecaseStream<Params, Type> implements Usecase<Params, Stream<Either<Failure, Type>>> {
  @override
  Stream<Either<Failure, Type>> call(Params params);
}



class Params<T> {
  final T data;
  Params(this.data);
}

class NoParams {}
