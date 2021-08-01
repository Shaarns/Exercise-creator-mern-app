// // const express = require('express');
// // const cors = require('cors');
// // const mongoose = require('mongoose');

// // require('dotenv').config();
// // const app = express();

// // const uri = process.env.ATLAS_URI;
// // mongoose.connect(uri, {
// //   useNewUrlParser: true,
// //   useCreateIndex: true,
// //   useUnifiedTopology: true,
// // });

// // const connection = mongoose.connection;
// // connection.once('open', () => {
// //   console.log('Mongoose database connection established successfully ');
// // });

// // const port = process.env.PORT || 5000;

// // app.use(cors());
// // app.use(express.json());

// // app.listen(port, () => {
// //   console.log(` Server is listening on port : ${port}`);
// // });

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// const port = process.env.PORT || 5000;
// require('dotenv').config();

// const uri = process.env.ATLAS_URI;

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

// const connection = mongoose.connection;

// connection.once('open', () => {
//   console.log('Connection to database established succesfully');
// });

// app.use(cors());
// app.use(express.json());

// app.listen(port, () => {
//   console.log(`Server is listening on port: ${port}`);
// // });

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// require('dotenv').config();
// const app = express();
// const port = process.env.PORT || 5000;

// const uri = process.env.ATLAS_URI;

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

// const connection = mongoose.connection;

// connection.once('open', () => {
//   console.log('Connection to database established succesfully');
// });

// app.use(cors());
// app.use(express.json());

// const exerciseRouter = require('./routes/exercises');
// const userRouter = require('./routes/users');

// app.use('/user', userRouter);
// app.use('/exercise', exerciseRouter);

// app.listen(port, () => {
//   console.log(`Server is listening on port: ${port}`);
// });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.ATLAS_URI;

const app = express();
const connection = mongoose.connection;

const port = process.env.PORT || 5000;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

connection.once('open', () => {
  console.log('connection is established to the database');
});

app.use(express.json());
app.use(cors());

const exerciseroute = require('./routes/exercises');
const userroute = require('./routes/users');

app.use('/exercise', exerciseroute);
app.use('/user', userroute);

app.listen(port, () => {
  console.log('server is listening on port: 5000');
});
