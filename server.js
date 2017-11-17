const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3333;

import App from './src/components/App.js';
import { StaticRouter } from 'react-router-dom';

app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  const context = {};
  // console.log('url', req.url);
  let html = ReactDOMServer.renderToString(
    <StaticRouter location={ req.url } context={ context }>
      <App />
    </StaticRouter>
  );

  if (context.url) {

    res.status = 302;
    res.redirect(context.url);
    res.end();
    
  } else {

    fs.readFile('./index.html', 'utf8', function (err, data) {
      if (err) throw err;
      
      // Inserts the rendered React HTML into our main div
      const document = data.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`);
  
      // Sends the response back to the client
      res.write(document);
      res.end();
    });

  }
  
});



app.listen(PORT, () => {
  console.log(`test-ssr16 app is listening on ${PORT}`)
});
