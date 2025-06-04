import { NextResponse, type NextRequest } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json()

        if (!email || !email.includes("@")) {
            return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
        }

        // Create a transporter using Axxess SMTP settings
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "mail.axxess.co.za", // Axxess SMTP server
            port: Number(process.env.SMTP_PORT || "587"),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER, // contact@tsholofelo.com
                pass: process.env.EMAIL_PASSWORD, // Your email password
            },
            tls: {
                rejectUnauthorized: false, // Accept self-signed certificates
            },
        })

        // Email to you (notification of new subscriber)
        const notificationEmail = {
            from: process.env.EMAIL_USER,
            to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
            subject: "New Newsletter Subscription - Grief in a String of Words",
            html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Source:</strong> Website subscription form</p>
        
        <hr>
        <p>This subscriber has signed up to receive updates about your book "Grief in a String of Words".</p>
      `,
        }

        // Welcome email to the subscriber
        const welcomeEmail = {
            from: `"Tsholofelo Mooketsi" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Welcome to Tsholofelo's Newsletter - Thank you for subscribing!",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #bf1f2a;">Thank you for subscribing!</h2>
          
          <p>Dear Friend,</p>
          
          <p>Welcome to my sacred space ☺. Thank you for subscribing to my newsletter. I'm so grateful to have you join this journey of healing and poetry.</p>
          
          <p>You'll receive:</p>
          <ul>
            <li>Exclusive poems and excerpts from "Grief in a String of Words"</li>
            <li>Articles on grief, healing, and creative expression</li>
            <li>Updates on book availability and events</li>
            <li>Personal reflections on the healing journey</li>
          </ul>
          
          <p>I hope my words bring you comfort and remind you that you're not alone in your journey.</p>
          
          <p>With love and healing,<br>
          <strong>Tsholofelo Mooketsi</strong><br>
          Author of "Grief in a String of Words"</p>
          
          <hr style="margin: 30px 0;">
          <p style="font-size: 12px; color: #666;">
            You're receiving this email because you subscribed to updates from Tsholofelo Mooketsi at tsholofelo.com. 
            If you no longer wish to receive these emails, you can reply to this email with "unsubscribe" or contact us at contact@tsholofelo.com.
          </p>
        </div>
      `,
        }

        // Send both emails
        await transporter.sendMail(notificationEmail)
        await transporter.sendMail(welcomeEmail)

        return NextResponse.json({ message: "Subscription successful" }, { status: 200 })
    } catch (error) {
        console.error("Subscription error:", error)
        return NextResponse.json({ error: "Failed to process subscription" }, { status: 500 })
    }
}
