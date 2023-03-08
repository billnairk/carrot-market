import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import mail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

mail.setApiKey(process.env.SENGRID_APIKEY!);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? email : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "익명",
            ...user,
          },
        },
      },
    },
  });
  // if (phone) {
  //   const message = await twilioClient.messages.create({
  //     messagingServiceSid: process.env.TWILIO_MSID,
  //     to: process.env.TWILIO_PHONE!,
  //     body: `인증 코드 ${payload}`,
  //   });
  //   console.log(message);
  // } else if (email) {
  //   const email = await mail.send({
  //     from: "megas93@naver.com",
  //     to: "megas93@naver.com",
  //     subject: "캐럿 마켓 인증 메일",
  //     text: `인증 코드 ${payload}`,
  //   });
  //   console.log(email);
  // }
  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
