import marked from 'marked';
import moment from 'moment';


export function markdown(string = '') {
  return string.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, `<img src="${process.env.FILE_URL}/$1">`);

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

export function getChinese(strValue) {  
  if(strValue!= null && strValue!= ""){  
    var reg = /[\u4e00-\u9fa5]/g;   
    return strValue.match(reg).join("");  
  }  
  else  
    return "";  
}  

