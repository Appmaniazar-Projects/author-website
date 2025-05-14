import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Play, BookOpen } from "lucide-react"

export default function AboutBookPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-slate-800 mb-6">About the Book</h1>
          <p className="text-xl text-primary font-medium italic mb-6">
            "Grief Speaks, bleeding ink from the 'goodbyes' that we don't like to say."
          </p>
          <p className="text-lg text-slate-600 mb-4">
            This book is a poetic narration of my emotional battle with unresolved grief. It is about how I charted my
            way from the unexpected loss of my grandmother, who died in a tragic car accident, to how I returned to my
            true self. It is essentially a journey to healing from grief and finding meaning again.
          </p>
          <p className="text-lg text-slate-600 mb-4">
            This book was inspired by the days and nights that I've spent experiencing the emotional pain that I
            couldn't comprehend, which then led me to search for meaning. I started expressing my emotions through
            written words as spoken words were hard to come out. The more agonising the pain was, the more poetry verses
            I wrote. Poetry became my plush cry pillow, my grief companion and my comforter. I found solace in poetry,
            and I discovered what my misery was about, from writing poetry. This is how this book was created. It is a
            collection of raw, poignant and heartfelt poems that gives voice to the unspoken emotions of my grief
            ordeal.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            The various phases of grief are described in each chapter. A summary of each phase is provided at the
            beginning of each chapter to make the poems more comprehensible. In some poems, you'll find a friend in
            pain, in others you'll find a comforter, in some you'll find a fighter and then eventually a victor. My
            journey involved an assortment of emotions, it was a complicated grief, dressed as an emotional battle that
            I eventually managed to conquer.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            I hope the message embodied in every poem will bring you comfort, understanding of the process, heal your
            pain and most importantly remind you that you're not alone. For anyone who has lost a loved one, this book
            is for you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-md" asChild>
              <Link href="/purchase">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Purchase Now
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border shadow-xl">
            <Image
              src="/images/book-cover.png"
              alt="Book Cover - Grief in a String of Words"
              width={600}
              height={800}
              className="object-contain bg-white"
              priority
            />
          </div>
        </div>
      </div>

      {/* Book Details */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Book Details</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="text-slate-600">Format:</span>
              <span>Paperback & eBook</span>
            </li>
            <li className="flex justify-between">
              <span className="text-slate-600">Pages:</span>
              <span>120</span>
            </li>
            <li className="flex justify-between">
              <span className="text-slate-600">Language:</span>
              <span>English</span>
            </li>
            <li className="flex justify-between">
              <span className="text-slate-600">Publication Date:</span>
              <span>2023</span>
            </li>
            <li className="flex justify-between">
              <span className="text-slate-600">ISBN:</span>
              <span>978-0-620-00000-0</span>
            </li>
          </ul>
        </div>
        <div className="bg-slate-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Themes Explored</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Loss and grief</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Depression and emotional pain</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Healing journey</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Finding meaning after loss</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Self-discovery and growth</span>
            </li>
          </ul>
        </div>
        <div className="bg-slate-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">For Readers Who</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Have lost a loved one</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Are experiencing grief or depression</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Seek solace in shared experiences</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Are supporting someone through grief</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span>Want to understand grief better</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Book Preview */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Featured Poem</h2>
        <div className="bg-slate-50 p-8 rounded-lg shadow-sm border border-slate-100">
          <div className="prose prose-slate mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-6">State of Shock</h3>

            <p className="italic text-center mb-8">
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

            <p className="italic text-center mb-8">
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

          <div className="mt-8 flex justify-center gap-4">
            <Button variant="outline" className="gap-2" asChild>
              <Link href="#">
                <Play className="h-4 w-4" />
                Listen to Audio
              </Link>
            </Button>
            <Button className="gap-2" asChild>
              <Link href="/purchase">
                <BookOpen className="h-4 w-4" />
                Read Full Book
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
