import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-10 px-4 md:px-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">LaunchParty</span>
          </Link>
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} LaunchParty. All rights reserved.</p>
        </div>
        <nav className="flex gap-4 md:gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
