// Only allow http(s) URLs so stored services can't smuggle in javascript:/data: links
export const isSafeHttpUrl = (url) => {
  try {
    const { protocol } = new URL(url);
    return protocol === 'https:' || protocol === 'http:';
  // eslint-disable-next-line no-unused-vars
  } catch (e) {
    return false;
  }
};

export const isValidService = (service) =>
  service !== null &&
  typeof service === 'object' &&
  typeof service.name === 'string' &&
  isSafeHttpUrl(service.link) &&
  (!service.logo || isSafeHttpUrl(service.logo));
