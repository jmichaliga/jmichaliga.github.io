import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

// In-memory storage for rate limiting
const messageCount = new Map<string, { count: number; lastReset: number }>();

const RATE_LIMIT = 3;
const RATE_LIMIT_PERIOD = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'GET') {
    res.status(200).json({ message: 'Hello World' })
  }
  if (req.method === 'POST') {
    const { name, email, mobile, inquiryType, message } = req.body

    // Check rate limit
    const now = Date.now();
    const userMessageData = messageCount.get(email) || { count: 0, lastReset: now };

    if (now - userMessageData.lastReset > RATE_LIMIT_PERIOD) {
      // Reset count if it's been more than 24 hours
      userMessageData.count = 0;
      userMessageData.lastReset = now;
    }

    if (userMessageData.count >= RATE_LIMIT) {
      return res.status(429).json({ message: 'Rate limit exceeded. Please try again later.' });
    }

    // Increment message count
    userMessageData.count += 1;
    messageCount.set(email, userMessageData);

    console.log(req.body)

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    try {
      // Send email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "justin.michaliga@gmail.com",
        subject: `New Contact Form Submission: ${inquiryType}`,
        text: `
          Name: ${name}
          Email: ${email}
          Mobile: ${mobile}
          Inquiry Type: ${inquiryType}
          Message: ${message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      })

      res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      console.error('Error sending email:', error)
      res.status(500).json({ message: 'Error sending email' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
