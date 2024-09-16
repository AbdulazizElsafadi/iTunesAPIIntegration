import knex from "knex";
import knexConfig from "../knexfile";

const db = knex(knexConfig.development);

// db.raw("SELECT name FROM sqlite_master WHERE type='table';")
//   .then((result) => {
//     console.log("Tables in the database:", result);
//   })
//   .catch((error) => {
//     console.error("Error querying tables:", error);
//   });
export default db;
