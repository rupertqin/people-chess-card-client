export function getNews(type?) {
  return global.$axios.$get(
    'information',
    {
      params: { type },
    }
  );
}

export function getOneNews(id) {
  return global.$axios.$get(`information/${id}`);
}
