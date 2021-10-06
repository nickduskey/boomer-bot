const Logger = require('./logger');
const commands = require('./commands');

class Boomer {
  constructor() {
    this.logger = new Logger();
  }

  cannon(msg) {
    this.logger.info('Boomer::parseMessage():');
    // TODO show a random cannon fire gif
    commands.cannon(msg);
  }

  parseMessage(msg, ...args) {
    this.logger.info('Boomer::parseMessage():', args);
    switch (args[1]) {
      case 'cannon': {
        this.cannon(msg);
        break;
      }
      default: {
        this.logger.error('Unable to parse message');
        msg.reply('I didn\'t understand, try again.');
      }
    }
  }

  stats(...args) {
    this.logger.info('Boomer::parseMessage():', args);
    // TODO team stats
    // TODO player stats
  }

  subscribe(...args) {
    this.logger.info('Boomer::parseMessage():', args);
    // add to channel
    // scores
    // tweets
    // youtube
  }

  torts(...args) {
    this.logger.info('Boomer::parseMessage():', args);
    // TODO return random torts quote
    // TODO dont push me video
  }
}

module.exports = Boomer;
