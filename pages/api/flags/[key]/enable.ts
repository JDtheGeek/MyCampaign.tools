import { NextApiRequest, NextApiResponse } from "next";
import { enableFlag, checkAllFlags } from "@src/flags/redis";

export const enableKey = async (req: NextApiRequest, res: NextApiResponse) => {
  const key = req.query.key as string;
  await enableFlag(key);
  const flags = await checkAllFlags();
  res.status(200).json({ flags });
};

export default enableKey;
