import { connect } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.text();
    const email = reqBody;
    console.log(reqBody);

    const user = await User.findOne({
      email: email,
    });
    if (!user) {
      return NextResponse.json({ error: "Invalid User" }, { status: 400 });
    } else {
      // await sendEmail({ email, emailType: "RESET", userId: user._id });
    }
    return NextResponse.json({
      message: "User found successfully",
      success: true,
      user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
