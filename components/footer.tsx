
import SubscribeForm from "@/components/subscribe-form"
import { Instagram, Twitter } from "lucide-react"
import Link from "next/link"


export default function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                        <p className="text-muted-foreground">
                            Tsholofelo Mooketsi is a poet and author exploring themes of grief, healing, and human connection through
                            powerful and evocative poetry.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about-book" className="text-muted-foreground hover:text-primary transition-colors">
                                    About the Book
                                </Link>
                            </li>
                            <li>
                                <Link href="/purchase" className="text-muted-foreground hover:text-primary transition-colors">
                                    Purchase
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">

                            <Link href="@Itwasgrief" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="@rief_hings" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-muted-foreground mb-2">
                                Subscribe to my newsletter for exclusive content and updates.
                            </p>
                            <SubscribeForm />
                            <p className="text-sm text-muted-foreground">
                                Subscribe to my newsletter for exclusive content and updates.
                            </p>
                            <form className="mt-2 flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                />
                                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Tsholofelo Mooketsi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
