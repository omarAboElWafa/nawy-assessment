// config/index.ts
import convict from "convict";
import * as dotenv from "dotenv";
import path from "path";

dotenv.config();

// Define schema for configuration
const config = convict({
  env: {
    doc: "The application environment.",
    format: ["development", "production"],
    default: "development",
    env: "NODE_ENV",
  },
  server: {
    port: {
      doc: "The port to bind the server.",
      format: "port",
      default: 5000,
      env: "SERVER_PORT",
    },
  },
  mongo: {
    uri: {
      doc: "MongoDB connection string.",
      format: String,
      default: "mongodb://localhost:27017/nawy-app",
      env: "MONGO_URI",
    },
  },
  redis: {
    host: {
      doc: "Redis host address.",
      format: String,
      default: "localhost",
      env: "REDIS_HOST",
    },
    port: {
      doc: "Redis port.",
      format: "port",
      default: 6379,
      env: "REDIS_PORT",
    },
  },
  logger: {
    level: {
      doc: "Logging level.",
      format: ["debug", "info", "warn", "error"],
      default: "info",
      env: "LOG_LEVEL",
    },
  },
});

// Load environment-specific configuration
const env = config.get("env");
config.loadFile(path.join(__dirname, `${env}.json`));

// Validate configuration
config.validate({ allowed: "strict" });

export default config;
