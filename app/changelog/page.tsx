"use client"

import Link from "next/link"

export default function ChangelogPage() {
  const entries = [
    {
      date: "Fall 2025",
      change: "Started valuing systems over individual effort",
      trigger: "Student government experience",
      before: "Believed good people solve problems",
      after: "Believe good systems prevent them"
    },
    {
      date: "Summer 2025",
      change: "Developed better time management",
      trigger: "Gap year project planning",
      before: "Procrastinated frequently",
      after: "Plan tasks ahead and prioritize"
    },
    {
      date: "September 2024",
      change: "Learned independence through travel",
      trigger: "Solo travel in Iceland",
      before: "Dependent on structured guidance",
      after: "Confident in making decisions alone"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground px-6 sm:px-8 lg:px-16 py-20">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Back */}
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back
        </Link>

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-light">Changelog</h1>
        <p className="text-muted-foreground max-w-lg">
          A timeline of my personal growth, reflecting key experiences and mindset shifts.
        </p>

        {/* Timeline */}
        <div className="space-y-12 mt-8">
          {entries.map((entry, i) => (
            <div key={i} className="group grid lg:grid-cols-12 gap-6 sm:gap-8 relative border-l border-border pl-6">
              
              {/* Dot */}
              <div className="absolute -left-1.5 top-2 w-3 h-3 bg-muted-foreground rounded-full group-hover:bg-foreground transition-colors duration-300"></div>
              
              {/* Date */}
              <div className="lg:col-span-2 text-sm text-muted-foreground font-mono">
                {entry.date}
              </div>
              
              {/* Content */}
              <div className="lg:col-span-10 space-y-2">
                <div className="text-lg font-medium">{entry.change}</div>
                <div className="text-sm text-muted-foreground italic">Trigger: {entry.trigger}</div>
                
                {/* Before / After */}
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <div className="flex-1 border border-border rounded p-3">
                    <div className="text-xs font-mono text-muted-foreground">Before</div>
                    <div>{entry.before}</div>
                  </div>
                  <div className="flex-1 border border-border rounded p-3">
                    <div className="text-xs font-mono text-muted-foreground">After</div>
                    <div>{entry.after}</div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Button */}
        <div className="pt-8">
          <Link href="/changelog">
            <button className="px-4 py-2 border rounded hover:bg-gray-200 transition-colors duration-300">
              View Full Changelog
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}