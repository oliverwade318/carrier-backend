import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import 'app/services/jobs';

import routes from 'routes/index';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

module.exports = app;
