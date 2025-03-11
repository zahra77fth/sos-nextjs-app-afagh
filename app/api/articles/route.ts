import { NextResponse } from 'next/server';
import { articles } from '@/lib/data';

export async function GET() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json({ data: articles }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch articles", details: error },
            { status: 500 }
        );
    }
}