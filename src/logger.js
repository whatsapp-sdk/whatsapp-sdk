
const bunyan = require('bunyan');
const bunyanDebugStream = require('bunyan-debug-stream');
const path = require('path');

const isDev = process.env.NODE_ENV === 'test';
const logPath = isDev ? path.join(__dirname, '../run/whatsapp.log') : '/root/logs/whatsapp/whatsapp.log';

const streams = [
  {
    level: 'debug',
    type: 'rotating-file',
    path: logPath,
    period: '1d',
    count: 7,
  },
];

streams.push({
  level: 'debug',
  type: 'raw',
  stream: bunyanDebugStream({
    forceColor: true,
  }),
});

const logger = bunyan.createLogger({
  name: 'WA',
  level: 'debug',
  streams,
});

module.exports = logger;
