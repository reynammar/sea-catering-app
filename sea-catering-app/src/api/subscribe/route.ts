import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, plan, mealTypes, deliveryDays, allergies, totalPrice } = body;

    if (!name || !phone || !plan || !mealTypes.length || !deliveryDays.length || !totalPrice) {
      return NextResponse.json({ error: 'Data tidak lengkap' }, { status: 400 });
    }

    const newSubscription = await prisma.subscription.create({
      data: {
        name,
        phone,
        plan,
        mealTypes: mealTypes.join(','),
        deliveryDays: deliveryDays.join(','),
        allergies,
        totalPrice,
      },
    });

    return NextResponse.json(newSubscription, { status: 201 });
  } catch (error) {
    console.error('Request error', error);
    return NextResponse.json({ error: 'Gagal membuat langganan' }, { status: 500 });
  }
}