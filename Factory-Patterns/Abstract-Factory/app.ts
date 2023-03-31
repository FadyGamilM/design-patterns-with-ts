

// this is the client app 
import { DatabaseFactory, IDb } from "./database_factory";

// get the database instance 
const database_instance: IDb = DatabaseFactory.CreateDatabase();

// connect to the database 
database_instance.connect("connection string");