const express = require("express");
// console.log(" MovieRouter Loaded");
const MoviesRouter = express.Router();

const {
  getActionMovies,
  getComedyMovies,
  getHorrorMovies,
  getMovieDetails,
  getRomanceMovies,
  getAnimeMovies,
  searchMovies,
} = require("../controllers/MovieController");

// Search Route
MoviesRouter.get("/search", searchMovies);

// Category Routes
MoviesRouter.get("/action", getActionMovies);
MoviesRouter.get("/comedy", getComedyMovies);
MoviesRouter.get("/horror", getHorrorMovies);
MoviesRouter.get("/romance", getRomanceMovies);
MoviesRouter.get("/anime", getAnimeMovies);

// Details Route
MoviesRouter.get("/details", getMovieDetails);

// Test Route
MoviesRouter.get("/test", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Movie Router Working",
  });
});

module.exports = MoviesRouter;