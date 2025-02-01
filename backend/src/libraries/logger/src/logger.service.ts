import pino from 'pino';
import pretty from 'pino-pretty';

const stream = pretty({
  colorize: true,
  ignore: 'hostname,pid',
});

const logger = pino(
  {
    level: process.env.LOG_LEVEL || 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        ignore: 'hostname,pid',
      },
    },
  },
  stream,
);

export default logger;
