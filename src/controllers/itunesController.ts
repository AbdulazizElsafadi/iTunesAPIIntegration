import { Request, Response } from "express";
import axios from "axios";
import { iTunesResult } from "../models/itunesModels";
import { search_results } from "../models/search_results";
import db from "../db/knex";

export const searchITunes = async (req: Request, res: Response) => {
  try {
    const { term } = req.query;
    if (!term) return res.status(400).json({ error: "Term is required" });

    // Fetch from iTunes API
    const response = await axios.get(process.env.ITUNES_API_URL as string, {
      params: { term, limit: 10 },
    });
    const results: iTunesResult[] = response.data.results;

    // console.log("results:", results);

    // Save results to DB
    for (let result of results) {
      db("search_results")
        .insert({
          trackName: result.trackName,
          artistName: result.artistName,
          collectionName: result.collectionName,
          trackViewUrl: result.trackViewUrl,
        })
        .then((data) => {
          console.log("Data inserted:", data);
        })
        .catch((error) => {
          console.error("Insert Error:", error);
        });
    }

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
