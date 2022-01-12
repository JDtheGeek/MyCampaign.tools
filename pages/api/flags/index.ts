import { NextApiRequest, NextApiResponse } from "next";
import { checkAllFlags } from "@src/flags/redis";

export const flags = async (req: NextApiRequest, res: NextApiResponse) => {
  const allFlags = await checkAllFlags();
  res.status(200).json(allFlags);
};

export default flags;
