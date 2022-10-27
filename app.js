const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.json({
        "slackUsername": "eddy", 
        "backend": true, 
        "age": 29, 
        "bio": "I'm Edet Emmanuel Asuqo, a backend engineer with nodejs. I am a very good team player with excellent work rate"
    })
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})