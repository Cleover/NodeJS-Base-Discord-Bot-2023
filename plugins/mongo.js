const {
    Example,
} = require('../models');

module.exports = client => {

    client.createExample = async (example) => {
        // Check if the example already exists
        const fetchedUser = await Example.findOne({
            example: example
        });

        if (fetchedUser) return fetchedUser;

        let newExample = new Example({
            example: example
        }).save();

        return newExample;
    }

    client.fetchExample = async (example) => {
        const fetchedUser = await Example.findOne({
            example: example
        });

        if (fetchedUser) return fetchedUser;

        return null;
    }

}