const defaultImgUrl = '../images';
export const getPoster = url =>
  url ? `https://image.tmdb.org/t/p/w500/${url}` : defaultImgUrl;
