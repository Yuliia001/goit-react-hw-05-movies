const defaultImgUrl = '../images/no-image.jpg';
export const getPoster = url =>
  url ? `https://image.tmdb.org/t/p/w300/${url}` : defaultImgUrl;
