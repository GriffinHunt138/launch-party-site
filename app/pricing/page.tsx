import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Choose the package that fits your needs. No hidden fees or surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            {/* Basic MVP Card */}
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg border border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Basic MVP</h3>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">$3,000</span>
                  <span className="ml-1 text-xl font-semibold text-gray-500">/ One-time</span>
                </div>
              </div>
              <ul className="mb-8 space-y-4 flex-1">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>1 platform (iOS/Android or Web)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Frontend only</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Delivery in 30 days</span>
                </li>
              </ul>
              <Link
                href="https://calendly.com/griffinhunt138/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button className="w-full">Get Started – Book a Call</Button>
              </Link>
            </div>

            {/* Premium MVP Card */}
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg border-2 border-primary">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Premium MVP</h3>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">$5,000</span>
                  <span className="ml-1 text-xl font-semibold text-gray-500">/ One-time</span>
                </div>
              </div>
              <ul className="mb-8 space-y-4 flex-1">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>2 platforms (iOS/Android + Web)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Frontend, backend, and AI integration included</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Post-launch support for 1 month</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Delivery in 30 days</span>
                </li>
              </ul>
              <Link
                href="https://calendly.com/griffinhunt138/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button className="w-full" variant="default">
                  Get Started – Book a Call
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              <strong>100% Satisfaction Guarantee:</strong> You don't pay until after your app is complete and you're
              completely satisfied with our work.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
