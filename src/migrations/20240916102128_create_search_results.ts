import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  console.log("Running migration: create_search_results");

  const obj = await knex.schema.createTable("search_results", (table) => {
    table.increments("id").primary();
    table.string("trackName").notNullable();
    table.string("artistName").nullable();
    table.string("collectionName").nullable();
    table.string("trackViewUrl").nullable(); // Make this column nullable
    table.timestamps(true, true); // Creates `created_at` and `updated_at` columns
  });
  // console.log("obj:", obj);
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("search_results");
}
