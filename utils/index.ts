import marked from 'marked';
import moment from 'moment';
import WechatJSSDK from 'wechat-jssdk/dist/client.umd';
import { genSign } from '@/api/article';


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

export async function share(title, desc) {
  const { result: sign } = await genSign(location.href);
  const wechatObj = new WechatJSSDK({
    ...sign,
    debug: process.env.NODE_ENV !== 'development',
  })
  wechatObj.initialize()
    .then(w => {
      //set up your share info, "w" is the same instance as "wechatObj"
      desc = getChinese(desc).slice(0, 20) + '... --人民棋牌 --人民网';
      wechatObj.shareOnChat({
        title,
        desc,
        type: 'link',
        link: location.href,
        imgUrl: 'https://people78.cn/img/logo.png',
        success: function (){},
        cancel: function (){}
      });
      //customize share on timeline info
      //sugar method
      wechatObj.shareOnMoment({
        title,
        desc,
        type: 'link',
        link: location.href,
        imgUrl: 'https://people78.cn/img/logo.png',
      });
    })
    .catch(err => {
      console.error('===== error', err);
    });
}
