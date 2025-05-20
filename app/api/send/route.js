import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: 'luttfimohamad@gmail.com',
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>
            <strong>From:</strong> {email}
          </p>
          <p>
            <strong>Message:</strong>
          </p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
