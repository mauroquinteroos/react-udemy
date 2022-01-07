export const getImagen = async () => {
  try {
    const apiKey = "0CX8QOffwaN0HW4Dl5aHW4tE6qh6gqTH";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    return "No existe";
  }
};
