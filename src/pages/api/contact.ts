// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function Contact(req: NextApiRequest, res: NextApiResponse) {
  // Get form data from request body
  const { name, email, message } = req.body;

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: "kelvinamoaba@gmail.com",
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  const mailData = {
    from: "kelvinamoaba@gmail.com@gmail.com",
    to: "kel.amoaba@gmail.com",
    subject: `Message from ${name}`,
    text: message + "\nSent from: " + email,
  };

  // Send email
  transporter.sendMail(mailData, function (err: any, info: any) {});

  res.send(200);
}
