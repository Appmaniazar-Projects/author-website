import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Healing My Grief Pain Through Poetry",
    excerpt:
      "Healing takes places in different forms. As human beings, our pain management and tolerance levels vary as our brain does not process pain the same way.",
    date: "April 15, 2023",
    category: "Healing",
    image: "/acceptance.jpg",
    content: `
      <p>Healing takes places in different forms. As human beings, our pain management and tolerance levels vary as our brain does not process pain the same way. Other people have a high pain threshold whilst others do not. We therefore find different ways to express and heal our pains.</p>
      <p>I started writing poetry without realising that the descriptive words I was pouring out on to a piece of paper every time when I experienced a grief emotion, were strings of words that later turned into poetic verses. Every emotion was inked onto a paper as words, seeking solace.</p>
      <p>Writing poetry has healed my wounded soul. I discovered what my pain was about through expressing my raw and intense emotions in these poems. I have learned that when words fail, poetry speaks.</p>
      <p>A piece of paper became my grieving safe space, where I could comfortably be transparent and vulnerable about my emotional experiences. It consoled me during sleepless nights and outpourings of silent tears. Poetry became a reliable companion to my grief journey. It helped me to open up about my deepest feelings that I could never had managed to put spoken words to. Yes writing poetry healed me.</p>
    `,
  },
  {
    id: 2,
    title: "Finding Beauty in Brokenness",
    excerpt: "How the Japanese art of Kintsugi relates to our journey through grief and emotional healing.",
    date: "March 22, 2023",
    category: "Healing",
    image: "/anger.jpg",
  },
  {
    id: 3,
    title: "Writing as a Healing Practice",
    excerpt: "Simple writing exercises that can help process grief and transform pain into creative expression.",
    date: "February 10, 2023",
    category: "Creative Therapy",
    image: "/bargaining.jpg",
  },
  {
    id: 4,
    title: "The Language of Loss",
    excerpt: "How different cultures express and process grief through language, ritual, and community.",
    date: "January 28, 2023",
    category: "Cultural Perspectives",
    image: "/depression.jpg",
  },
  {
    id: 5,
    title: "Poetry as Companion Through Grief",
    excerpt: "How reading and writing poetry can provide solace and understanding during times of loss.",
    date: "December 12, 2022",
    category: "Poetry Therapy",
    image: "/anger.jpg",
  },
  {
    id: 6,
    title: "Seasonal Grief: Navigating Holidays and Anniversaries",
    excerpt: "Strategies for coping with grief during significant dates and celebrations.",
    date: "November 5, 2022",
    category: "Coping Strategies",
    image: "/acceptance.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800">Blog</h1>
        <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
          Explore articles on grief, healing, poetry, and the creative process.
        </p>
      </div>

      {/* Search and Categories */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 justify-between">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles..."
            className="pl-10 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {["All", "Grief Process", "Healing", "Poetry", "Coping Strategies"].map((category) => (
            <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm border transition-transform hover:shadow-md"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">{post.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-slate-600 mb-4">{post.excerpt}</p>
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/blog/post-${post.id}`}>Read Article</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mt-16 bg-primary/10 p-8 rounded-lg">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Subscribe to the Newsletter</h2>
          <p className="text-slate-600 mb-6">
            Sign up here for more blogs/articles on grief. Get the latest articles, resources, and poems delivered
            directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <Button type="submit" className="sm:w-auto">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
