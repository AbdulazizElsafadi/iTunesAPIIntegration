// src/migrations/20240916140030_create_knex_migrations_table.ts
import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  console.log("Creating search_results table");

  await knex.schema.createTable("search_results", (table) => {
    table.increments("id").primary();
    table.string("wrapperType").nullable();
    table.string("kind").nullable();
    table.integer("collectionId").nullable();
    table.integer("trackId").nullable();
    table.string("artistName").nullable();
    table.string("collectionName").nullable();
    table.string("trackName").nullable();
    table.string("artistViewUrl").nullable();
    table.string("collectionCensoredName").nullable();
    table.string("trackCensoredName").nullable();
    table.decimal("artistId").nullable();
    table.integer("collectionArtistId").nullable();
    table.string("collectionArtistViewUrl").nullable();
    table.string("collectionViewUrl").nullable();
    table.string("trackViewUrl").nullable();
    table.string("previewUrl").nullable();
    table.string("artworkUrl30").nullable();
    table.string("artworkUrl60").nullable();
    table.string("artworkUrl100").nullable();
    table.decimal("collectionPrice", 10, 2).nullable();
    table.decimal("trackPrice", 10, 2).nullable();
    table.decimal("trackRentalPrice", 10, 2).nullable();
    table.decimal("collectionHdPrice", 10, 2).nullable();
    table.decimal("trackHdPrice", 10, 2).nullable();
    table.decimal("trackHdRentalPrice", 10, 2).nullable();
    table.date("releaseDate").nullable();
    table.boolean("isStreamable").nullable();
    table.string("collectionExplicitness").nullable();
    table.string("trackExplicitness").nullable();
    table.integer("discCount").nullable();
    table.integer("discNumber").nullable();
    table.integer("trackCount").nullable();
    table.integer("trackNumber").nullable();
    table.integer("trackTimeMillis").nullable();
    table.string("country").nullable();
    table.string("currency").nullable();
    table.string("primaryGenreName").nullable();
    table.string("contentAdvisoryRating").nullable();
    table.text("shortDescription").nullable();
    table.text("longDescription").nullable();
    table.boolean("hasITunesExtras").nullable();
    table.timestamps(true, true);
  });

  console.log("search_results table created");
}

export async function down(knex: Knex): Promise<void> {
  console.log("Dropping search_results table");

  await knex.schema.dropTableIfExists("search_results");

  console.log("search_results table dropped");
}
