import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, answer, expected } = body;

    // Basic validation
    if (
      !name ||
      !email ||
      !subject ||
      !message ||
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Email format
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Anti-spam arithmetic check
    const a = Number(answer);
    const e = Number(expected);
    if (!Number.isFinite(a) || !Number.isFinite(e) || a !== e) {
      return NextResponse.json(
        { error: "The security answer is incorrect. Please try again." },
        { status: 400 }
      );
    }

    // Persist the message
    await db.contactMessage.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        phone: phone ? String(phone).trim() : null,
        subject: subject.trim(),
        message: message.trim(),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
