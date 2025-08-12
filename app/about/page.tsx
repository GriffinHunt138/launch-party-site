import Image from "next/image"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Griffin Hunt",
      title: "Founder & Lead Engineer",
      bio: "Griffin holds degrees in Finance and Mathematics from Tulane University and brings ample app development experience to every project. He combines analytical thinking with technical expertise to build robust, scalable applications.",
      image: "/images/griffin-headshot.jpeg",
    },
    {
      name: "Tejas Sagubadi",
      title: "Project Manager",
      bio: "Tejas earned his degree in Business Management from the University of North Carolina at Chapel Hill and has ample experience as a project manager and leader. He ensures seamless project execution and client satisfaction from concept to launch.",
      image: "/images/tejas-headshot.jpeg",
    },
  ]

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Team</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We&apos;re a team of builders, designers, and developers who believe fast, functional, and beautiful apps
              shouldn&apos;t take 6 months to launch. LaunchParty is here to turn your idea into a live product in under
              30 days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="relative w-40 h-40 overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className={`${member.name === "Tejas Sagubadi" ? "object-cover object-top" : "object-cover scale-110"}`}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.title}</p>
                  <p className="mt-2 text-gray-600 leading-relaxed max-w-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
