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
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
  // Desktop carousel state
  const [mainCarouselApi, setMainCarouselApi] = useState<CarouselApi>()
  const [canScrollPrevApp, setCanScrollPrevApp] = useState(false)
  const [canScrollNextApp, setCanScrollNextApp] = useState(false)

  // Mobile state - separate tracking for app and image
  const [currentAppIndex, setCurrentAppIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const onMainCarouselSelect = useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrevApp(api.canScrollPrev())
    setCanScrollNextApp(api.canScrollNext())
  }, [])

  const goToPrevApp = () => {
    setCurrentAppIndex((prev) => (prev === 0 ? portfolioProjects.length - 1 : prev - 1))
    setCurrentImageIndex(0) // Reset to first image when changing apps
  }

  const goToNextApp = () => {
    setCurrentAppIndex((prev) => (prev === portfolioProjects.length - 1 ? 0 : prev + 1))
    setCurrentImageIndex(0) // Reset to first image when changing apps
  }

  const goToPrevImage = () => {
    const currentProject = portfolioProjects[currentAppIndex]
    setCurrentImageIndex((prev) => (prev === 0 ? currentProject.screenshots.length - 1 : prev - 1))
  }

  const goToNextImage = () => {
    const currentProject = portfolioProjects[currentAppIndex]
    setCurrentImageIndex((prev) => (prev === currentProject.screenshots.length - 1 ? 0 : prev + 1))
  }

  const currentProject = portfolioProjects[currentAppIndex]
  const currentScreenshot = currentProject.screenshots[currentImageIndex]

  return (
    <div className="w-full py-10 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Work</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Check out some of the apps we've launched for our clients.
          </p>
        </div>

        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setMainCarouselApi}
            onSelect={onMainCarouselSelect}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {portfolioProjects.map((project) => (
                <CarouselItem key={project.id} className="basis-full">
                  <div className="p-1">
                    <div className="flex flex-col items-center">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">{project.description}</p>
                      </div>

                      {/* Desktop: Show all 3 screenshots side by side */}
                      <div className="grid grid-cols-3 gap-4 w-full max-w-5xl">
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
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Desktop app switching arrows */}
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>

        <div className="md:hidden">
          <div className="flex flex-col items-center">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold">{currentProject.title}</h3>
              <p className="text-gray-500 mt-2 max-w-2xl mx-auto">{currentProject.description}</p>
            </div>

            {/* Mobile app switching arrows */}
            <div className="flex justify-center gap-4 mb-6">
              <Button variant="outline" size="icon" onClick={goToPrevApp} className="h-10 w-10 bg-transparent">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={goToNextApp} className="h-10 w-10 bg-transparent">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile: Single image carousel for swiping between screenshots */}
            <div className="w-full max-w-sm">
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                  startIndex: currentImageIndex,
                }}
                className="w-full"
                onSelect={(api) => {
                  if (api) {
                    setCurrentImageIndex(api.selectedScrollSnap())
                  }
                }}
              >
                <CarouselContent>
                  {currentProject.screenshots.map((screenshot, index) => (
                    <CarouselItem key={screenshot.id} className="basis-[85%]">
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
              </Carousel>
            </div>

            {/* Mobile image indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {currentProject.screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
