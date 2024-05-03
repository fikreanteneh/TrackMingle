import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";

let prismaClient: PrismaClient;

export const prisma = () => {
  if (prismaClient) return prismaClient;
  const pool = new Pool({ connectionString: `${process.env.DATABASE_URL}` });
  const adapter = new PrismaPg(pool);
  prismaClient = new PrismaClient();
  return prismaClient;
};
