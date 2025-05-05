import nodemailer from 'nodemailer';

// Create a transporter using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail', // Can be changed to your preferred email service
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Email templates for different progress milestones
const getEmailTemplate = (username: string, planName: string, completionPercentage: number) => {
  const subject = `${planName} Progress Update: ${completionPercentage}% Complete!`;
  
  // Different motivational quotes based on completion percentage
  let motivationalQuote = '';
  let buttonColor = '';
  let emoji = '';
  
  if (completionPercentage === 40) {
    motivationalQuote = "You've made a great start! Remember, the journey of a thousand miles begins with a single step. Keep pushing forward!";
    buttonColor = '#4F46E5'; // Indigo
    emoji = '🚀';
  } else if (completionPercentage === 80) {
    motivationalQuote = "You're crushing it! So close to the finish line. The hard work is paying off - keep that momentum going!";
    buttonColor = '#7C3AED'; // Purple
    emoji = '💪';
  } else if (completionPercentage === 100) {
    motivationalQuote = "Congratulations on completing your plan! Your dedication and perseverance have led you to this achievement. Be proud of what you've accomplished!";
    buttonColor = '#10B981'; // Green
    emoji = '🏆';
  }

  // Format greeting - if username is the same as planName, use a generic greeting
  const greeting = username === planName ? 'Hello Fitness Enthusiast!' : `Hello ${username}!`;

  // HTML email template with styling
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${subject}</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f9fafb;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          padding: 20px 0;
          border-bottom: 1px solid #e5e7eb;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #4F46E5;
        }
        .content {
          padding: 30px 20px;
        }
        .progress-container {
          margin: 20px 0;
          background-color: #f3f4f6;
          border-radius: 999px;
          height: 16px;
          overflow: hidden;
        }
        .progress-bar {
          background-color: ${buttonColor};
          height: 100%;
          width: ${completionPercentage}%;
          border-radius: 999px;
        }
        .quote {
          padding: 15px;
          background-color: #f8f5ff;
          border-left: 4px solid ${buttonColor};
          margin: 20px 0;
          font-style: italic;
        }
        .emoji {
          font-size: 36px;
          text-align: center;
          margin: 20px 0;
        }
        .button {
          display: inline-block;
          background-color: ${buttonColor};
          color: white;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 500;
          margin: 20px 0;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #6b7280;
          font-size: 14px;
          border-top: 1px solid #e5e7eb;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">Fitcheq</div>
        </div>
        <div class="content">
          <h1>${greeting}</h1>
          <p>Great news! You've reached <strong>${completionPercentage}%</strong> completion of your <strong>${planName}</strong> plan.</p>
          
          <div class="progress-container">
            <div class="progress-bar"></div>
          </div>
          
          <div class="emoji">${emoji}</div>
          
          <div class="quote">
            "${motivationalQuote}"
          </div>
          
          <p>Keep up the great work and continue on your fitness journey!</p>
          
          <a href="${process.env.APP_URL || 'http://localhost:3000'}/dashboard" class="button">View Your Dashboard</a>
        </div>
        <div class="footer">
          <p>Fitcheq &copy; ${new Date().getFullYear()}</p>
          <p>If you have any questions, please contact our support team.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return {
    subject,
    html
  };
};

// Function to send progress milestone emails
export async function sendProgressEmail(
  email: string,
  username: string,
  planName: string,
  completionPercentage: number
) {
  try {
    // Only send emails at specific milestones: 40%, 80%, and 100%
    if (![40, 80, 100].includes(completionPercentage)) {
      return { success: false, message: 'Email only sent at 40%, 80%, and 100% milestones' };
    }

    const { subject, html } = getEmailTemplate(username, planName, completionPercentage);

    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    
    return {
      success: true,
      message: `Email sent successfully: ${info.messageId}`,
      messageId: info.messageId
    };
  } catch (error) {
    console.error('Error sending progress email:', error);
    return {
      success: false,
      message: 'Failed to send email',
      error
    };
  }
} 