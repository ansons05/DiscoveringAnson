"use client"

import Link from "next/link"

export default function LifePage() {
  const lifeLog = [
    {
      date: "Fall 2025",
      change: "Started valuing systems over individual effort",
      trigger: "Student government experience",
      before: "Believed good people solve problems",
      after: "Believe good systems prevent them",
    },
    {
      date: "Summer 2024",
      change: "Learned the importance of early planning",
      trigger: "Gap year research",
      before: "Planned reactively",
      after: "Now plan proactively",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground px-6 sm:px-8 lg:px-16 py-20">
      <Link href="/" className="text-sm text-muted-foreground hover:text-foregro und">
        ← Back to Home
      </Link>

      <h1 className="text-4xl sm:text-5xl font-light mt-6 mb-4">Life Log</h1>
      <p className="text-muted-foreground mb-12 max-w-xl">
        Timeline of experiences, projects, and moments shaping who I am.
      </p>

      <div className="space-y-8">
        {lifeLog.map((entry, i) => (
          <div key={i} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="text-sm text-muted-foreground font-mono">{entry.date}</div>
            <div className="text-lg font-medium mt-2">{entry.change}</div>
            <div className="text-sm text-muted-foreground mt-1">Trigger: {entry.trigger}</div>
            <div className="flex gap-4 mt-2">
              <div className="text-sm text-muted-foreground">
                <strong>Before:</strong> {entry.before}
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>After:</strong> {entry.after}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}