const OMDB_ENDPOINT = {
  fetchCurrentMovies: "batman",
  fetchTopRated: "avengers",
  fetchTrending: "marvel",
  fetchPopular: "spiderman",
  fetchUpcoming: "superman",
  fetchActionMovies: "john wick",
  fetchComedyMovies: "hangover",
  fetchHorrorMovies: "conjuring",
  fetchRomanceMovies: "titanic",
  fetchAnimeMovies: "naruto",
};

// Search by title
async function getMediaList(searchTerm) {
  try {
    const url = `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${searchTerm}`;

    console.log("Search URL:", url);

    const response = await fetch(url);
    const data = await response.json();

    console.log("Search Data:", data);

    return {
      results: data.Search || [],
    };
  } catch (error) {
    console.log("Search Error:", error);

    return {
      results: [],
    };
  }
}

// Get details by IMDb ID
async function getMediaDetails(id) {
  try {
    const url = `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}`;

    console.log("Details URL:", url);

    const response = await fetch(url);
    const data = await response.json();

    console.log("Details Data:", data);

    return {
      results: [data],
    };
  } catch (error) {
    console.log("Details Error:", error);

    return {
      results: [],
    };
  }
}

module.exports = {
  getMediaList,
  getMediaDetails,
  OMDB_ENDPOINT,
};