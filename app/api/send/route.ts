import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the environment variable or fallback key
const resend = new Resend(process.env.RESEND_API_KEY || 're_xxxxxxxxx');

export async function GET() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'tifemedic@gmail.com',
      subject: 'Hello World - TifeMedic Resend Test',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      // Contact / Consultation form fields
      name,
      fullName,
      organization,
      orgName,
      email,
      phone,
      service,
      estimatedAttendees,
      message,

      // Outreach planner form fields
      orgType,
      outreachTitle,
      location,
      proposedDate,
      altDate,
      expectedBeneficiaries,
      targetAudience,
      selectedServices,
      description,
      existingLogistics,
      estimatedBudget,

      // Overrides
      to,
      subject,
      html,
    } = body;

    const contactName = name || fullName;
    const company = organization || orgName;

    let emailSubject = subject;
    let emailHtml = html;

    // Determine if it is an outreach plan request or general consultation
    const isOutreachPlanner =
      Boolean(outreachTitle) || (Array.isArray(selectedServices) && selectedServices.length > 0);

    if (!emailSubject) {
      if (isOutreachPlanner) {
        emailSubject = `New Outreach Request: ${outreachTitle || company || contactName || 'Medical Outreach'}`;
      } else if (contactName || company || email || service) {
        emailSubject = `New Consultation Request: ${contactName || company || 'Client Inquiry'}`;
      }
    }

    if (!emailHtml) {
      if (isOutreachPlanner) {
        const servicesList =
          Array.isArray(selectedServices) && selectedServices.length > 0
            ? selectedServices.map((s: string) => `<li style="margin-bottom: 4px;">${s}</li>`).join('')
            : '<li>None selected</li>';

        emailHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1e242b; line-height: 1.5;">
            <div style="border-bottom: 2px solid #0B56A4; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="color: #0B56A4; margin: 0 0 6px 0;">New Medical Outreach Request</h2>
              <p style="margin: 0; color: #64748b; font-size: 14px;">Submitted via TifeMedic Outreach Planner</p>
            </div>

            <h3 style="color: #1e242b; font-size: 16px; margin: 16px 0 8px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">Contact Details</h3>
            <p style="margin: 4px 0;"><strong>Contact Person:</strong> ${contactName || 'N/A'}</p>
            <p style="margin: 4px 0;"><strong>Organisation:</strong> ${company || 'N/A'} (${orgType || 'N/A'})</p>
            <p style="margin: 4px 0;"><strong>Email:</strong> ${email || 'N/A'}</p>
            <p style="margin: 4px 0;"><strong>Phone:</strong> ${phone || 'N/A'}</p>

            <h3 style="color: #1e242b; font-size: 16px; margin: 20px 0 8px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">Outreach Specifics</h3>
            <p style="margin: 4px 0;"><strong>Outreach Title:</strong> ${outreachTitle || 'N/A'}</p>
            <p style="margin: 4px 0;"><strong>Location:</strong> ${location || 'N/A'}</p>
            <p style="margin: 4px 0;"><strong>Proposed Date:</strong> ${proposedDate || 'N/A'} ${altDate ? `(Alt: ${altDate})` : ''}</p>
            <p style="margin: 4px 0;"><strong>Expected Beneficiaries:</strong> ${expectedBeneficiaries || 'N/A'}</p>
            <p style="margin: 4px 0;"><strong>Target Audience:</strong> ${targetAudience || 'N/A'}</p>

            <h3 style="color: #1e242b; font-size: 16px; margin: 20px 0 8px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">Requested Services</h3>
            <ul style="padding-left: 20px; margin: 8px 0;">
              ${servicesList}
            </ul>

            <h3 style="color: #1e242b; font-size: 16px; margin: 20px 0 8px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">Logistics & Budget</h3>
            <p style="margin: 4px 0;"><strong>Logistics Available:</strong> ${existingLogistics || 'None specified'}</p>
            <p style="margin: 4px 0;"><strong>Estimated Budget:</strong> ${estimatedBudget || 'Flexible / To Be Discussed'}</p>
            <p style="margin: 4px 0;"><strong>Description / Needs:</strong> ${description || 'None provided'}</p>

            <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
              Sent automatically by TifeMedic Platform via Resend.
            </div>
          </div>
        `;
      } else if (contactName || company || email || message || service) {
        emailHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1e242b; line-height: 1.5;">
            <div style="border-bottom: 2px solid #0B56A4; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="color: #0B56A4; margin: 0 0 6px 0;">New Consultation Request</h2>
              <p style="margin: 0; color: #64748b; font-size: 14px;">Submitted via TifeMedic Homepage Consultation Form</p>
            </div>

            <h3 style="color: #1e242b; font-size: 16px; margin: 16px 0 8px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">Client Details</h3>
            <p style="margin: 4px 0;"><strong>Full Name:</strong> ${contactName || 'N/A'}</p>
            <p style="margin: 4px 0;"><strong>Organisation:</strong> ${company || 'N/A'}</p>
            <p style="margin: 4px 0;"><strong>Email:</strong> ${email || 'N/A'}</p>
            <p style="margin: 4px 0;"><strong>Phone:</strong> ${phone || 'N/A'}</p>

            <h3 style="color: #1e242b; font-size: 16px; margin: 20px 0 8px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">Inquiry Scope</h3>
            <p style="margin: 4px 0;"><strong>Requested Service:</strong> ${service || 'General Consultation'}</p>
            <p style="margin: 4px 0;"><strong>Estimated Attendees:</strong> ${estimatedAttendees || 'Not specified'}</p>
            
            <h3 style="color: #1e242b; font-size: 16px; margin: 20px 0 8px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">Message & Requirements</h3>
            <div style="background: #f8fafd; border-left: 3px solid #0B56A4; padding: 14px; margin-top: 6px; font-size: 14px; color: #334155; line-height: 1.6; border-radius: 4px; white-space: pre-wrap;">
              ${message || 'No additional message provided.'}
            </div>

            <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
              Sent automatically by TifeMedic Platform via Resend.
            </div>
          </div>
        `;
      }
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: to || 'tifemedic@gmail.com',
      subject: emailSubject || 'Hello World',
      html: emailHtml || '<p>Congrats on sending your <strong>first email</strong>!</p>',
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
