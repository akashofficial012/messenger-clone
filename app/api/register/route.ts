import bcrypt from 'bcryptjs';
import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
 try {
    const body = await request.json();
    const { email, name, password } = body;

    if (!email || !name || !password) {
      return new Response('Missing fields', { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return new Response('Email already in use', { status: 422 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
    
 } catch (error) {
    console.log(error, "REGISTRATION_ERROR");
    return new Response('Internal error', { status: 500 });
  }
    
 }
