import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    defaultMeta: { service: 'user-service' },
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level}]: ${message}`;
        }),
    ),
    transports: [new winston.transports.Console(), new winston.transports.File({ filename: '.log' })],
});

export default logger;
