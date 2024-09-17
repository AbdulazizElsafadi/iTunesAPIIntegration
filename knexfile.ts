import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "better-sqlite3",
    connection: {
      filename: "./data.sqlite",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./src/migrations", // Path to your migration files
    },
  },
};

export default config;
