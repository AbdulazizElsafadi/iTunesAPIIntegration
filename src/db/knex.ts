import knex from "knex";
import knexConfig from "../../knexfile";

const db = knex(knexConfig.development);

export async function verifySchema() {
  // Check if the table exists
  const tableExists = await db.schema.hasTable("search_results");
  console.log("Table exists:", tableExists);

  if (tableExists) {
    // Get table schema
    const schema = await db.raw("PRAGMA table_info(search_results);");
    console.log("Schema of search_results:", schema);
  }
}

// Call the function to verify
// verifySchema();

export default db;
