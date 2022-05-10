import express from "express";
import SearchController from "../controller/search.js";

const searchRouter = express.Router();

const searchController = new SearchController();

searchRouter.get(
    "/search/:searchText",
    searchController.fetchSearchResult
  );

export default searchRouter;