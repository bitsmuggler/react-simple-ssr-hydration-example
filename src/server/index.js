import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../client/App';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  res.send(
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>SSR React App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>debugger;</script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
  );
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server is running on port: ', port);
});
