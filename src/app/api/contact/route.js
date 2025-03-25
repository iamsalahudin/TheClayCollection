import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message, phone } = await req.json();
    const ownerEmail = process.env.EMAIL_USER;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: ownerEmail,
      subject: `The Clay Collection | Contact Form Submission from ${name}`,
      text: `Person Name: ${name}.\nEmail: ${email}.\nPhone: ${phone}.\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
  }
}
