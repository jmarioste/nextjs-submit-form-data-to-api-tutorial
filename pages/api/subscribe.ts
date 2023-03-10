import type { NextApiRequest, NextApiResponse } from "next";
interface SubscribeRequest extends NextApiRequest {
  body: {
    email: string;
  };
}
export default function handler(req: SubscribeRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed");
    return;
  }
  const email = req.body.email;
  //do something with the email
  console.log(`Saving ${email} is saved to the subscribers table`);
  return res.status(200).json({ success: true });
}
