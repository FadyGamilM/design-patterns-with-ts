import { mongodb } from "./mongo/mongodb";
import { postgresdb } from "./postgres/postgresdb";
import { database } from "./types/database";

import dotenv from "dotenv";
dotenv.config();

// abstraction .. 
export interface IDb
{
   // method to connect to the database server
   connect(connectionString: string): database;
}

// a factory class which is the code/module responsible for creating an instance of the database 
export class DatabaseFactory
{
   // a method that creates a database instance 
   public static CreateDatabase(): IDb
   {
      // return the required database provider connection and instance
      return process.env.DB_PROVIDER === "postgres" ? new postgresdb() : new mongodb();
   }
}