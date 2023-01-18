const mongoose = require('mongoose');

const example = mongoose.Schema({
    example: { type: String, require: true },
});


module.exports = mongoose.model('Example', example);