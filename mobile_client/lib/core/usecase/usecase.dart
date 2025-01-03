import 'dart:async';

import 'package:dartz/dartz.dart';

import '../error/failure.dart';

abstract class Usecase<P, T> {
  T call(P params);
}

abstract class UsecaseFuture<P, Type>
    implements Usecase<P, Future<Either<Failure, Type>>> {
  @override
  Future<Either<Failure, Type>> call(P params);
}

abstract class UsecaseStream<P, Type>
    implements Usecase<P, Stream<Either<Failure, Type>>> {
  @override
  Stream<Either<Failure, Type>> call(P params);
}

// class Params<T> {
//   final T data;
//   Params(this.data);
// }

class AnyParam {}

class NoParams {}
