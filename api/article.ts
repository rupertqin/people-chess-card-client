/* eslint-disable camelcase */
export async function getNews(类型?) {
  const news = await global.$axios.$get(
    'information',
    {
      params: {
        类型,
        _sort: '权重:DESC,publish_at:DESC,updated_at:DESC',
      },
    }
  );
  return news.map(n => ({
    ...n,
    updated_at: n.publish_at || n.updated_at,
  }));
}

export async function getOneNews(id) {
  const article: any = await global.$axios.$get(`information/${id}`);
  article.updated_at = article.publish_at || article.updated_at;
  return article;
}

export async function getSportNews(类型?) {
  const news = await global.$axios.$get(
    'sportnews',
    {
      params: {
        类型,
        _sort: '权重:DESC,publish_at:DESC,updated_at:DESC',
      },
    }
  );
  return news.map(n => ({
    ...n,
    updated_at: n.publish_at || n.updated_at,
  }));
}

export async function getOneSportNews(id) {
  const article: any = await global.$axios.$get(`sportnews/${id}`);
  article.updated_at = article.publish_at || article.updated_at;
  return article;
}

export async function getProducts() {
  const { 添加产品 } = await global.$axios.$get('product');
  return 添加产品.filter(p => p.logo);
}

export enum ColumnType {
  FAKE = 'fakes',
  PVPRULE = 'pvprules',
  CEST = 'cests'
}

export async function getColumns(type: ColumnType = ColumnType.FAKE) {
  const news = await global.$axios.$get(
    type,
    {
      params: {
        _sort: '权重:DESC,publish_at:DESC,updated_at:DESC',
      },
    }
  );
  return news.map(n => ({
    ...n,
    updated_at: n.publish_at || n.updated_at,
  }));
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

export async function getOneFake(id) {
  const article: any = await global.$axios.$get(`fakes/${id}`);
  article.updated_at = article.publish_at || article.updated_at;
  return article;
}

export async function getOnePvprule(id) {
  const article: any = await global.$axios.$get(`pvprules/${id}`);
  article.updated_at = article.publish_at || article.updated_at;
  return article;
}

export async function getOneCest(id) {
  const article: any = await global.$axios.$get(`cests/${id}`);
  article.updated_at = article.publish_at || article.updated_at;
  return article;
}
