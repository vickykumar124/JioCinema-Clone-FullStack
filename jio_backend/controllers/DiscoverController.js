

const { getMediaList, OMDB_ENDPOINT} = require("../utility/omdb");

const getNowPlaying = async (req, res) => {
  try {
    const data = await getMediaList(
      OMDB_ENDPOINT.fetchCurrentMovies
    );

    res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (err) {
    res.status(500).json({
      status: "failure",
      message: err.message,
    });
  }
};

const getTrending = async (req, res) => {
  try {
    const data = await getMediaList(
      OMDB_ENDPOINT.fetchTrending
    );

    res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (err) {
    res.status(500).json({
      status: "failure",
      message: err.message,
    });
  }
};

const getTopRated = async (req, res) => {
  try {
    const data = await getMediaList(
      OMDB_ENDPOINT.fetchTopRated
    );

    res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (err) {
    res.status(500).json({
      status: "failure",
      message: err.message,
    });
  }
};

const getUpcoming = async (req, res) => {
  try {
    const data = await getMediaList(
      OMDB_ENDPOINT.fetchUpcoming
    );

    res.status(200).json({
      status: "success",
      response: data,
    });
  } catch (err) {
    res.status(500).json({
      status: "failure",
      message: err.message,
    });
  }
};

module.exports = {
  getNowPlaying,
  getTrending,
  getTopRated,
  getUpcoming,
};