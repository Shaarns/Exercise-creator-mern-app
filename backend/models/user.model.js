// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       trim: true,
//       unique: true,
//       minlength: 4,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const User = mongoose.model('user', userSchema);
// module.exports = User;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 4,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('user', userSchema);
module.exports = User;
