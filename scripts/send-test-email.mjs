import { Resend } from 'resend';

// Replace 're_xxxxxxxxx' with your real API key or set the RESEND_API_KEY environment variable
const apiKey = process.env.RESEND_API_KEY || 're_xxxxxxxxx';
const resend = new Resend(apiKey);

async function sendTestEmail() {
  console.log('Sending test email via Resend...');

  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'tifemedic@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
    });

    console.log('Resend Response:', response);
  } catch (err) {
    console.error('Error sending email:', err);
  }
}

sendTestEmail();
