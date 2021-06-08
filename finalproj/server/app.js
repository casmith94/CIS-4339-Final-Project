let express = require('express'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  database = require('./Database'),
  bodyParser = require('body-parser');

// Connect mongoDB
const url = "mongodb://127.0.0.1:27017"
const dbName = 'project'
connectionString = url + '/' + dbName

mongoose.Promise = global.Promise;
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Database connected")
  },
  error => {
    console.log("Database could't be connected to: " + error)
  }
)

const subscriberAPI = require('../server/routes/subscriber.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// API
app.use('/api', subscriberAPI)

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});