const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerDogSchema = new Schema({
    name: String,
    age: Number,
    breed: String,
    genre: String,
    photo: String,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const RegisterDog = mongoose.model('RegisterDog', registerDogSchema);
module.exports = RegisterDog;
