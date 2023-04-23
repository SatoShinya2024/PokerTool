var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/page01');
var usersRouter = require('./routes/users');
const session = require('express-session');

var app = express();

const ses_opt = {
  secret:'1qa2ws3ed4rf5tg6yh7uj8ik9ol0p',
  resave:false,
  saveUninitialized:false,
  cookie:{ maxAge: 60 * 60 * 2 * 1000}
}


app.use(session(ses_opt));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const testRouter = require('./routes/test');
app.use('/test', testRouter);
const timeoutRouter = require('./routes/timeout');
app.use('/timeout', timeoutRouter);
const page01Router = require('./routes/page01');
app.use('/page01', page01Router);
const page02Router = require('./routes/page02');
app.use('/page02', page02Router);
const page03Router = require('./routes/page03');
app.use('/page03', page03Router);
const page04Router = require('./routes/page04');
app.use('/page04', page04Router);
const page05_1Router = require('./routes/page05_1');
app.use('/page05_1', page05_1Router);
const page05_2_9Router = require('./routes/page05_2_9');
app.use('/page05_2_9', page05_2_9Router);
const page05_2_9_editRouter = require('./routes/page05_2_9_edit');
app.use('/page05_2_9_edit', page05_2_9_editRouter);
const page05_2_6Router = require('./routes/page05_2_6');
app.use('/page05_2_6', page05_2_6Router);
const page05_2_6_editRouter = require('./routes/page05_2_6_edit');
app.use('/page05_2_6_edit', page05_2_6_editRouter);
const page05_2_2Router = require('./routes/page05_2_2');
app.use('/page05_2_2', page05_2_2Router);
const page05_2_2_editRouter = require('./routes/page05_2_2_edit');
app.use('/page05_2_2_edit', page05_2_2_editRouter);
const page05_3Router = require('./routes/page05_3');
app.use('/page05_3', page05_3Router);
const page06_1Router = require('./routes/page06_1');
app.use('/page06_1', page06_1Router);
const page07_1Router = require('./routes/page07_1');
app.use('/page07_1', page07_1Router);
const page07_2Router = require('./routes/page07_2');
app.use('/page07_2', page07_2Router);
const page05_3testRouter = require('./routes/page05_3test');
app.use('/page05_3test', page05_3testRouter);
const dbRouter = require('./routes/db')
app.use('/db', dbRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
