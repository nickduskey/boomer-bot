const winston = require('winston');

class Logger {
  constructor(level = 'info') {
    this.logger = winston.createLogger({
      level,
      format: winston.format.json(),
      transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'debug.log', level: 'debug' }),
      ],
    });

    if (process.env.NODE_ENV !== 'production') {
      this.logger.add(new winston.transports.Console({
        format: winston.format.simple(),
      }));
    }
  }

  log(...args) {
    this.logger.log(args);
  }

  info(...args) {
    this.logger.info(args);
  }

  debug(...args) {
    this.logger.debug(args);
  }

  error(...args) {
    this.logger.error(args);
  }
}

module.exports = Logger;
