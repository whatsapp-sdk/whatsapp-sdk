
const bunyan = require('bunyan');
const bunyanDebugStream = require('bunyan-debug-stream');
const path = require('path');

const fse = require('fs-extra');

const isDev = process.env.NODE_ENV !== 'production';
const logPath = isDev ? path.join(__dirname, '../run/whatsapp.log') : '/root/logs/whatsapp/whatsapp.log';


fse.ensureFileSync(logPath);

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
  stream: bunyanDebugStream.create({
    forceColor: true,
  }),
});

const logger = bunyan.createLogger({
  name: 'WA',
  level: 'debug',
  streams,
});

module.exports = logger;
