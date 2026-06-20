const {
  getMediaList,
  getMediaDetails,
} = require("../utility/omdb");

// Action TV Shows
const getActionTvShows = async (req, res) => {
  try {
    const data = await getMediaList("breaking bad");

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

// Comedy TV Shows
const getComedyTvShows = async (req, res) => {
  try {
    const data = await getMediaList("friends");

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

// Mystery TV Shows
const getMysteryTvShows = async (req, res) => {
  try {
    const data = await getMediaList("sherlock");

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

// Drama TV Shows
const getDramaTvShows = async (req, res) => {
  try {
    const data = await getMediaList("game of thrones");

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

// Crime TV Shows
const getCrimeTvShows = async (req, res) => {
  try {
    const data = await getMediaList("money heist");

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

// TV Show Details by IMDb ID
const getTvShowDetails = async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({
        message: "TV show id is required.",
        status: "failure",
      });
    }

    const data = await getMediaDetails(id);

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
  getActionTvShows,
  getComedyTvShows,
  getMysteryTvShows,
  getDramaTvShows,
  getCrimeTvShows,
  getTvShowDetails,
};