"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "research", "volunteering", "thoughts", "wu-food", "media", "life", "connect", "changelog"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Anson
                  <br />
                  <span className="text-muted-foreground"> Stine</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Student at Duke University studying
                  <span className="text-foreground"> Public Policy</span>,<span className="text-foreground"> Philosophy</span>,
                  and
                  <span className="text-foreground"> Economics </span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for Discussion
                  </div>
                  <div className="hidden sm:block">|</div>
                  <div>Based in Durham, NC</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Undergraduate Student</div>
                  <div className="text-muted-foreground">Duke University</div>
                  <div className="text-xs text-muted-foreground">August 2025 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["Urban Planning","Transportation", "Public Policy", "Travel", "Music Composition", "Gardening", "Pinball"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Selected Work</h2>
              <div className="text-sm text-muted-foreground font-mono"></div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "February 2026 - Present",
                  role: "Gap Year Planner and Researcher",
                  company: "Duke Gap Year Program",
                  description: "Compiling resources and advising students on meaningful gap year opportunities",
                  tech: ["React", "TypeScript", "Next.js"],
                },
                {
                  year: "September 2025 - Present",
                  role: "Senator",
                  company: "Duke University Student Government",
                  description: "Evaluate constituent feedback from 6,500 undergraduate students, testimonials, student groups, and campus datasets to develop evidence-based recommendations shaping campus-wide funding and governance outcome",
                  tech: ["React", "GraphQL", "Framer Motion"],
                },
                {
                  year: "September 2025 - Present",
                  role: "Founder and Co-Owner",
                  company: "Duke Community Cycle Share",
                  description: "Developed payment infrastructure and merchant-facing dashboard features.",
                  tech: ["Ruby", "React", "PostgreSQL"],
                },
                {
                  year: "2019",
                  role: "Software Engineer",
                  company: "Airbnb",
                  description: "Created booking flow optimizations and host management tools.",
                  tech: ["React", "Node.js", "MySQL"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section
          id="research"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Research</h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "April 2023 - November 2024",
                  role: "Student Researcher",
                  company: "Johns Hopkins University - The Cullen",
                  description: "Supported development of a murine physiological model by collecting, structuring, and analyzing vestibular and ocular datasets",
                  tech: ["React", "TypeScript", "Next.js"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="volunteering"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Volunteering</h2>
              <div className="text-sm text-muted-foreground font-mono"></div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "October 2025 - Present",
                  role: "Bike Mechanic",
                  company: "The Durham Bike Co-op",
                  description: "Work 5+ hours/week on Saturdays and Sundays to repair community members’ bikes as well as deconstruct older bikes for parts to use in new projects",
                  tech: ["React", "TypeScript", "Next.js"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el) => (sectionsRef.current[4] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Recent Thoughts</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "Why College Campuses Should Adpot Bicycle Infrastructure",
                  excerpt: "See Below",
                  date: "Dec 2024",
                  readTime: "5 min",
                },
                {
                  title: "Exploring E-Bike Payment Systems",
                  excerpt: "See Below",
                  date: "Nov 2024",
                  readTime: "8 min",
                },
                {
                  title: "Bus Rapid Transit Review",
                  excerpt: "See Below",
                  date: "Oct 2024",
                  readTime: "6 min",
                },
                {
                  title: "Factors Preventing Transit Adpotion",
                  excerpt: "See Below",
                  date: "Sep 2024",
                  readTime: "4 min",
                },
              ].map((post, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>Read more</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
        id="wu-food"
        ref={(el) => (sectionsRef.current[5] = el)}
        className="min-h-screen py-20 sm:py-32 opacity-0"
        >
  <div className="space-y-12 sm:space-y-16">
    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <h2 className="text-3xl sm:text-4xl font-light">Duke University Food Blog</h2>
      <div className="text-sm text-muted-foreground font-mono"></div>
    </div>

    {/* Stats Section */}
    <div className="space-y-6">
      {/* Mock food stats */}
      {(() => {
        const foodStats = [
          { restaurant: "Ginger and Soy", count: 7 },
          { restaurant: "Devil's Krafthouse", count: 3 },
          { restaurant: "Pitchfork's", count: 3 },
          { restaurant: "J.B.'s Roast & Chops", count: 2 },
          { restaurant: "Il Forno", count: 1 },
          { restaurant: "It's Thyme", count: 1 },
        ]
        const totalMeals = foodStats.reduce((sum, f) => sum + f.count, 0)
        const maxCount = Math.max(...foodStats.map((f) => f.count))
        return (
          <div className="space-y-4">
            {/* Total meals */}
            <div className="text-lg sm:text-xl font-medium">
              Total meals rated: <span className="text-foreground">{totalMeals}</span>
            </div>

            {/* Bars */}
            <div className="space-y-2">
              {foodStats.map((f) => {
                const widthPercent = (f.count / maxCount) * 100
                return (
                  <div key={f.restaurant} className="flex items-center gap-4">
                    <div className="w-32 text-sm font-mono">{f.restaurant}</div>
                    <div className="flex-1 bg-gray-200 rounded h-6 relative">
                      <div
                        className="bg-green-500 h-6 rounded transition-all duration-500"
                        style={{ width: `${widthPercent}%` }}
                      />
                      <div className="absolute right-2 top-0 h-6 flex items-center text-sm text-white font-medium">
                        {f.count}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })()}
    </div>

    {/* Link to full food page */}
    <div className="pt-8">
      <Link href="/food">
        <button className="px-4 py-2 border rounded hover:bg-gray-200 transition-colors duration-300">
          View Food
        </button>
      </Link>
    </div>
  </div>
</section>

      <section
        id="media"
        ref={(el) => (sectionsRef.current[6] = el)}
        className="min-h-screen py-20 sm:py-32 opacity-0">
        <div className="space-y-12 sm:space-y-16">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-light">Media Consumed</h2>
          </div>

          {/* Optional preview content */}
          <div className="text-muted-foreground max-w-lg">
            Books, movies, music, and other media I’ve engaged with recently.
          </div>

          {/* Button to full media page */}
          <div className="pt-8">
            <Link href="/media">
              <button className="px-4 py-2 border rounded hover:bg-gray-200 transition-colors duration-300">
                View Media
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="life"
        ref={(el) => (sectionsRef.current[7] = el)}
        className="min-h-screen py-20 sm:py-32 opacity-0"
      >
        <div className="space-y-12 sm:space-y-16">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-light">Life Log</h2>
          </div>

          {/* Description */}
          <div className="text-muted-foreground max-w-lg">
            A timeline of experiences, projects, and moments that have shaped who I am.
          </div>

          {/* Button */}
          <div className="pt-8">
            <Link href="/life">
              <button className="px-4 py-2 border rounded hover:bg-gray-200 transition-colors duration-300">
                View Life Log
              </button>
            </Link>
          </div>

        </div>
      </section>

      <section
          id="changelog"
          ref={(el) => (sectionsRef.current[8] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Changelog</h2>
            </div>

            {/* Description */}
            <div className="text-muted-foreground max-w-lg">
              A record of how I’ve changed, grown, and evolved over time — my shifts in thinking, priorities, and perspective.
            </div>

            {/* Button */}
            <div className="pt-8">
              <Link href="/changelog">
                <button className="px-4 py-2 border rounded hover:bg-gray-200 transition-colors duration-300">
                  View My Changelog
                </button>
              </Link>
            </div>

          </div>
        </section>

        <section id="connect" ref={(el) => (sectionsRef.current[9] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about urban planning, policy, and gardening.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:test@example.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">acs@duke.edu</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">Other Places to Find Me</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "LinkedIn", handle: "ansonstine", url: "#" },
                  { name: "Instagram", handle: "@anson.s05", url: "#" },
                  { name: "HubSpot Community", handle: "@", url: "#" },
                  { name: "LinkedIn", handle: "_", url: "#" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2026 Anson Stine. All rights reserved.</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
