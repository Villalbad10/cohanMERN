import { createPool } from "mysql2/promise";

export const poll = createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "admin",
  database: "dbcohan",
});
