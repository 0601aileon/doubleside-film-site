import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const notificationEmail = process.env.NOTIFICATION_EMAIL || '1261457858@qq.com';

function formatInquiryEmail(body: any) {
  const items = [
    { label: '产品名称', value: body.productName || '未指定' },
    { label: '公司名称', value: body.companyName },
    { label: '联系人', value: body.contactName },
    { label: '邮箱', value: body.email },
    { label: '电话', value: body.phone || '未填写' },
    { label: '国家/地区', value: body.country || '未填写' },
    { label: '预估数量', value: body.quantity || '未填写' },
    { label: '特殊要求', value: body.specifications || '未填写' },
    { label: '留言', value: body.message || '未填写' },
  ];

  const rows = items
    .map((item) => `<tr><td style="font-weight:600;padding:8px 12px;border-bottom:1px solid #eee;white-space:nowrap;color:#333">${item.label}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#555">${item.value}</td></tr>`)
    .join('');

  return {
    subject: `新询盘 - ${body.companyName} (${body.contactName})`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px">
        <div style="background:#1a365d;color:white;padding:20px;border-radius:8px 8px 0 0">
          <h2 style="margin:0">📩 新的产品询盘</h2>
        </div>
        <table style="width:100%;border-collapse:collapse;border:1px solid #e2e8f0;border-radius:0 0 8px 8px">
          ${rows}
        </table>
        <p style="color:#999;font-size:12px;margin-top:16px;text-align:center">
          此邮件由 shlchem.com 询盘系统自动发送
        </p>
      </div>
    `,
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, contactName, email } = body;

    if (!companyName || !contactName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailContent = formatInquiryEmail(body);

    if (resend) {
      await resend.emails.send({
        from: 'shlchem.com <onboarding@resend.dev>',
        to: notificationEmail,
        replyTo: email,
        subject: emailContent.subject,
        html: emailContent.html,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Inquiry submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
