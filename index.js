const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const { secret } = require('./config/config');

const port = 3000;

const app = express();


///// MIDDLEWARE //////////////////////////////////////////////////////////////////////////////////////////
const corsOptions = {
    origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({
    secret,
    saveUninitialized: true,
    resave: true
}));

///// ROUTES /////////////////////////////////////////////////////////////////////////////////////////////
const usersRoutes = require('./routes/usersRoutes');
const profilesRoutes = require('./routes/profilesRoutes');


///// ENDPOINTS //////////////////////////////////////////////////////////////////////////////////////////
app.use('/api/profile', profilesRoutes);
app.use('/api/users', usersRoutes);



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});