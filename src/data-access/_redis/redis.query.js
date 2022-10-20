const redisQuery = ({ redis }) => {
  redis.on("connect", () => {
    console.log("Redis connected");
  });

  redis.on("error", (err) => {
    console.log(`Error: ${err}`);
  });

  return Object.freeze({
    set,
    get,
    keys,
    clearKey,
    push,
    count,
    listRange
  });

  // for sets (unordered collections of unique strings)
  async function set(key, value) {
    const set = await redis.setex(key, 3600, JSON.stringify(value));
    console.log("set:", set);
  }

  async function get(key) {
    const get = await redis.get(key);
    return JSON.parse(get);
  }

  async function keys() {
    const keys = await redis.keys("*");
    console.log("keys:", keys);
  }

  async function clearKey(key) {
    const del = await redis.del(key);
    console.log("del:", del);
  }

  //for list (ists of strings sorted by insertion order)
  async function push(key, value) {
    const insert = await redis.lpush(key, value);
    console.log("insert:", insert);
  }

  async function listRange(key) {
    const count = await redis.lrange(key, 0, -1);
    console.log("count:", count);
  }

  async function count(key) {
    const count = await redis.llen(key);
    console.log("count:", count);
  }
};

module.exports = redisQuery;
