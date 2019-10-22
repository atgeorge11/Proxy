const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static(__dirname))

app.listen(3000, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port 3000");
    }
});