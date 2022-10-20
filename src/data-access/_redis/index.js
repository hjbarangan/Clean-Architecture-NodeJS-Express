const redis = require("../../config/redis.config");

const redisQuery = require("./redis.query");
const redisClient = redisQuery({ redis });

module.exports = redisClient;
