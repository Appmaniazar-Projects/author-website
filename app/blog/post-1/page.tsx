import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

export default function BlogPost1() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="flex items-center text-primary mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all articles
        </Link>

        <h1 className="text-4xl font-bold text-slate-800 mb-6">Healing My Grief Pain Through Poetry</h1>

        <div className="flex flex-wrap gap-4 mb-8 text-sm text-slate-500">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            April 15, 2023
          </div>
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            Tsholofelo Mooketsi
          </div>
          <div className="flex items-center">
            <Tag className="mr-2 h-4 w-4" />
            Healing
          </div>
        </div>

        <div className="relative aspect-[16/9] w-full mb-8 rounded-lg overflow-hidden">
          <Image src="/acceptance.jpg" alt="Healing Through Poetry" fill className="object-cover" />
        </div>

        <div className="prose prose-slate max-w-none">
          <p>
            Healing takes places in different forms. As human beings, our pain management and tolerance levels vary as
            our brain does not process pain the same way. Other people have a high pain threshold whilst others do not.
            We therefore find different ways to express and heal our pains.
          </p>

          <p>
            I started writing poetry without realising that the descriptive words I was pouring out on to a piece of
            paper every time when I experienced a grief emotion, were strings of words that later turned into poetic
            verses. Every emotion was inked onto a paper as words, seeking solace.
          </p>

          <p>
            Writing poetry has healed my wounded soul. I discovered what my pain was about through expressing my raw and
            intense emotions in these poems. I have learned that when words fail, poetry speaks.
          </p>

          <p>
            A piece of paper became my grieving safe space, where I could comfortably be transparent and vulnerable
            about my emotional experiences. It consoled me during sleepless nights and outpourings of silent tears.
            Poetry became a reliable companion to my grief journey. It helped me to open up about my deepest feelings
            that I could never had managed to put spoken words to. Yes writing poetry healed me.
          </p>

          <h2>Finding Your Healing Medium</h2>

          <p>
            Everyone's journey through grief is unique. While poetry became my healing medium, yours might be different.
            Some find solace in painting, others in music, gardening, or physical activity. The key is to find what
            allows you to express and process your emotions in a way that feels authentic to you.
          </p>

          <p>
            Whatever form your healing takes, remember that there is no timeline for grief. Be patient with yourself and
            allow the process to unfold naturally. Some days will be harder than others, but each expression of your
            pain is a step toward healing.
          </p>

          <h2>The Power of Creative Expression</h2>

          <p>
            Creative expression provides us with a language beyond words. It allows us to communicate feelings that
            might otherwise remain locked inside. Through creativity, we can:
          </p>

          <ul>
            <li>Externalize our internal pain</li>
            <li>Create meaning from our experiences</li>
            <li>Connect with others who have walked similar paths</li>
            <li>Transform our suffering into something beautiful</li>
          </ul>

          <p>
            In my darkest moments, when words failed me in conversation, poetry never did. It became the bridge between
            my inner turmoil and the outside world, helping me make sense of what often felt senseless.
          </p>

          <blockquote>
            "Poetry is not only dream and vision; it is the skeleton architecture of our lives. It lays the foundations
            for a future of change, a bridge across our fears of what has never been before." — Audre Lorde
          </blockquote>

          <p>
            If you're navigating grief, I encourage you to explore different forms of creative expression. You don't
            need to be "good" at it — the healing comes from the process, not the product. Allow yourself the freedom to
            express your pain in whatever way feels right for you.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-semibold mb-4">Share this article</h3>
          <div className="flex gap-4">
            <Button variant="outline" size="sm">
              Facebook
            </Button>
            <Button variant="outline" size="sm">
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              LinkedIn
            </Button>
          </div>
        </div>

        <div className="mt-12 bg-slate-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Subscribe for more articles</h3>
          <p className="text-slate-600 mb-6">
            Sign up to receive more articles on grief, healing, and creative expression.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
