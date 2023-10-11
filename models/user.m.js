
import mongoose from 'mongoose';
const { Schema } = mongoose;
const cartModel = require('./cart.m');
const validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
  },
  name: {
    type: String,
    required: true,
    maxLength: 100,
  },
  role: {
    type: Number,
    enum: {
      values: [-1, 0, 1, 2],
      message: "A user can have only 4 roles: -1 for unassigned user, 0 for institute student, 1 for other participants, 2 for campus ambassadors",
    },
  },
  number: {
    type: Number,
  },
  yearOfStudy: {
    type: Number,
  },
  instaHandle: {
    type: String,
  },
  college: {
    type: String,
  },
  userCart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cart'
  },
});

UserSchema.pre(/^find/, async function (next) {
  this.populate({
    path: 'userCart'
  });
  next();
});

const userModel = mongoose.models.User || mongoose.model('User', UserSchema);
export default userModel;
