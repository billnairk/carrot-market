import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(typeof req.body);
  console.log(req.body.email);
  res.status(200).end();
}
