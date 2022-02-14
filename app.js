const http = require('http');

const { PORT = 3000 } = process.env;

const markup = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Y do U 🖤 2 code</title>
    <meta charset="UTF-8">
    <style>
      .container {
        max-width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding-top: 100px;
      }

      p {
        font-family: sans-serif;
        font-size: 90px;
        margin: 0;
      }

      img {
        width: 512px;
        margin-top: 50px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p><font color="red">Y</font>&nbsp;do<br>U&nbsp;🖤<br>2&nbsp;code</p>
      <img src="https://code.s3.yandex.net/web-code/code.gif" alt="my code">
    </div>
  </body>
  </html>
`;

// write your code here

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf8'
    });
  res.end(markup, 'utf8');
});

server.listen(PORT);
