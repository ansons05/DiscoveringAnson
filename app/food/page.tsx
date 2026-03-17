// app/food/page.tsx
import React from "react"
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
    id: 2,
    restaurant: "Pitchfork's",
    item: "Morty Reuben on Rye Bread",
    rating: 9,
    notes: "While the filling was somewhat spare and the sauerkraut lacked a bit, the filling was incredible and the bread was perfectly crispy.",
    guest: "Ben Palmer",
    photoUrl: "/images/mortys_reuben.png"
  },
  {
    id: 3,
    restaurant: "Pitchfork's",
    item: "Tiramisu",
    rating: 8.5,
    notes: "An incredible dessert overall. Could have slightly creamier filling but very few complaints.",
    guest: null,
    photoUrl: "/images/tiramisu.png"
  },
  {
    id: 4,
    restaurant: "Ginger and Soy",
    item: "Salmon Poke Bowl",
    rating: 7.5,
    notes: "The crunch balls were not the best addition and there was less salmon than expected, but overall the bowl tasted great.",
    guest: null,
    photoUrl: "/images/salmon-poke-bowl.png"
  },
  {
    id: 5,
    restaurant: "It's Thyme",
    item: "Carolina BBQ Thyme",
    rating: 7.5,
    notes: "Presentation could be better and it could benefit from rice to soak the juices, but the pulled pork flavor is phenomenal.",
    guest: null,
    photoUrl: "/images/carolina_bbq_thyme.png"
  },
  {
    id: 6,
    restaurant: "J.B.'s Roast & Chops",
    item: "Loaded GOAT Cheeseburger",
    rating: 7,
    notes: "The bun was dry and toppings were okay, but the patty, goat cheese, and garlic potatoes were great.",
    guest: null,
    photoUrl: "/images/loaded_goat_burger.png"
  },
  {
    id: 7,
    restaurant: "The Devil's Krafthouse",
    item: "Brie and Bacon Jam Burger",
    rating: 7,
    notes: "Great sweet and savory combination. Bun was good but fries were soggy and the burger lacked a wow factor.",
    guest: null,
    photoUrl: "/images/brie_and_bacon_burger.png"
  },
  {
    id: 15,
    restaurant: "Il Forno",
    item: "Stinger Pizza",
    rating: 8,
    notes: "Great crust texture. Jalapeño heat balanced nicely with sweet honey.",
    guest: null,
    photoUrl: "/images/stinger_pizza.png"
  },
  {
    id: 9,
    restaurant: "Ginger and Soy",
    item: "Tteokbokki",
    rating: 8,
    notes: "Unique textures and flavors that work well together. The dumpling and egg were a great addition.",
    guest: null,
    photoUrl: "/images/tteboki.png"
  },
  {
    id: 12,
    restaurant: "Ginger and Soy",
    item: "Spicy Tuna Poke",
    rating: 9,
    notes: "The best poke bowl at Ginger and Soy. The spice balanced perfectly with the other ingredients.",
    guest: null,
    photoUrl: "/images/spicy_tuna_poke.png"
  },
  {
    id: 8,
    restaurant: "Ginger and Soy",
    item: "Pad Thai",
    rating: 9,
    notes: "Perfect mix of sweet, salty, and tangy flavors with an ideal portion size.",
    guest: null,
    photoUrl: "/images/pad-thai.jpg"
  },
  {
    id: 11,
    restaurant: "Pitchfork's",
    item: "Cappuccino Chip Smoothie",
    rating: 7.5,
    notes: "Creamy and thick but the chocolate chips pooled at the bottom so the ending was subpar.",
    guest: null,
    photoUrl: "/images/cappuccino-chip.jpg"
  },
  {
    id: 13,
    restaurant: "Ginger and Soy",
    item: "Tuna Poke Bowl",
    rating: 8.5,
    notes: "Less crunch balls made this better than the salmon bowl. Tuna worked really well with the flavors.",
    guest: null,
    photoUrl: "/images/tuna-poke.jpg"
  },
  {
    id: 14,
    restaurant: "The Devil's Krafthouse",
    item: "Vanilla Milkshake",
    rating: 8,
    notes: "Thick and creamy with a strong vanilla flavor.",
    guest: null,
    photoUrl: "/images/vanilla-milkshake.jpg"
  },
  {
    id: 16,
    restaurant: "The Devil's Krafthouse",
    item: "DKH Quesadilla",
    rating: 8.5,
    notes: "Warm and gooey with great flavor but slightly less filling than expected.",
    guest: null,
    photoUrl: "/images/dkh-quesadilla.jpg"
  },
  {
    id: 17,
    restaurant: "Ginger and Soy",
    item: "Shanghai Bowl",
    rating: 6.5,
    notes: "Sauce and crispy ginger chicken were great but too much rice and mushy vegetables lowered the score.",
    guest: null,
    photoUrl: "/images/shanghai-bowl.jpg"
  },
  {
    id: 18,
    restaurant: "Ginger and Soy",
    item: "Tokyo Bowl",
    rating: 6.5,
    notes: "Teriyaki chicken and sauce were good but edamame and sweet potato didn’t fit and the rice was bland.",
    guest: null,
    photoUrl: "/images/tokyo-bowl.jpg"
  },
  {
    id: 19,
    restaurant: "The Devil's Krafthouse",
    item: "Cappuccino Milkshake",
    rating: 8,
    notes: "Solid drink with a strong coffee flavor.",
    guest: null,
    photoUrl: "/images/cappuccino-milkshake.jpg"
  }
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
            <div className="relative h-124 w-full">
              <Image
                src={meal.photoUrl}
                alt={meal.item}
                fill
                className="object-cover"
              />
            </div>

            {/* Meal Info */}
            <div className="p-4 space-y-2">
              <div className="text-sm text-gray-500 font-mono">{meal.restaurant}</div>
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