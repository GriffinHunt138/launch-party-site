import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, Smartphone, Code } from 'lucide-react'

export default function SmartCartCaseStudy() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              SmartCartAI+ Case Study
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              From Grocery List to AI-Powered Meal Planning
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              A Launch Party-built iOS MVP that turns your dietary goals into dynamic, personalized grocery plans in
              under 60 seconds.
            </p>
          </div>
          
          <div className="mt-12">
            <div className="relative w-full h-96 md:h-[500px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=500&width=800&text=SmartCartAI+ Hero Image"
                alt="SmartCartAI+ App Interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Project Overview */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Project Overview</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              SmartCartAI+ is an AI-driven iOS app that creates personalized meal plans and grocery lists based on user
              preferences, goals, and dietary restrictions.
            </p>
            <p>
              The app intelligently adjusts based on feedback and learns user behavior over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Client</p>
                  <p className="text-gray-600">Internal (Launch Party MVP demo)</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Timeline</p>
                  <p className="text-gray-600">4 weeks</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Smartphone className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Platform</p>
                  <p className="text-gray-600">iOS</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Code className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Tech Stack</p>
                  <p className="text-gray-600">SwiftUI, OpenAI API, Firebase</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Team</p>
                  <p className="text-gray-600">1 Product Manager, 1 Developer, 1 Designer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="relative w-full h-80 bg-gray-100 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=320&width=600&text=App Screenshot Overview"
                alt="SmartCartAI+ App Overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* The Problem */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">The Problem</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Most grocery and meal planning apps are static, time-consuming, and lack personalization.
            </p>
            <p>
              Users are forced to manually plan meals and track ingredients across multiple apps.
            </p>
            <p>
              Our goal was to create a mobile-first solution that automates planning and reduces decision fatigue and
              food waste.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Design & UX */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Design & UX</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              We created wireframes in Figma focused on delivering an intuitive, no-clutter user experience.
            </p>
            <p>
              Users could go from inputting goals to generating a dynamic grocery list in under 60 seconds.
            </p>
          </div>

          <div className="mt-12">
            <div className="relative w-full h-96 bg-gray-100 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=384&width=600&text=Wireframe and UI Design Preview"
                alt="SmartCartAI+ Design Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Prompt Engineering & AI Fine-Tuning */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Prompt Engineering & AI Fine-Tuning
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              This was the core innovation in SmartCartAI+.
            </p>
            <p>
              We built a multi-step prompt system using OpenAI that:
            </p>
            
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>Translated user goals into structured daily plans</li>
              <li>Generated full meal menus with ingredients and macros</li>
              <li>Output a categorized grocery list</li>
            </ul>

            <p className="font-semibold text-gray-900 mt-8">We fine-tuned for:</p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>Output reliability and accuracy</li>
              <li>Handling edge cases (e.g., keto, low-FODMAP)</li>
              <li>Reducing hallucinated steps/ingredients</li>
              <li>Enabling one-click ingredient swaps</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-xl mt-8">
              <p className="text-lg font-semibold text-blue-900">
                By version 2, we improved prompt success rates by over 70%
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="relative w-full h-96 bg-gray-100 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=384&width=600&text=AI Prompt Workflow Examples"
                alt="AI Prompt Engineering Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Build & Deploy */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Build & Deploy</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              The app was built entirely with SwiftUI.
            </p>
            <p>
              Firebase powered real-time data sync, pantry management, and user sessions.
            </p>
            
            <p className="font-semibold text-gray-900 mt-8">Features included:</p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>AI-generated meal plans</li>
              <li>Grocery list generation</li>
              <li>Ingredient swapping</li>
              <li>Pantry tracking</li>
              <li>Calorie/macro analysis</li>
            </ul>
          </div>

          <div className="mt-12">
            <div className="relative w-full h-96 bg-gray-100 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=384&width=600&text=App Features Screenshots"
                alt="SmartCartAI+ Features"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* What We Learned */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">What We Learned</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="font-semibold text-gray-900 text-xl">Prompt design is product design</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="font-semibold text-gray-900 text-xl">Simplicity {'>'} novelty in user-facing AI tools</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="font-semibold text-gray-900 text-xl">
                Micro changes in prompts had macro impacts on user trust and satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Next Steps */}
      <section className="w-full py-16 md:py-20">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Next Steps</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <span className="font-semibold text-gray-900">Q4 2025 App Store release planned</span>
            </p>
            
            <p className="font-semibold text-gray-900 mt-8">Feature roadmap includes:</p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>Recipe imports</li>
              <li>Shared meal plans</li>
              <li>Grocery delivery integrations</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Final CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Have a bold product idea?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We ship MVPs fast — from idea to launch in 30 days.
          </p>
          
          <Link href="https://calendly.com/griffinhunt138/30min" target="_blank" rel="noopener noreferrer">
            <Button className="px-8 py-6 text-lg">
              Book a free discovery call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
