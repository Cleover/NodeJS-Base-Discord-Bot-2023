const mongoose = require('mongoose');

module.exports = {
    init: (client) => {
        mongoose.connect(client.config.mongoUri).catch(err => console.log(err.reason));

        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('\nMongoose connection successfully opened\n'.rainbow);
        });

        mongoose.connection.on('err', err => {
            console.error(`\nMongoose connection Error\n ${err.stack}`.bold.red);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('\nMongoose connection disconnected\n'.red);
        });
    }
};