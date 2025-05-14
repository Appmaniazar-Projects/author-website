import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, ShoppingCart, Play } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 hero-pattern">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-primary font-medium tracking-wide">WELCOME</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800">Grief in a String of Words</h1>
              <p className="text-slate-600 text-lg">
                Welcome to Tsholofelo's sacred space ☺. Writing books, especially poetry has been a sacred experience
                for me, as it gives expression to the emotions that are often hard to describe. I'm happy to share my
                first published book, Grief – In a String of Words, with you on these pages ☺. It is a collection of
                heartfelt poems on grief, pain, depression, healing and finding meaning.
              </p>
              <p className="text-slate-600 text-lg">
                I hope this book becomes the support structure that you wish for, to remove the heavy burden of grief,
                heartbreak and depression from your soul. I hope you find solace in these verses. These words were
                written for you, to heal your wounded soul and to inspire you to find meaning again after the heavy
                storm of grief.
              </p>
              <p className="text-slate-600 text-lg">
                I love to have you here, let's enjoy riding this interesting wave of life together ☺.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="rounded-md" asChild>
                  <Link href="/purchase">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Order Your Copy Today
                  </Link>
                </Button>
                <Button variant="outline" className="rounded-md" asChild>
                  <Link href="/about-book">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border shadow-xl">
                  <Image
                    src="/images/book-cover.png"
                    alt="Book Cover - Grief in a String of Words"
                    width={700}
                    height={800}
                    className="object-contain bg-white"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-lg bg-primary p-2 shadow-lg">
                  <div className="flex h-full w-full items-center justify-center rounded-md bg-white">
                    <BookOpen className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Poem Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-primary font-medium tracking-wide">FEATURED POEM</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">State of Shock</h3>
          </div>
          <div className="max-w-3xl mx-auto bg-slate-50 p-8 rounded-lg shadow-sm border border-slate-100">
            <div className="prose prose-slate mx-auto">
              <p className="italic text-center">
                I froze, on hearing the tragic news
                <br />
                My system instantly shut off
                <br />
                Turning off the button on my brain
                <br />I completely stopped thinking
                <br />
                My mind couldn't process a thing
                <br />
                Delving deep into a state of shock
                <br />
                No, I wasn't ready to hear the tragic news
                <br />
                Not about the woman so dear to me
                <br />
                The one who moves the waves of my life
              </p>
              <p className="italic text-center">
                No, my grandma can't be gone
                <br />
                Not without saying goodbye
                <br />I softly whispered to my soul
                <br />I knew it couldn't take the pain
                <br />
                Of losing the vital part that fuels it
                <br />
                Yes, on hearing the tragic news
                <br />
                Like water left in a deep freezer
                <br />
                My heart just froze like a brick of ice
                <br />
                Rendering me completely motionless
              </p>
              <p className="italic text-center">
                On hearing the tragic news
                <br />
                My body suddenly lost hope
                <br />
                Presented with fight or flight options
                <br />
                As common stress responses
                <br />
                My body chose to freeze
                <br />
                Feeling completely immobilised
                <br />
                Unconsciously escaping the reality before me
                <br />
                Fear and pain locked it in this freeze mode
                <br />A daunting state of disbelief
                <br />
                An unbearable state of shock
                <br />
                On hearing the tragic news of her death
                <br />I simply just froze.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="gap-2" asChild>
                <Link href="/about-book">
                  <Play className="h-4 w-4" />
                  Listen to Audio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Book Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-primary font-medium tracking-wide">ABOUT THE BOOK</h2>
              <h3 className="text-3xl font-bold text-slate-800 mt-2 mb-6">Grief Speaks</h3>
              <p className="text-slate-600 mb-4 italic">
                "Bleeding ink from the 'goodbyes' that we don't like to say."
              </p>
              <p className="text-slate-600 mb-4">
                This book is a poetic narration of my emotional battle with unresolved grief. It is about how I charted
                my way from the unexpected loss of my grandmother, who died in a tragic car accident, to how I returned
                to my true self.
              </p>
              <p className="text-slate-600 mb-6">
                It is essentially a journey to healing from grief and finding meaning again.
              </p>
              <Button asChild>
                <Link href="/about-book">Read More</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border shadow-md">
                <Image
                  src="/acceptance.jpg"
                  alt="Nature scene representing healing"
                  width={700}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-primary font-medium tracking-wide">FROM THE BLOG</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">Exploring Grief & Healing</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Healing My Grief Pain Through Poetry",
                excerpt:
                  "Healing takes places in different forms. As human beings, our pain management and tolerance levels vary as our brain does not process pain the same way.",
                image: "/anger.jpg",
              },
              {
                title: "Finding Beauty in Brokenness",
                excerpt: "How the Japanese art of Kintsugi relates to our journey through grief and emotional healing.",
                image: "/depression.jpg",
              },
              {
                title: "Writing as a Healing Practice",
                excerpt:
                  "Simple writing exercises that can help process grief and transform pain into creative expression.",
                image: "/denialshock.jpg",
              },
            ].map((post, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg overflow-hidden shadow-sm transition-transform hover:scale-105"
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/blog/post-${index + 1}`}>Read Article</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Join the Journey</h2>
            <p className="text-lg text-slate-600 mb-8">
              Subscribe to receive exclusive content, poetry, and updates on new releases. Get a free poem delivered to
              your inbox each month.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button type="submit" className="sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
