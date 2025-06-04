import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const books = [
  {
    id: 1,
    title: "The Mystery of Shadows",
    description: "A thrilling journey into the unknown, where nothing is as it seems.",
    year: "2023",
    genre: "Mystery/Thriller",
  },
  {
    id: 2,
    title: "Whispers in the Wind",
    description: "A tale of love, loss, and redemption set against the backdrop of rural America.",
    year: "2022",
    genre: "Contemporary Fiction",
  },
  {
    id: 3,
    title: "The Last Horizon",
    description: "An epic adventure across time and space that challenges the very nature of reality.",
    year: "2021",
    genre: "Science Fiction",
  },
  {
    id: 4,
    title: "Silent Echoes",
    description: "A haunting story of family secrets and the ghosts that linger in our past.",
    year: "2020",
    genre: "Psychological Thriller",
  },
  {
    id: 5,
    title: "Beyond the Veil",
    description: "A journey into the supernatural that will leave you questioning what lies beyond.",
    year: "2019",
    genre: "Paranormal",
  },
  {
    id: 6,
    title: "The Forgotten Path",
    description: "A historical saga spanning generations, exploring themes of identity and belonging.",
    year: "2018",
    genre: "Historical Fiction",
  },
]

export default function BooksPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800">My Books</h1>
        <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
          Explore my collection of bestselling novels across various genres, from thrilling mysteries to heartwarming
          contemporary fiction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <Card key={book.id} className="overflow-hidden">
            <div className="relative aspect-[2/3] w-full">
              <Image
                src={`/placeholder.svg?height=600&width=400&text=Book+Cover+${book.id}`}
                alt={book.title}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">{book.title}</h2>
                <span className="text-sm text-primary font-medium">{book.year}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{book.genre}</p>
              <p className="text-slate-600">{book.description}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/books/book-${book.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
