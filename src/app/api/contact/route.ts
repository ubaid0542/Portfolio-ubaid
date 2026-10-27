import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, budget, message } = body;

    // Full Server-side Validation
    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedEmail = typeof email === 'string' ? email.trim() : '';
    const trimmedMessage = typeof message === 'string' ? message.trim() : '';
    const trimmedProjectType = typeof projectType === 'string' ? projectType.trim() : 'Web Development Project';
    const trimmedBudget = typeof budget === 'string' ? budget.trim() : 'Flexible / Exploring';

    if (!trimmedName || trimmedName.length < 2) {
      return NextResponse.json(
        { error: 'Please enter a valid name (at least 2 characters).' },
        { status: 400 }
      );
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      return NextResponse.json(
        { error: 'Please write at least 10 characters describing your project.' },
        { status: 400 }
      );
    }

    const userEmail = process.env.EMAIL_USER || 'mdubaid8090@gmail.com';
    const userPass = process.env.EMAIL_PASS;
    const recipientEmail = process.env.EMAIL_TO || 'mdubaid8090@gmail.com';

    // If EMAIL_PASS is not configured, inform the frontend to use fallback
    if (!userPass) {
      console.warn('EMAIL_PASS environment variable is not configured.');
      return NextResponse.json(
        {
          success: false,
          needsConfig: true,
          error: 'Email service is not yet configured with an App Password.',
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
      replyTo: trimmedEmail,
      subject: `🔥 [New Client Inquiry] ${trimmedProjectType} from ${trimmedName}`,
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
              <div class="field-value">${trimmedName}</div>
            </div>

            <div class="field-row">
              <div class="field-label">Client Email</div>
              <div class="field-value"><a href="mailto:${trimmedEmail}" style="color: #D94A38; text-decoration: none;">${trimmedEmail}</a></div>
            </div>

            <div class="field-row">
              <div class="field-label">Project Category</div>
              <div class="field-value">${trimmedProjectType}</div>
            </div>

            <div class="field-row">
              <div class="field-label">Scope / Budget Range</div>
              <div class="field-value">${trimmedBudget}</div>
            </div>

            <div class="field-label" style="margin-top: 18px;">Project Details & Message:</div>
            <div class="message-box">${trimmedMessage}</div>

            <a href="mailto:${trimmedEmail}?subject=Re: Your Project Inquiry - Ubaid" class="cta-button">Reply Directly to Client →</a>

            <div class="footer">
              Sent automatically from Ubaid's Interactive Developer Portfolio
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 2. Clear & Warm Thank You Email to the Client
    const mailToClient = {
      from: `"Ubaid — Full Stack Web Developer" <${userEmail}>`,
      to: trimmedEmail,
      subject: `Thank You for Reaching Out, ${trimmedName}! — Ubaid`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F3F0E8; margin: 0; padding: 24px; color: #171715; }
            .container { max-width: 600px; margin: 0 auto; background-color: #FFFDF7; border: 1px solid rgba(23,23,21,0.12); border-radius: 4px; padding: 36px; box-shadow: 0 4px 16px rgba(23,23,21,0.06); }
            .badge { display: inline-block; background-color: #171715; color: #F7E84B; font-size: 10px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; padding: 4px 10px; border-radius: 2px; }
            h1 { font-size: 24px; margin-top: 18px; margin-bottom: 12px; color: #171715; font-weight: 700; }
            p { font-size: 14.5px; line-height: 1.65; color: #4A4843; margin-top: 8px; margin-bottom: 16px; }
            .summary-box { background-color: #F3F0E8; border: 1px solid #ECE7D9; border-radius: 3px; padding: 18px; margin: 22px 0; }
            .summary-item { font-size: 13.5px; margin-bottom: 8px; color: #171715; }
            .summary-item strong { color: #77746D; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; }
            .whatsapp-box { background-color: #E8F5E9; border-left: 3px solid #128C7E; padding: 14px 16px; border-radius: 2px; font-size: 13px; color: #1B5E20; margin-top: 22px; }
            .whatsapp-link { color: #128C7E; font-weight: bold; text-decoration: none; }
            .footer { font-size: 11px; color: #77746D; margin-top: 28px; border-top: 1px solid #ECE7D9; padding-top: 16px; text-align: center; }
            .signature { font-family: Georgia, serif; font-size: 19px; font-style: italic; color: #171715; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <span class="badge">Message Received</span>
            <h1>Thank You, ${trimmedName}!</h1>
            
            <p>
              Thank you for reaching out regarding your <strong>${trimmedProjectType}</strong> project. 
              I have safely received your inquiry and will personally review your requirements.
            </p>

            <p>
              I will get back to you shortly (typically within <strong>2 to 4 hours</strong>) with my thoughts on timeline, architecture, and scope.
            </p>

            <div class="summary-box">
              <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #D94A38; margin-bottom: 10px;">
                Your Inquiry Summary:
              </div>
              <div class="summary-item"><strong>Project Category:</strong> ${trimmedProjectType}</div>
              <div class="summary-item"><strong>Scope / Budget:</strong> ${trimmedBudget}</div>
              <div class="summary-item"><strong>Message:</strong> <em>"${trimmedMessage.length > 250 ? trimmedMessage.substring(0, 250) + '...' : trimmedMessage}"</em></div>
            </div>

            <div class="whatsapp-box">
              <strong>Need an immediate quick answer?</strong><br>
              You can also message me directly on WhatsApp at 
              <a href="https://wa.me/918090507639" class="whatsapp-link">+91 8090507639</a>.
            </div>

            <div class="signature">— Ubaid</div>
            <div style="font-size: 12px; color: #77746D; font-weight: 500; margin-top: 2px;">Full Stack Web Developer · Varanasi, India</div>

            <div class="footer">
              This confirmation was automatically dispatched to ${trimmedEmail} via ubaid.dev.
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
      message: 'Inquiry sent successfully.',
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
