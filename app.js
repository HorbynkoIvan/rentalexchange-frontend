var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var React = require("react");
var reactViews = require('express-react-views');


var routes = require('./routes/index');
var users = require('./routes/users');
//var routes_reg_cong = require('./routes/activation-route');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hjs');
app.set('view engine', 'js');
app.engine('js', reactViews.createEngine());

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/user-registration-confirm', function (req, res) {
    const uuid_r= req.query['uuid']
    var initialState = {
        uuidForRequest: uuid_r,
        urlForRequest: "http://localhost:8002/user/activation"
    };
    res.render('Html', { data: initialState });
});

app.use('/', routes);
app.use('/users', users);
//app.use('/registration-confirm', routes_reg_cong);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
