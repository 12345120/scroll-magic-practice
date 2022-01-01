const express = require("express");

const app = express();
app.use('/', express.static(__dirname+"/public"));

app.get("/", (req, res) => {
  res.render('index')
});

app.listen(3000);


// resource: 
// https://www.youtube.com/watch?v=-lRgL9kj_h0
  // express: serving static files and express routing 
// https://expressjs.com/en/starter/static-files.html
  // express documentation on express.static()


