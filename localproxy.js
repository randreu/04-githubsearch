var httpProxy = require('http-proxy'),
  https = require('https'),
  http = require('http');

var proxy = httpProxy.createProxyServer();
http.createServer(function (req, res) {

  res.oldWriteHead = res.writeHead;
  res.writeHead = function(statusCode, headers) {
    res.setHeader('access-control-allow-headers', 'X-XSRF-TOKEN, Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, Accept-Encoding, X-GitHub-OTP, X-Requested-With');
    res.oldWriteHead(statusCode, headers);
  }

  proxy.web(req, res, {
    target : 'https://api.github.com',
    agent  : https.globalAgent,
    headers: {
      host: 'api.github.com'
    }
  });
}).listen(3001);
