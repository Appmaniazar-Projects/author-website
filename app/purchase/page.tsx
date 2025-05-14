import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Download } from "lucide-react"

export default function PurchasePage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800">Purchase the Book</h1>
        <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
          "Grief in a String of Words" is available in both physical and digital formats through various retailers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative mx-auto lg:mx-0">
          <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-xl border shadow-xl">
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

        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Grief in a String of Words</h2>
            <p className="text-xl text-primary font-medium">By Tsholofelo Mooketsi</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-slate-600">(24 reviews)</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Available Formats</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Hardcover</h4>
                  <span className="font-bold">$24.99</span>
                </div>
                <p className="text-sm text-slate-600 mb-4">Premium quality hardcover with dust jacket</p>
                <Button className="w-full" asChild>
                  <Link href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Buy Hardcover
                  </Link>
                </Button>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Paperback</h4>
                  <span className="font-bold">$16.99</span>
                </div>
                <p className="text-sm text-slate-600 mb-4">Standard paperback edition</p>
                <Button className="w-full" asChild>
                  <Link href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Buy Paperback
                  </Link>
                </Button>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">eBook</h4>
                  <span className="font-bold">$9.99</span>
                </div>
                <p className="text-sm text-slate-600 mb-4">Digital edition for Kindle, iPad, and other devices</p>
                <Button className="w-full" asChild>
                  <Link href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Buy eBook
                  </Link>
                </Button>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Audiobook</h4>
                  <span className="font-bold">$14.99</span>
                </div>
                <p className="text-sm text-slate-600 mb-4">Read by the author, 3 hours 20 minutes</p>
                <Button className="w-full" asChild>
                  <Link href="https://audible.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Buy Audiobook
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Retailers Section */}
<div className="mt-16">
  <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Available At These Retailers</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {[
      {
        name: "Amazon",
        logo: "/images/amazon.png",
        url: "https://www.amazon.com/dp/B0F88HXLDW",
      },
      {
        name: "Takealot",
        logo: "/images/takealot.png",
        url: "https://www.takealot.com",
      },
      {
        name: "Draft2Digital",
        logo: "/images/draft2digital.png",
        url: "https://books2read.com/u/3L2WLN",
      },
    ].map((retailer) => (
      <Link
        key={retailer.name}
        href={retailer.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center p-6 border rounded-lg hover:shadow-md transition-shadow"
      >
        <div className="relative h-16 w-full mb-4">
          <Image src={retailer.logo || "/placeholder.svg"} alt={retailer.name} fill className="object-contain" />
        </div>
        <span className="text-slate-800 font-medium">{retailer.name}</span>
      </Link>
    ))}
  </div>
</div>
      {/* Bulk Orders */}
      <div className="mt-16 bg-slate-50 p-8 rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Bulk Orders</h2>
          <p className="text-slate-600 mt-2">For book clubs, organizations, or educational purposes</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-slate-600 max-w-md text-center md:text-left">
            Interested in ordering multiple copies for your book club, organization, or classroom? Contact us for
            special pricing on bulk orders.
          </p>
          <Button asChild>
            <Link href="/contact">Contact for Bulk Orders</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
