import connectMongoDB from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';

import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();

    console.log('Name', username);
    console.log('Email', email);
    console.log('Password', password);

    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ username, email, password: hashedPassword });

    return NextResponse.json({ message: 'User registered' }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'User not created' }, { status: 500 });
  }
}
