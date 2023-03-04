import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };
  const aToken = await client.token.create({
    data: {
      payload: "1234",
      user: {
        connectOrCreate: {
          where: {
            ...payload,
          },
          create: {
            name: "익명",
            ...payload,
          },
        },
      },
    },
  });
  console.log("token");
  console.log(aToken);
  res.status(200).end();
}

export default withHandler("POST", handler);
