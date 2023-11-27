// src/utils/logger.js
import winston from 'winston'

// Set up Winston logger
const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
})

export default logger
