import Link from "next/link"
import { ArrowRight, Code, Rocket, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import PortfolioCarousel from "@/components/portfolio-carousel"

export default function LandingPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Your MVP in 30 days - guaranteed
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                LaunchParty is your rapid MVP development agency for iOS and web apps.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="https://calendly.com/griffinhunt138/30min" target="_blank" rel="noopener noreferrer">
                <Button className="px-8 py-6 text-lg">
                  Book a Free Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Carousel Section */}
      <PortfolioCarousel />

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-white rounded-full shadow-sm">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">MVP in 30 Days</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We turn your idea into a functional product in under a month, so you can start testing and iterating
                quickly.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-white rounded-full shadow-sm">
                <Code className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">iOS + Web Apps</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Get your product on multiple platforms with our cross-platform development expertise.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="p-4 bg-white rounded-full shadow-sm">
                <Rocket className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Affordable Fixed Pricing</h3>
              <p className="text-gray-500 dark:text-gray-400">
                No surprises or hidden costs. Our transparent pricing ensures you know exactly what you're getting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
