"use client"
import Image from "next/image"
import { useState, useCallback } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

// You can replace these with your actual projects
const portfolioProjects = [
  {
    id: 1,
    title: "SmartCartAI+",
    description:
      "AI-powered grocery shopping and meal planning app with personalized nutrition goals and automated shopping lists",
    screenshots: [
      {
        id: 1,
        alt: "SmartCartAI+ Home Screen",
        image: "/images/smartcart-home.png",
      },
      {
        id: 2,
        alt: "SmartCartAI+ AI Generator",
        image: "/images/smartcart-generator.png",
      },
      {
        id: 3,
        alt: "SmartCartAI+ Meal Plans",
        image: "/images/smartcart-meals.png",
      },
    ],
  },
  {
    id: 2,
    title: "LocalLoop",
    description: "Social discovery app connecting users with local events, places, and community check-ins",
    screenshots: [
      {
        id: 1,
        alt: "LocalLoop Home Screen",
        image: "/images/localloop-home.png",
      },
      {
        id: 2,
        alt: "LocalLoop Events View",
        image: "/images/localloop-events.png",
      },
      {
        id: 3,
        alt: "LocalLoop Profile Screen",
        image: "/images/localloop-profile.png",
      },
    ],
  },
  {
    id: 3,
    title: "Pump",
    description:
      "Comprehensive fitness tracking app with workout planning, real-time exercise logging, and progress analytics",
    screenshots: [
      {
        id: 1,
        alt: "Pump Home Screen",
        image: "/images/pump-home.png",
      },
      {
        id: 2,
        alt: "Pump Active Workout",
        image: "/images/pump-workout.png",
      },
      {
        id: 3,
        alt: "Pump Progress Analytics",
        image: "/images/pump-progress.png",
      },
    ],
  },
]

export default function PortfolioCarousel() {
  const [mainCarouselApi, setMainCarouselApi] = useState<CarouselApi>()
  const [canScrollPrevApp, setCanScrollPrevApp] = useState(false)
  const [canScrollNextApp, setCanScrollNextApp] = useState(false)

  const onMainCarouselSelect = useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrevApp(api.canScrollPrev())
    setCanScrollNextApp(api.canScrollNext())
  }, [])

  return (
    <div className="w-full py-10 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Work</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Check out some of the apps we've launched for our clients.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            draggable: false, // Disable swiping for the main app carousel
            dragFree: false, // Ensure no free dragging either
          }}
          setApi={setMainCarouselApi}
          onSelect={onMainCarouselSelect}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent style={{ touchAction: "pan-y" }}>
            {" "}
            {/* Allow vertical scrolling but prevent horizontal swiping on main carousel */}
            {portfolioProjects.map((project) => (
              <CarouselItem key={project.id} className="basis-full">
                <div className="p-1">
                  <div className="flex flex-col items-center">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-gray-500 mt-2 max-w-2xl mx-auto">{project.description}</p>
                    </div>

                    {/* Mobile-only app switching arrows under description */}
                    <div className="flex justify-center gap-4 mb-6 md:hidden">
                      {/* These CarouselPrevious/Next components will control the parent (app) carousel */}
                      <CarouselPrevious className="relative static" /> {/* Override absolute positioning */}
                      <CarouselNext className="relative static" /> {/* Override absolute positioning */}
                    </div>

                    {/* Desktop: Show all 3 screenshots side by side */}
                    <div className="hidden md:grid md:grid-cols-3 gap-4 w-full max-w-5xl">
                      {project.screenshots.map((screenshot) => (
                        <Card key={screenshot.id} className="overflow-hidden">
                          <CardContent className="p-0">
                            <div className="relative w-full">
                              <Image
                                src={screenshot.image || "/placeholder.svg"}
                                alt={screenshot.alt}
                                width={300}
                                height={600}
                                className="w-full h-auto"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Mobile: Show screenshots in a horizontal carousel (swipe only, with preview) */}
                    <div className="md:hidden w-full max-w-sm">
                      <Carousel
                        opts={{
                          align: "start",
                          loop: true,
                          dragFree: true, // Allow free dragging for swiping
                          draggable: true, // Ensure it's draggable for swiping
                        }}
                        className="w-full"
                      >
                        <CarouselContent className="-ml-2" style={{ touchAction: "pan-x" }}>
                          {" "}
                          {/* Explicitly allow horizontal swiping on inner carousel */}
                          {project.screenshots.map((screenshot) => (
                            <CarouselItem key={screenshot.id} className="basis-[85%] pl-2">
                              <Card className="overflow-hidden">
                                <CardContent className="p-0">
                                  <div className="relative w-full">
                                    <Image
                                      src={screenshot.image || "/placeholder.svg"}
                                      alt={screenshot.alt}
                                      width={300}
                                      height={600}
                                      className="w-full h-auto"
                                    />
                                  </div>
                                </CardContent>
                              </Card>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        {/* No inner CarouselPrevious and CarouselNext here */}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Desktop-only app switching arrows below the content */}
          <div className="flex justify-center mt-8 gap-4 hidden md:flex">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
