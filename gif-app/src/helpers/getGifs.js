const GIPHY_URL = "https://api.giphy.com/v1/gifs";
const API_KEY = "0CX8QOffwaN0HW4Dl5aHW4tE6qh6gqTH";

export const getGifs = async (category, limit) => {
  let categoryURI = encodeURI(category);
  const URL = `${GIPHY_URL}/search?q=${categoryURI}&limit=${limit}&api_key=${API_KEY}`;

  let response = await fetch(URL);
  let { data } = await response.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images?.downsized_medium.url,
  }));
  return gifs;
};
