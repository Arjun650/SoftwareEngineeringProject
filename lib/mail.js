// sendWelcomeEmail.js
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY); // replace with your actual API key

export async function sendWelcomeEmail(toEmail, name) {
  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: toEmail,
      subject: `🎉 Welcome ${name} to Our App!`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px;">
          <h2>Welcome, ${name}!</h2>
          <p>Thanks for signing up. We’re glad to have you on board!</p>
          <p>– The Team 🚀</p>
        </div>
      `
    });

    console.log("✅ Email sent!", response);
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
}

// Export for Node.js

// Uncomment this line to test directly
// sendWelcomeEmail('test@example.com', 'John');
