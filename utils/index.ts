import marked from 'marked';
import moment from 'moment';


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

export function YYYYMMDD(date) {
  return moment(date).format('YYYY年MM月DD日');
}
