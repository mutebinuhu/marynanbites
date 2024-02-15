import { NextResponse } from 'next/server'

export async function GET(request, response) {
  
    return NextResponse.json({ name: 'Welcome To the Menu get api' }, { status: 200 })
  }
  export async function POST(request, response) {
  
    return NextResponse.json({ name: 'Welcome To the Menu post api' }, { status: 200 })
  }