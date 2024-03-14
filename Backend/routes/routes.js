import express from "express";
import {
  addNewMovieController,
  deleteMovieController,
  filterMovieController,
  getAllMoviesController,
  searchMovieController,
  updateMovieController,
} from "../controller/controller.js";

import multer from "multer";
const upload = multer();
const router = express.Router();

router.get("/movies", getAllMoviesController);

router.post("/movies/add", upload.none(), addNewMovieController);

router.delete("/movies/delete/:id", deleteMovieController);

router.put("/update/movies/update/:id", upload.none(), updateMovieController);

router.get("/movies/search", searchMovieController);

router.get("/movies/filter", filterMovieController);

export default router;
