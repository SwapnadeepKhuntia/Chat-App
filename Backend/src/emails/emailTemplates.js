export function createEmailWecomeTemplate(name,clientUrl) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to Messenger</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: #f0f2f5;
      font-family: 'Poppins', sans-serif;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
      padding: 30px 16px;
    }

    .email-wrapper {
      width: 100%;
      max-width: 480px;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.10);
    }

    /* ── Header ── */
    .email-header {
      background: linear-gradient(135deg, #4facfe 0%, #00c3ff 50%, #7b9eff 100%);
      padding: 44px 24px 36px;
      text-align: center;
    }

    .icon-circle {
      width: 72px;
      height: 72px;
      background: rgba(255, 255, 255, 0.30);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
    }

    .icon-circle svg {
      width: 38px;
      height: 38px;
      fill: #ffffff;
    }

    .email-header h1 {
      color: #ffffff;
      font-size: 22px;
      font-weight: 700;
      letter-spacing: 0.2px;
    }

    /* ── Body ── */
    .email-body {
      padding: 32px 28px;
    }

    .greeting {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 14px;
    }

    .greeting h2 {
      color: #1a73e8;
      font-size: 18px;
      font-weight: 700;
    }

    .pencil-icon {
      width: 18px;
      height: 18px;
      color: #aab4c4;
      flex-shrink: 0;
    }

    .intro-text {
      color: #4a5568;
      font-size: 13.5px;
      line-height: 1.7;
      margin-bottom: 28px;
    }

    /* ── Steps Card ── */
    .steps-card {
      background: #f8faff;
      border: 1px solid #e4eaf5;
      border-radius: 10px;
      padding: 22px 24px;
      margin-bottom: 32px;
    }

    .steps-card h3 {
      color: #1a202c;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 14px;
    }

    .steps-card ul {
      list-style: none;
      padding: 0;
    }

    .steps-card ul li {
      color: #4a5568;
      font-size: 13.5px;
      line-height: 1.6;
      padding: 5px 0;
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }

    .steps-card ul li::before {
      content: '';
      width: 7px;
      height: 7px;
      background: #4facfe;
      border-radius: 50%;
      margin-top: 7px;
      flex-shrink: 0;
    }

    /* ── CTA Button ── */
    .cta-wrapper {
      text-align: center;
      margin-bottom: 30px;
    }

    .cta-btn {
      display: inline-block;
      background: linear-gradient(90deg, #4facfe 0%, #00c3ff 100%);
      color: #ffffff;
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      padding: 13px 40px;
      border-radius: 50px;
      letter-spacing: 0.3px;
      box-shadow: 0 4px 16px rgba(79, 172, 254, 0.40);
      transition: opacity 0.2s;
    }

    .cta-btn:hover {
      opacity: 0.88;
    }

    /* ── Footer text ── */
    .footer-text {
      color: #4a5568;
      font-size: 13px;
      line-height: 1.7;
      margin-bottom: 18px;
    }

    .footer-text p {
      margin-bottom: 4px;
    }

    .signature {
      color: #4a5568;
      font-size: 13px;
      line-height: 1.7;
      border-top: 1px solid #edf0f5;
      padding-top: 16px;
      margin-top: 6px;
    }

    .signature p {
      margin-bottom: 2px;
    }

    .signature strong {
      color: #1a202c;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="email-wrapper">

    <!-- Header -->
    <div class="email-header">
      <div class="icon-circle">
        <!-- Chat bubble icon -->
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4C2.897 2 2 2.897 2 4v13c0 1.103.897 2 2 2h3v3.5L12.5 19H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"/>
        </svg>
      </div>
      <h1>Welcome to Messenger!</h1>
    </div>

    <!-- Body -->
    <div class="email-body">

      <div class="greeting">
        <h2>${name}</h2>
        <!-- Pencil icon -->
        <svg class="pencil-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
      </div>

      <p class="intro-text">
        We're excited to have you join our messaging platform! Messenger connects you with
        friends, family, and colleagues in real-time, no matter where they are.
      </p>

      <!-- Steps card -->
      <div class="steps-card">
        <h3>Get started in just a few steps:</h3>
        <ul>
          <li>Set up your profile picture</li>
          <li>Find and add your contacts</li>
          <li>Start a conversation</li>
          <li>Share photos, videos, and more</li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="cta-wrapper">
        <a href="${clientUrl}" class="cta-btn">Open Messenger</a>
      </div>

      <!-- Footer text -->
      <div class="footer-text">
        <p>If you need any help or have questions, we're always here to assist you.</p>
        <p>Happy messaging!</p>
      </div>

      <!-- Signature -->
      <div class="signature">
        <p>Best regards,</p>
        <p><strong>The Messenger Team</strong></p>
      </div>

    </div>
  </div>
</body>
</html>
  `;
}