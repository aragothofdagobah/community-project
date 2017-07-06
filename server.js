require('dotenv').config();

var express          = require('express'),
    app              = express(),
    path             = require('path'),
    port             = process.env.PORT || 8080,
    mongoose         = require('mongoose'),
    expressLayouts   = require('express-ejs-layouts'),
    bodyParser       = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(require('./app/routes'));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('connection to mLab succesful');
 app.listen(port, () => {
   console.log(`App is listening on ${port}`);
 })
});
