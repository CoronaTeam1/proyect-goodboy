const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharactersSchema = new Schema({
    index: Number,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Characters = mongoose.model('Characters', CharactersSchema);
module.exports = Characters;
