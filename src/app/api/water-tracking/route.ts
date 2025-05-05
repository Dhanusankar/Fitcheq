import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { query } from '../../../lib/db';
import { authOptions } from '../../../lib/auth';

// GET endpoint to fetch today's water intake
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const result = await query(
      `
      SELECT amount_ml
      FROM water_tracking
      WHERE user_id = $1 AND tracked_date = CURRENT_DATE
      `,
      [session.user.id]
    );

    return NextResponse.json({
      amount_ml: result.rows[0]?.amount_ml || 0
    });
  } catch (error) {
    console.error('Error fetching water intake:', error);
    return NextResponse.json(
      { error: 'Failed to fetch water intake' },
      { status: 500 }
    );
  }
}

// PUT endpoint to update today's water intake
export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { amount_ml } = await request.json();
    if (typeof amount_ml !== 'number' || amount_ml < 0) {
      return NextResponse.json(
        { error: 'Invalid water intake amount' },
        { status: 400 }
      );
    }

    // Upsert water tracking record for today
    const result = await query(
      `
      INSERT INTO water_tracking (user_id, amount_ml)
      VALUES ($1, $2)
      ON CONFLICT (user_id, tracked_date)
      DO UPDATE SET 
        amount_ml = $2,
        updated_at = CURRENT_TIMESTAMP
      RETURNING amount_ml
      `,
      [session.user.id, amount_ml]
    );

    return NextResponse.json({
      amount_ml: result.rows[0].amount_ml
    });
  } catch (error) {
    console.error('Error updating water intake:', error);
    return NextResponse.json(
      { error: 'Failed to update water intake' },
      { status: 500 }
    );
  }
}

// DELETE endpoint to delete today's water intake
export async function DELETE() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await query(
      `
      DELETE FROM water_tracking
      WHERE user_id = $1 AND tracked_date = CURRENT_DATE
      `,
      [session.user.id]
    );

    return NextResponse.json({
      message: 'Water intake record deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting water intake:', error);
    return NextResponse.json(
      { error: 'Failed to delete water intake' },
      { status: 500 }
    );
  }
} 