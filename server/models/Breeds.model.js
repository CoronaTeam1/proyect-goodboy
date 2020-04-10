const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BreedSchema = new Schema({
    name: String,
    image: String,
    description: String,
    info: Array,
    index: Number,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Dog = mongoose.model('Breed', BreedSchema);
module.exports = Dog;
