const {
  getMediaList,
  OMDB_ENDPOINT,
} = require("../utility/omdb");

const getActionMovies = async (req, res) => {
  try {
    const data = await getMediaList(
      OMDB_ENDPOINT.fetchActionMovies
    );

    res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

const getComedyMovies = async (req, res) => {
  try {
    const data = await getMediaList(
      OMDB_ENDPOINT.fetchComedyMovies
    );

    res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

const getHorrorMovies = async (req, res) => {
  try {
    const data = await getMediaList(
      OMDB_ENDPOINT.fetchHorrorMovies
    );

    res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

const getRomanceMovies = async (req, res) => {
  try {
    const data = await getMediaList(
      OMDB_ENDPOINT.fetchRomanceMovies
    );

    res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

const getAnimeMovies = async (req, res) => {
  try {
    const data = await getMediaList(
      OMDB_ENDPOINT.fetchAnimeMovies
    );

    res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

// Search Movies
const searchMovies = async (req, res) => {
  try {
    console.log("Query:", req.query);

    const { q } = req.query;

    if (!q) {
      return res.status(400).json({
        status: "failure",
        message: "Search query is required",
      });
    }

    const data = await getMediaList(q);

    console.log("Search Response:", data);

    res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (err) {
    console.log("SEARCH ERROR:", err);

    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};
// Movie Details
const getMovieDetails = async (req, res) => {
  try {
    const { title } = req.query;

    const data = await getMediaList(title);

    res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

module.exports = {
  getActionMovies,
  getComedyMovies,
  getHorrorMovies,
  getRomanceMovies,
  getAnimeMovies,
  getMovieDetails,
  searchMovies,
};