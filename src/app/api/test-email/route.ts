import { NextRequest, NextResponse } from 'next/server';
import { sendProgressEmail } from '@/lib/email';

// NOTE: This route is for development/testing purposes only
// It should be removed or secured in production
export async function GET(request: NextRequest) {
  try {
    // Only enable in development environment
    if (process.env.NODE_ENV !== 'development') {
      return NextResponse.json(
        { error: 'This endpoint is only available in development mode' },
        { status: 403 }
      );
    }

    // Get milestone percentage from URL parameter
    const searchParams = request.nextUrl.searchParams;
    const milestone = searchParams.get('milestone');
    const email = searchParams.get('email') || process.env.EMAIL_ADDRESS || '';
    
    if (!milestone || !['40', '80', '100'].includes(milestone)) {
      return NextResponse.json(
        { error: 'Valid milestone parameter required (40, 80, or 100)' },
        { status: 400 }
      );
    }
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required either as a parameter or in environment variables' },
        { status: 400 }
      );
    }

    // Send a test email
    const result = await sendProgressEmail(
      email,
      'Test User',
      'Workout Challenge',
      parseInt(milestone)
    );

    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to send email', details: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Test email sent for ${milestone}% milestone`,
      details: result
    });
    
  } catch (error) {
    console.error('Error sending test email:', error);
    return NextResponse.json(
      { error: 'Failed to send test email', details: error },
      { status: 500 }
    );
  }
} 