"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

interface SubscribeFormProps {
    buttonText?: string
    placeholder?: string
    className?: string
}

export default function SubscribeForm({
    buttonText = "Subscribe",
    placeholder = "Your email address",
    className = "",
}: SubscribeFormProps) {
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email || !email.includes("@")) {
            toast({
                title: "Invalid email",
                description: "Please enter a valid email address.",
                variant: "destructive",
            })
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            })

            if (response.ok) {
                toast({
                    title: "Thank you for subscribing!",
                    description: "You'll receive updates and poetry in your inbox soon. Check your email for a welcome message.",
                })
                setEmail("")
            } else {
                const errorData = await response.json()
                throw new Error(errorData.error || "Subscription failed")
            }
        } catch (error) {
            console.error("Subscription error:", error)
            toast({
                title: "Something went wrong",
                description: "Please try again later or contact us directly.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-4 ${className}`}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isSubmitting}
                required
            />
            <Button type="submit" className="sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Subscribing..." : buttonText}
            </Button>
        </form>
    )
}
