"use server";
import nodemailer from "nodemailer";

export async function sendMail({
  nomPrenom,
  email,
  message,
}: {
  nomPrenom: string;
  email: string;
  message: string;
}) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
  });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "Contact",
      html: `
          <html>
            <body style="font-family: 'Sora', sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; padding: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <div style="text-align: center; padding-bottom: 20px;">
                  <h2 style="color: #f2aa0d; font-size: 24px;">Nouvelle Contact Form</h2>
                </div>
                <div style="font-size: 16px; color: #333;">
                  <p style="margin: 10px 0; font-weight: bold; color: #444;"><strong>Nom/Prénom:</strong> ${nomPrenom}</p>
                  <p style="margin: 10px 0; font-weight: bold; color: #444;"><strong>Email:</strong> ${email}</p>
                  <p style="margin: 10px 0; font-weight: bold; color: #444;"><strong>Message:</strong> ${message}</p>
                </div>
              </div>
            </body>
          </html>
        `,
    };

    const info = await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error("Erreur lors de l'envoi du mail");
  }
}
