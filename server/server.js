const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require ('dotenv').config();
const coursesRoutes = require('./routes/courses.route');
const usersRoutes = require('./routes/users.route');
const scoresRoutes = require('./routes/scores.route');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/courses', coursesRoutes);
app.use('/users', usersRoutes);
app.use('/scores', scoresRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
