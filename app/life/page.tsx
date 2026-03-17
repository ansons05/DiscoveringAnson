"use client"

import Link from "next/link"

export default function LifePage() {
  const life = [
    {
      date: "August 16th 2025",
      title: "Duke Starts",
      subtitle: "Durham, NC",
      image: "/images/duke_uni_anson.png",
      imagePosition: "center 40%",
    },
    {
      date: "September 5th 2024 — September 8th 2024",
      title: "Solo Travel in Iceland",
      subtitle: "Reykjavík, Iceland",
      image: "images/iceland.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground px-6 sm:px-8 lg:px-16 py-20">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Back */}
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-light">Life Log</h1>
          <p className="text-muted-foreground">
            A timeline of experiences, projects, and defining moments.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">

          {life.map((item, i) => (
            <div
              key={i}
              className="group grid lg:grid-cols-12 gap-6 sm:gap-8 border-l border-border pl-6 relative"
            >
              {/* DOT */}
              <div className="absolute -left-1.5 top-2 w-3 h-3 bg-muted-foreground rounded-full group-hover:bg-foreground transition-colors duration-300" />

              {/* DATE */}
              <div className="lg:col-span-3 text-sm text-muted-foreground font-mono">
                {item.date}
              </div>

              {/* CONTENT */}
              <div className="lg:col-span-9 space-y-3">

                {/* Image */}
                {item.image && (
                  <div className="w-full h-48 bg-muted rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: item.imagePosition || "center" }}
                    />
                  </div>
                )}

                <div className="text-lg font-medium">{item.title}</div>
                <div className="text-sm text-muted-foreground">
                  {item.subtitle}
                </div>

                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags?.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs border border-border rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))
                  }
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}
