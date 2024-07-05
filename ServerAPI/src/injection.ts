import { container } from "tsyringe";
import { prisma } from "./config/prisma";
import supabase from "./config/supabase";
import AuthenticationProvider from "./infrastructure/authentication/authentication.provider";
import FriendRepository from "./infrastructure/repositories/friend.repository";
import FriendRequestRepository from "./infrastructure/repositories/friend.request.repository";
import GenericRepository from "./infrastructure/repositories/generic.repository";
import UserRepository from "./infrastructure/repositories/user.repository";

export default function PrepareDependencies() {
  //Config Services
  container.register("SupabaseClient", {
    useValue: supabase(),
  });
  container.register("PrismaClient", {
    useValue: prisma(),
  });

  //Authentication Provider
  container.register("IAuthenticationProvider", {
    useClass: AuthenticationProvider,
  });

  //Repositories
  container.register("IUserRepository", {
    useClass: UserRepository,
  });
  container.register("IFriendRequestRepository", {
    useClass: FriendRequestRepository,
  });
  container.register("IFriendRepository", {
    useClass: FriendRepository,
  });
  container.register("IGenericRepository", {
    useClass: GenericRepository,
  });
}
