const Discord = require('discord.js');
const Boomer = require('./boomer');
const Logger = require('./logger');

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const client = new Discord.Client();
const boomer = new Boomer();

const logger = new Logger();

client.on('ready', () => {
  logger.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  logger.info('got msg:', msg);
  const { content } = msg;
  // const { channel } = msg;
  let pieces;
  if (content) {
    pieces = content.split(' ');
  }
  if (pieces[0] === '?boomer') {
    boomer.parseMessage(...pieces);
  }
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(process.env.DISCORD_APP_TOKEN)
  .then((val) => logger.info('Logged in:', val))
  .catch((err) => logger.error('Error logging client in:', err));
