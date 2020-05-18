const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name:String,
  username: String,
  password: String,
  isLogged:{type:Boolean,default:true},
  dog: {
    name: String,
    age: String,
    breed: String,
    genre: String,
    photo: String,
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
