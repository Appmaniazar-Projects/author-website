import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, BookOpen, Calendar, MapPin, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Author Portrait"
              width={600}
              height={800}
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-lg bg-primary p-2 shadow-lg">
            <div className="flex h-full w-full items-center justify-center rounded-md bg-white">
              <Award className="h-12 w-12 text-primary" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-slate-800">About Me</h1>
          <p className="text-lg text-slate-600">
            I am Emily Parker, a professional author with over 15 years of experience in the literary world. My journey
            began with a passion for storytelling that has evolved into a successful career spanning multiple genres and
            formats.
          </p>
          <p className="text-lg text-slate-600">
            With 12 published books, including 6 New York Times bestsellers, I've established myself as a versatile
            writer who connects deeply with readers. My work explores themes of human connection, resilience, and the
            extraordinary moments in ordinary lives.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>12 Published Books</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-primary" />
              <span>6 Bestsellers</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>New York, USA</span>
            </div>
          </div>

          <div className="pt-4">
            <Button asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Biography</h2>
        <div className="space-y-4 text-slate-600">
          <p>
            Born and raised in a small town in Massachusetts, I developed a love for books at an early age. I would
            spend hours in the local library, immersing myself in worlds created by authors who would later become my
            inspiration.
          </p>
          <p>
            After graduating with a degree in English Literature from Columbia University, I worked as an editor for a
            major publishing house before taking the leap to become a full-time writer. My debut novel, "Whispers in the
            Dark," was published in 2008 and received critical acclaim.
          </p>
          <p>
            Since then, I've published works across multiple genres, from contemporary fiction to psychological
            thrillers. My writing has been translated into 28 languages and has sold over 5 million copies worldwide.
          </p>
          <p>
            When I'm not writing, I enjoy traveling, photography, and teaching creative writing workshops. I currently
            live in New York City with my golden retriever, Max, who often makes appearances on my social media.
          </p>
        </div>
      </div>

      {/* Awards Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">National Book Award</h3>
            <p className="text-slate-600">For "The Last Horizon" (2021)</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Pulitzer Prize Finalist</h3>
            <p className="text-slate-600">For "Silent Echoes" (2020)</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Goodreads Choice Award</h3>
            <p className="text-slate-600">For "Whispers in the Wind" (2022)</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">International Thriller Writers Award</h3>
            <p className="text-slate-600">For "The Mystery of Shadows" (2023)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
