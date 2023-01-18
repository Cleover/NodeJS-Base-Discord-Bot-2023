const express = require('express');
module.exports = {
    init: (client) => {
        const app = express();
        app.get('/example', async (req, res) => {
            return res.status(200).send("Example");
        });
        app.listen(8080);
    }
}