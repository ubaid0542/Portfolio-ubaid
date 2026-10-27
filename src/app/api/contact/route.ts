import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, budget, message } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const userEmail = process.env.EMAIL_USER || 'mdubaid8090@gmail.com';
    const userPass = process.env.EMAIL_PASS;
    const recipientEmail = process.env.EMAIL_TO || 'mdubaid8090@gmail.com';

    // If EMAIL_PASS is not configured, inform the client to configure it
    if (!userPass) {
      console.warn('EMAIL_PASS environment variable is not configured.');
      return NextResponse.json(
        {
          success: false,
          needsConfig: true,
          error:
            'Email service is not yet configured with an App Password. Please check .env.local file.',
        },
        { status: 503 }
      );
    }

    // Configure Nodemailer Transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: userEmail,
        pass: userPass,
      },
    });

    // 1. Notification Email to Ubaid
    const mailToUbaid = {
      from: `"Portfolio Inquiry" <${userEmail}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `🔥 [New Inquiry] ${projectType || 'Freelance Project'} from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F3F0E8; margin: 0; padding: 24px; color: #171715; }
            .container { max-width: 600px; margin: 0 auto; background-color: #FFFDF7; border: 1px solid rgba(23,23,21,0.12); border-radius: 4px; padding: 32px; box-shadow: 0 4px 16px rgba(23,23,21,0.06); }
            .badge { display: inline-block; background-color: #D94A38; color: #FFFDF7; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 2px; }
            h1 { font-size: 22px; margin-top: 16px; margin-bottom: 20px; color: #171715; }
            .field-row { margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid #ECE7D9; }
            .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.8px; color: #77746D; font-weight: 600; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #171715; font-weight: 500; }
            .message-box { background-color: #F3F0E8; border-left: 3px solid #D94A38; padding: 16px; border-radius: 2px; font-size: 14px; line-height: 1.6; color: #171715; margin-top: 18px; white-space: pre-wrap; }
            .cta-button { display: inline-block; background-color: #171715; color: #FFFDF7 !important; text-decoration: none; padding: 12px 24px; border-radius: 2px; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-top: 24px; }
            .footer { font-size: 11px; color: #77746D; margin-top: 24px; border-top: 1px solid #ECE7D9; padding-top: 12px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <span class="badge">New Client Inquiry</span>
            <h1>You have received a new project inquiry!</h1>
            
            <div class="field-row">
              <div class="field-label">Client Name</div>
              <div class="field-value">${name}</div>
            </div>

            <div class="field-row">
              <div class="field-label">Client Email</div>
              <div class="field-value"><a href="mailto:${email}" style="color: #D94A38; text-decoration: none;">${email}</a></div>
            </div>

            <div class="field-row">
              <div class="field-label">Project Category</div>
              <div class="field-value">${projectType || 'General Inquiry'}</div>
            </div>

            <div class="field-row">
              <div class="field-label">Scope / Budget Range</div>
              <div class="field-value">${budget || 'Flexible / To be discussed'}</div>
            </div>

            <div class="field-label" style="margin-top: 18px;">Project Details & Message:</div>
            <div class="message-box">${message}</div>

            <a href="mailto:${email}?subject=Re: Your Project Inquiry - Ubaid" class="cta-button">Reply Directly to Client →</a>

            <div class="footer">
              Sent automatically from Ubaid's Interactive Developer Portfolio
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 2. Auto-Reply Confirmation Email to Client
    const mailToClient = {
      from: `"Ubaid — Full Stack Web Developer" <${userEmail}>`,
      to: email,
      subject: `Thank you for your project inquiry, ${name}! — Ubaid`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F3F0E8; margin: 0; padding: 24px; color: #171715; }
            .container { max-width: 600px; margin: 0 auto; background-color: #FFFDF7; border: 1px solid rgba(23,23,21,0.12); border-radius: 4px; padding: 32px; box-shadow: 0 4px 16px rgba(23,23,21,0.06); }
            .badge { display: inline-block; background-color: #171715; color: #F7E84B; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; padding: 4px 10px; border-radius: 2px; }
            h1 { font-size: 22px; margin-top: 16px; margin-bottom: 12px; color: #171715; }
            p { font-size: 14px; line-height: 1.6; color: #4A4843; margin-top: 8px; margin-bottom: 16px; }
            .summary-box { background-color: #F3F0E8; border: 1px solid #ECE7D9; border-radius: 3px; padding: 18px; margin: 20px 0; }
            .summary-item { font-size: 13px; margin-bottom: 8px; color: #171715; }
            .summary-item strong { color: #77746D; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; }
            .whatsapp-box { background-color: #E8F5E9; border-left: 3px solid #128C7E; padding: 14px; border-radius: 2px; font-size: 13px; color: #1B5E20; margin-top: 20px; }
            .whatsapp-link { color: #128C7E; font-weight: bold; text-decoration: none; }
            .footer { font-size: 11px; color: #77746D; margin-top: 28px; border-top: 1px solid #ECE7D9; padding-top: 16px; }
            .signature { font-family: Georgia, serif; font-size: 18px; font-style: italic; color: #171715; margin-top: 16px; }
          </style>
        </head>
        <body>
          <div class="container">
            <span class="badge">Inquiry Received</span>
            <h1>Hi ${name}, thank you for reaching out!</h1>
            
            <p>
              I have received your project inquiry regarding <strong>${projectType || 'Web Development'}</strong>. 
              I am personally reviewing your details and will get back to you with an initial project outline and discussion within <strong>2 to 4 hours</strong>.
            </p>

            <div class="summary-box">
              <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #D94A38; margin-bottom: 12px;">
                Summary of Your Request:
              </div>
              <div class="summary-item"><strong>Project Type:</strong> ${projectType || 'Web Development'}</div>
              <div class="summary-item"><strong>Budget / Scope:</strong> ${budget || 'Flexible'}</div>
              <div class="summary-item"><strong>Your Notes:</strong> <em>"${message.length > 200 ? message.substring(0, 200) + '...' : message}"</em></div>
            </div>

            <div class="whatsapp-box">
              <strong>Need an immediate answer?</strong><br>
              You can also ping me directly on WhatsApp at 
              <a href="https://wa.me/918090507639" class="whatsapp-link">+91 8090507639</a> for rapid real-time discussion.
            </div>

            <div class="signature">— Ubaid</div>
            <div style="font-size: 12px; color: #77746D; font-weight: 500;">Full Stack Web Developer · Varanasi, Uttar Pradesh, India</div>

            <div class="footer">
              This is an automated confirmation sent to ${email} confirming receipt of your message on ubaid.dev.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(mailToUbaid),
      transporter.sendMail(mailToClient),
    ]);

    return NextResponse.json({
      success: true,
      message: 'Inquiry sent successfully! Both parties have been notified.',
    });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to send inquiry email.',
      },
      { status: 500 }
    );
  }
}
