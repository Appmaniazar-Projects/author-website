import { Button } from "@/components/ui/button"
import { BookOpen, Instagram, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutAuthorPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl border shadow-xl">
            <Image
              src="/Tsholofelo Mooketsi.jpg"
              alt="Tsholofelo Mooketsi - Author Portrait"
              width={700}
              height={600}
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-lg bg-primary p-2 shadow-lg">
            <div className="flex h-full w-full items-center justify-center rounded-md bg-white">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-slate-800">About Tsholofelo Mooketsi</h1>
          <p className="text-lg text-slate-600">
            Tsholofelo Mooketsi is a Writer and a businesswoman from South Africa. She describes herself as a passionate
            person who loves life. This book is her poetic expression of her journey towards healing her unresolved
            grief.
          </p>
          <p className="text-lg text-slate-600">
            Tsholofelo has always had love and passion for writing. She embarked on a writing journey alongside her
            career in information and communications technologies (ICTs), where she is a professional and an
            entrepreneur in the field. She mostly writes part-time.
          </p>
          <p className="text-lg text-slate-600">
            Her hobbies and interests include reading, writing, travelling, hiking and spending time with loved ones.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button className="gap-2" asChild>
              <Link href="/contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <Link href="/purchase">
                <BookOpen className="h-4 w-4" />
                View My Book
              </Link>
            </Button>
          </div>

          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-3">Connect with me</h3>
            <div className="flex gap-4">
              {/* <Link
                href="#"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link> */}
              <Link
                href="@Itwasgrief"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="@rief_hings"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* My Story Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">My Story</h2>
        <div className="bg-slate-50 p-8 rounded-lg">
          <div className="space-y-4 text-slate-600">
            <p>
              I wrote this book when I was grieving the loss of my grandmother. I'm still healing even today as grief is
              not an event but a process. I lost my grandmother to a sudden tragic car accident. She was travelling with
              family. The driver lost control, and the car overturned. She was the only one who died in that accident.
            </p>
            <p>
              I was deeply saddened to hear of her passing. A part of me instantly died with her. I was in disbelief,
              stunned into silence and devastated. Shock and denial engulfed me. I became emotionally numb; I was like a
              zombie. My internal world was utterly transformed into a state of gloom, and I wasn't even aware of it.
            </p>
            <p>
              My grandmother raised me up in the early years of my upbringing. My parents gave birth to me when they
              were very young so they couldn't raise me up until later years. My grandmother then, in many ways, became
              a mother to me.
            </p>
            <p>
              In my grief journey, I experienced an incomprehensible emotional pain for years. I lost myself in this
              pain. I also lost interest in many things. I fought hard to stay afloat, but this pain consumed me. I felt
              empty, confused and depressed. I was deeply unhappy with my life. I then embarked on a journey of
              self-discovery to seek clarity and purpose. This is when I discovered that I lost part of myself in
              unresolved grief. I reclaimed myself and started healing in this journey. This book describes the A-to-Z
              phases of my emotional journey in navigating unresolved grief. I have healed ☺.
            </p>
          </div>
        </div>
      </div>

      {/* Writing Philosophy */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">My Writing Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
            <p className="text-slate-600">
              I believe that the most powerful writing comes from a place of truth and vulnerability. In my work, I
              strive to capture authentic emotions and experiences, even when they're difficult to face.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Expression</h3>
            <p className="text-slate-600">
              Poetry gives expression to the emotions that are often hard to describe. When words fail, poetry speaks,
              allowing us to articulate our deepest feelings.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Healing</h3>
            <p className="text-slate-600">
              I believe in the healing power of words. Writing can be a therapeutic practice, not just for the writer
              but for the reader as well. My hope is that my poetry offers both solace and possibility.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Connection</h3>
            <p className="text-slate-600">
              Poetry, at its core, is about human connection. My goal is to create work that resonates with readers,
              helping them feel seen and understood in their own experiences of grief and healing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
