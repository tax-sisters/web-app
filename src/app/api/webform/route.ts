import { NextResponse, NextRequest } from 'next/server';
const Mailjet = require('node-mailjet');

const mailjet = new Mailjet({
  apiKey: process.env.MJ_API_KEY,
  apiSecret: process.env.MJ_SECRET,
});

interface Body {
  firstName: string;
  lastName: string;
}

export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as Body;

  console.log(body);

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
              Name: 'TAX SISTERS',
            },
          ],
          Subject: 'Web contact form',
          TextPart: 'My first Mailjet email',
          HTMLPart:
            '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
        },
      ],
    });
    console.log('OK: ');
    return NextResponse.json({ message: 'OK' }, { status: 200 });
  } catch (error: any) {
    console.log('ERR: ', error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
