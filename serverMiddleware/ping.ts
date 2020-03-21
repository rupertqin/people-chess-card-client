export default function (req, res, next) {
  res.writeHead(200, { 'Content-Type': 'text/json' });
  res.end(`{
    "code"  : 0,
    "result": "success"
  }`);
}
