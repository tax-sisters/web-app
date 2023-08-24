import { NextResponse, NextRequest } from 'next/server';
const Mailjet = require('node-mailjet');

const mailjet = new Mailjet({
  apiKey: process.env.MJ_API_KEY,
  apiSecret: process.env.MJ_SECRET,
});

interface Body {
  name: string;
  email: string;
  message: string;
}

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as Body;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }

  try {
    await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.FROM_MAIL,
            Name: 'TAX SISTERS',
          },
          To: [
            {
              Email: process.env.TO_MAIL,
              Name: 'Admin',
            },
          ],
          Subject: 'Web contact form',
          TextPart: '',
          HTMLPart: `<p style="font-weight: bold;">NAME:</p>
            <span>${body.name}<span>
            <br />
            <p style="font-weight: bold;">EMAIL:</p>
            <span>${body.email}<span>
            <br />
            <p style="font-weight: bold;">MESSAGE:</p>
            <span>${body.message}<span>`,
        },
      ],
    });

    return NextResponse.json({ message: 'OK' }, { status: 200 });
  } catch (error: any) {
    console.log('ERR: ', error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
