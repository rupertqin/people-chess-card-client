import { Wechat } from 'wechat-jssdk'
import * as qs from 'querystring'

const wx = new Wechat({
  //set your oauth redirect url, defaults to localhost
  // "wechatRedirectUrl": "http://yourdomain.com/wechat/oauth-callback",
  //"wechatToken": "wechat_token", //not necessary required
  "appId": process.env.APP_ID,
  "appSecret": process.env.APP_SECRET,
});


export default async function (req, res, next) {
  const { url } = qs.parse(req.url.split('?')[1]);
  const result = await wx.jssdk.getSignature(url);
  console.log('====', result)
  res.writeHead(200, { 'Content-Type': 'text/json' });
  res.end(`{
    "code"  : 0,
    "result": ${JSON.stringify(result)}
  }`);
}
