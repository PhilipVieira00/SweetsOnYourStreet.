const express = require("express");
const bodyParser = require('body-parser')
const Pusher = require('pusher');
require("dotenv").config();
const app = express();

const routes = require("./routes");
console.log(process.env.REACT_APP_PUSHER_APP_ID);
let pusher = new Pusher({
  appId: process.env.REACT_APP_PUSHER_APP_ID,
  key: process.env.REACT_APP_PUSHER_KEY,
  secret: process.env.REACT_APP_PUSHER_SECRET,
  cluster: process.env.REACT_APP_PUSHER_CLUSTER,
  encrypted: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/pusher/auth', (req, res) => {
  let socketId = req.body.socket_id;
  let channel = req.body.channel_name;
  random_string = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  let presenceData = {
      user_id: random_string,
      user_info: {
          username: '@' + random_string,
      }
  };
  let auth = pusher.authenticate(socketId, channel, presenceData);
  res.send(auth);
});

app.post('/update-location', (req, res) => {
  // trigger a new post event via pusher
  pusher.trigger('presence-channel', 'location-update', {
      'username': req.body.username,
      'location': req.body.location
  })
  res.json({ 'status': 200 });
});
//Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//For connecting MongoDB
const mongoose = require("mongoose");
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksearch");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
