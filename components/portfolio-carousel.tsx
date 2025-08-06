"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
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
          }}
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

                    {/* Mobile: Show screenshots in a horizontal carousel */}
                    <div className="md:hidden w-full max-w-sm">
                      <Carousel
                        opts={{
                          align: "center",
                          loop: true,
                        }}
                        className="w-full"
                      >
                        <CarouselContent>
                          {project.screenshots.map((screenshot) => (
                            <CarouselItem key={screenshot.id} className="basis-full">
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
                        <div className="flex justify-center mt-4 gap-4">
                          <CarouselPrevious />
                          <CarouselNext />
                        </div>
                      </Carousel>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
