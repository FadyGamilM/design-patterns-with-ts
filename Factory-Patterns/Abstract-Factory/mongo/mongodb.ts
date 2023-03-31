import { IDb } from "../database_factory";
import { database } from "../types/database";

export class mongodb implements IDb
{
   // implement the connect method 
   connect(connectionString: string): database
   {
      // 1) ➜ apply connection using the received connection string
      // .....

      // 2) ➜ log to the console to inform that your connection is estagblished succesffully
      console.log("connected to mongodb successfully");

      // 3) ➜ create an instance of the database and return it to the user 
      const databaseInstance: database = {
         db_name: "db_name",
         db_pass: "db_pass",
         db_size: 160,
         db_user: "db_user"
      };
      return databaseInstance;
   }

}