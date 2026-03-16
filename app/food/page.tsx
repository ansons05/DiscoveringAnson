import Image from "next/image"

interface Meal {
  id: number
  restaurant: string
  item: string
  rating: number
  notes: string
  photoUrl: string
}

const meals: Meal[] = [
  {
    id: 1,
    restaurant: "Ginger and Soy",
    item: "Salmon Poke Bowl",
    rating: 7.5,
    notes: "The crunch balls were not the best addition to the dish and there was less salmon than was expected, but overall the bowl tasted great",
    photoUrl: "Salmon-Poke-Bowl.png", // place your images in public/mock-images
  },
  {
    id: 2,
    restaurant: "Pitchfork's",
    item: "Morty Reuben on Rye",
    rating: 9,
    notes: "Filling was incredible and bread perfectly crispy.",
    photoUrl: "/mock-images/reuben.jpg",
  },
  {
    id: 3,
    restaurant: "The Skillet",
    item: "Breakfast Quesadilla",
    rating: 7.5,
    notes: "Eggs a little dry but overall good flavor.",
    photoUrl: "/mock-images/quesadilla.jpg",
  },
]

export default function FoodPage() {
  return (
    <main className="min-h-screen py-20 px-4 sm:px-12 bg-gray-50">
      <h1 className="text-4xl font-light mb-12 text-center">Duke University Food</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Meal Image */}
            <div className="relative h-128 w-full">
              <Image
                src={meal.photoUrl}
                alt={meal.item}
                fill
                className="object-cover"
              />
            </div>

            {/* Meal Info */}
            <div className="p-4 space-y-2">
              <div className="text-sm text-muted-foreground font-mono">{meal.restaurant}</div>
              <h2 className="text-lg font-medium">{meal.item}</h2>
              <div className="flex items-center gap-2">
                <span className="font-bold">Rating:</span>
                <span>{meal.rating} / 10</span>
              </div>
              <p className="text-gray-600 text-sm">{meal.notes}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}