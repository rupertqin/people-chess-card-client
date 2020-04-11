export function getNews(类型?) {
  return global.$axios.$get(
    'information',
    {
      params: { 类型 },
    }
  );
}

export function getOneNews(id) {
  return global.$axios.$get(`information/${id}`);
}

export function getSportNews(类型?) {
  return global.$axios.$get(
    'sportnews',
    {
      params: { 类型 },
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

export function getFriendlinks() {
  return global.$axios.$get('friendlink');
}

export function getSiteinfo() {
  return global.$axios.$get('siteinfo');
}

export function getMenu() {
  return global.$axios.$get('menu');
}

export function getFooter() {
  return global.$axios.$get('footer');
}

export function getCopyright() {
  return global.$axios.$get('copyright');
}

export function getOneFake(id) {
  return global.$axios.$get(`fakes/${id}`);
}

export function getOnePvprule(id) {
  return global.$axios.$get(`pvprules/${id}`);
}

export function getOneCest(id) {
  return global.$axios.$get(`cests/${id}`);
}
