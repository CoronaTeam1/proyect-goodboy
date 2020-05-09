const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrainingSchema = new Schema({
    learn: String,
    title: String,
    url: String,
    text: {
        description: String,
        points: Array,
        elements: String,
        chip: String
    },
    level: Number,
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Training = mongoose.model('Training', TrainingSchema);
module.exports = Training;