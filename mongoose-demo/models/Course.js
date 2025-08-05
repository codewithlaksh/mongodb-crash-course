const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
});

module.exports = {
    Course: mongoose.model('Course', CourseSchema)
}