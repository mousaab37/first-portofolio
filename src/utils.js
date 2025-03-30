export const getImageUrl = (path) => {
  return new URL(`/my%20page/assets/${path}`, import.meta.url).href;
};
