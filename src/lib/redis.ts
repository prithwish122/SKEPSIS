import { createClient, RedisClientType } from "redis";

// Declare the Redis client globally as optional
let redisClient: RedisClientType | undefined;

// Initialize Redis client if REDIS_URL is defined
if (process.env.REDIS_URL) {
  redisClient = createClient({ url: process.env.REDIS_URL });

  // Handle Redis client errors
  redisClient.on("error", (err) => {
    console.error("Redis Client Error", err);
  });
} else {
  console.warn("REDIS_URL is not defined. Redis client will not be initialized.");
}

/**
 * Ensures the Redis client connects to the server.
 * This function checks if the client is defined and connects only if it isn't already connected.
 */
async function connectRedis(): Promise<void> {
  if (!redisClient) {
    console.error("Redis client is not initialized. Check your REDIS_URL configuration.");
    return;
  }

  if (!redisClient.isOpen) {
    try {
      await redisClient.connect();
      console.log("Connected to Redis server.");
    } catch (err) {
      console.error("Failed to connect to Redis server:", err);
    }
  }
}

export { redisClient, connectRedis };
