import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json();

        const data = resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'skshiam129@gmail.com',
            subject: 'Hello World',
            html: `<h1>${body.message}</h1>`
        });
        
        return NextResponse.json({ message: "Email sent successfully" });
    } catch (error) {
        console.log(error);
    }
} 