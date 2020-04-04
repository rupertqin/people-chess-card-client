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

export enum ColumnType {
  FAKE = 'fakes',
  PVPRULE = 'pvprules',
  CEST = 'cests'
}

export function getColumns(type: ColumnType = ColumnType.FAKE) {
  return global.$axios.$get(type);
}

export function getHeaderBanner() {
  return global.$axios.$get('headerbanner');
}

export function getSlider() {
  return global.$axios.$get('slider');
}

export function getColumnbanner() {
  return global.$axios.$get('columnbanner');
}

export function getRightbanner() {
  return global.$axios.$get('rightbanner');
}
