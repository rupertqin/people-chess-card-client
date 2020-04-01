export function getNews(type?) {
  return global.$axios.$get(
    'information',
    {
      params: { type },
    }
  );
}

export function getOneNews(id) {
  return global.$axios.$get(`sportnews/${id}`);
}

export function getSportNews(type?) {
  return global.$axios.$get(
    'sportnews',
    {
      params: { type },
    }
  );
}

export function getOneSportNews(id) {
  return global.$axios.$get(`sportnews/${id}`);
}

export function getProducts() {
  return global.$axios.$get('product');
}
