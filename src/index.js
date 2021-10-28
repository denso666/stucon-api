const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

//      APP
const app = express();

//      SETTINGS
app.set('port',process.env.PORT || 4000);
app.set('appName',"Student Connect API");


//      MIDDLEWARE
app.use( cors() );
app.use( morgan('dev') );
app.use( express.urlencoded( {extended:false} ) );
app.use( express.json() );


//      ROUTES
app.use('/api/student',require('./Student/Student.routes'));
//app.use('/api/company',require('./Company/Company.routes'));


//      LISTEN
app.listen( app.get( 'port' ), () => {
    console.log( "\n", app.get('appName') );
    console.log( "Server on port: ", app.get( 'port' ) );
});