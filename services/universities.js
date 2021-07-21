export const getUniversityFromCache = async () => {
  let url = "https://tcas.sgp1.digitaloceanspaces.com/data/universities.json";
  const cache = await caches.open("uni");
  const cached = await cache.add(url);
  const unis = await cache.match(url);
  return unis;
};
