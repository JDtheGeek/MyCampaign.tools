import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL);

export const enableFlag = async (key: string) => {
  await redis.multi().sadd(`flags`, key).set(`flag:${key}`, "1").exec();
};

const getKeys = async () => {
  return redis.smembers("flags");
};

export const checkAllFlags = async () => {
  const keys = await getKeys();
  const values = await redis.mget(keys.map((key) => `flag:${key}`));
  const mappedFlags = keys.reduce((acc, key, index) => {
    acc.set(key, values[index] === "1");
    return acc;
  }, new Map<string, boolean>());
  return Object.fromEntries(mappedFlags);
};



