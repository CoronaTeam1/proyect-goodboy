const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
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

const Dog = mongoose.model('Dog', DogSchema);
module.exports = Dog;
