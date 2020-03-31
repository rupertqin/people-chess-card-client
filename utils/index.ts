import marked from 'marked';
export function markdown(string) {
  marked.setOptions({
    baseUrl     : process.env.FILE_URL,
    breaks      : true,
    gfm         : true,
    headerIds   : true,
    headerPrefix: '',
    highlight   : null,
    langPrefix  : 'language-',
    mangle      : true,
    pedantic    : false,
    sanitize    : false,
    sanitizer   : null,
    silent      : false,
    smartLists  : false,
    smartypants : false,
    xhtml       : false,
  });
  return marked(string);
}
