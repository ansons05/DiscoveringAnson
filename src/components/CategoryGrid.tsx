'use client'

const categories = [
  {
    id: 'food',
    title: 'Food',
    description: 'Culinary discoveries and food experiences',
    icon: '🍽️',
    color: 'from-orange-400 to-red-400',
  },
  {
    id: 'travel',
    title: 'Travel',
    description: 'Exploring destinations and adventures',
    icon: '✈️',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    id: 'transit',
    title: 'Transit',
    description: 'Movement, transportation, and journeys',
    icon: '🚀',
    color: 'from-purple-400 to-pink-400',
  },
  {
    id: 'more',
    title: 'More',
    description: 'Other categories and interests',
    icon: '⭐',
    color: 'from-yellow-400 to-orange-400',
  },
]

export default function CategoryGrid() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              id={category.id}
              className="group relative overflow-hidden rounded-lg bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-slate-600 transition p-6 cursor-pointer hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                <p className="text-slate-300 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
