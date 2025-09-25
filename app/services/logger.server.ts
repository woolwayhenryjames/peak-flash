import { createLogger, format, transports } from "winston";

export const logger = createLogger();

if (process.env.NODE_ENV === "production") {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.metadata(),
        format.json()
      ),
    })
  );
} else if (process.env.NODE_ENV === "test") {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.metadata()
      ),
    })
  );
} else {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.errors({ stack: true }),
        format.metadata()
      ),
    })
  );
}
