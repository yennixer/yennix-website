// Cloudflare Pages Function - 处理联系表单提交
// POST /api/contact

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    
    // 读取表单数据
    const formData = await request.formData();
    const name = formData.get('name') || '';
    const company = formData.get('company') || 'Not provided';
    const email = formData.get('email') || '';
    const country = formData.get('country') || 'Not provided';
    const product = formData.get('product') || 'Not specified';
    const message = formData.get('message') || '';

    // 基础校验
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // 邮箱格式校验
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // 简单反垃圾：内容太短或太长
    if (message.length < 10) {
      return Response.json(
        { success: false, error: 'Please provide more details about your inquiry.' },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return Response.json(
        { success: false, error: 'Message is too long. Please keep it under 5000 characters.' },
        { status: 400 }
      );
    }

    // 构造邮件内容
    const subject = `[YENNIX Inquiry] ${name} - ${product}`;
    
    const textBody = `New inquiry from yennix.com

Name: ${name}
Company: ${company}
Email: ${email}
Country: ${country}
Product Interest: ${product}

Message:
${message}

---
Sent from yennix.com contact form
`;

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #000078; border-bottom: 2px solid #000078; padding-bottom: 10px;">
          New Inquiry from yennix.com
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background: #f5f5f5;">
            <td style="padding: 10px; font-weight: bold; width: 120px;">Name</td>
            <td style="padding: 10px;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Company</td>
            <td style="padding: 10px;">${escapeHtml(company)}</td>
          </tr>
          <tr style="background: #f5f5f5;">
            <td style="padding: 10px; font-weight: bold;">Email</td>
            <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold;">Country</td>
            <td style="padding: 10px;">${escapeHtml(country)}</td>
          </tr>
          <tr style="background: #f5f5f5;">
            <td style="padding: 10px; font-weight: bold;">Product</td>
            <td style="padding: 10px;">${escapeHtml(product)}</td>
          </tr>
        </table>
        <div style="margin: 20px 0;">
          <h3 style="color: #333;">Message:</h3>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
            ${escapeHtml(message)}
          </div>
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 30px;">
          Sent from yennix.com contact form
        </p>
      </div>
    `;

    // 调用 Resend API 发送邮件
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'YENNIX Website <inquiry@yennix.com>',
        to: ['sales@yennix.com'],
        reply_to: email,
        subject: subject,
        text: textBody,
        html: htmlBody,
      }),
    });

    const resendResult = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Resend API error:', resendResult);
      return Response.json(
        { success: false, error: 'Failed to send. Please email us directly at sales@yennix.com' },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: 'Thank you for your inquiry! We will respond within 12 hours.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { success: false, error: 'Server error. Please email us directly at sales@yennix.com' },
      { status: 500 }
    );
  }
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
