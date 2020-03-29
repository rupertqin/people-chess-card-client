export function getNews(type?) {
  return global.$axios.$get(
    'information',
    {
      params: { type },
    }
  );
}
