import { Sequelize } from "sequelize";

const db = new Sequelize({
  dialect: "mysql",
  host: "sql6.freemysqlhosting.net",
  database: "sql6459132",
  username: "sql6459132",
  password: "ppAHZzWRCj"
});

export default db;
