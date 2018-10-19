const express = require("express");
// const path= require("path");
// const session = require("express-session");
// const cors = require("cors");
// const errorHandler = require("errorhandler");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// //Configure mongooes's promise to global promise
// mongoose.promise = global.Promise;

//Configure this app
// app.use(cors());
// app.use(require("morgan")("dev"));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(session({ secret: "passport-tutorial", cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false}));

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// // Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// // Add routes, both API and view
app.use(routes);

// if(!isProduction) {
//   app.use(console.errorHandler());
// }

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gosalon");
// mongoose.set('debut', true)

// //Models
// require('./models/User');
// require('./config/passport');

// //Error handler & middleswares
// if(!isProduction) {
//   app.use((err, req, res) => {
//     res.status(err.status || 500);

//     res.json({
//       errors: {
//         message: err.message,
//         error: err,
//       },
//     });
//   });
// }

// app.use((err, req, res) => {
//   res.status(err.status || 500);

//   res.json({
//     errors: {
//       message: err.message,
//       error: {},
//     },
//   });
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

