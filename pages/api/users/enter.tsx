import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };
  let user;
  user = await client.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: "익명",
      ...payload,
    },
    update: {},
  });
  console.log(user);
  res.status(200).end();
}

export default withHandler("POST", handler);
