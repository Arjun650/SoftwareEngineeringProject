import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

if(process.env.NODE_ENV != "production"){
    globalThis.prisma = db;
}

//globalThis.prisma: This global variable ensures that the prisma client instance is resused across hot reloads during development. without this, each time your application reloads, a new instance of hte prisma client would be creatd, potentially leading to connection issues and memory leaks.

