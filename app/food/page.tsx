// app/food/page.tsx
import React from "react";
import Image from "next/image";

interface Meal {
  id: number;
  restaurant: string;
  item: string;
  rating: number;
  notes: string;
  photoUrl: string;
  guest?: string | null;
}

const meals: Meal[] = [
  { id: 1, restaurant: "Gothic Grill", item: "Bleu Cheese Burger", rating: 10, notes: "Loaded with bleu cheese, juicy double patties, non-stale bread, soft mushrooms, and spinach.", photoUrl: "/images/bleu_cheese_burger.png" },
  { id: 2, restaurant: "The Devil's Krafthouse", item: "Turkey Burger", rating: 9.5, notes: "One of the juiciest burgers. Avocado and cheese warm and gooey, bun perfect.", photoUrl: "/images/turkey_burger.png" },
  { id: 4, restaurant: "Ginger and Soy", item: "Pad Thai", rating: 9, notes: "Sweet, salty, tangy flavor, perfect portion size.", photoUrl: "/images/pad_thai.png" },
  { id: 5, restaurant: "Ginger and Soy", item: "Spicy Tuna Poke", rating: 9, notes: "Best poke bowl at Ginger and Soy, spiciness balanced perfectly.", photoUrl: "/images/spicy_tuna_poke.png" },
  { id: 6, restaurant: "Il Forno", item: "Chicken Pesto Pizza", rating: 9, notes: "Thick crust, soft chicken, creamy pesto, slightly oily.", photoUrl: "/images/chicken_pesto_pizza.png" },
  { id: 7, restaurant: "Pitchfork's", item: "Morty Reuben on Rye Bread", rating: 9, notes: "Filling was good, bread crispy, sauerkraut slightly light.", photoUrl: "/images/mortys_reuben.png" },
  { id: 8, restaurant: "Farmstead", item: "Gyro", rating: 8.5, notes: "Tender meat, good hummus and yogurt, rice bland and pita small.", photoUrl: "/images/gyro.png" },
  { id: 9, restaurant: "Ginger and Soy", item: "Tune Poke Bowl", rating: 8.5, notes: "Similar to other poke bowls, tuna worked well, less crunch balls than salmon bowl.", photoUrl: "/images/tuna_poke_bowl.png" },
  { id: 10, restaurant: "Pitchfork's", item: "Tiramisu", rating: 8.5, notes: "Slightly creamy filling, overall excellent dessert.", photoUrl: "/images/tiramisu.png" },
  { id: 11, restaurant: "Pitchfork's", item: "Chicken Tenders", rating: 8.5, notes: "Crispy, warm, fries also crispy and warm.", photoUrl: "/images/chicken_tenders.png" },
  { id: 13, restaurant: "The Devil's Krafthouse", item: "DKH Quesadilla", rating: 8.5, notes: "Warm, gooey, slightly less filling than expected.", photoUrl: "/images/dkh_quesadilla.png" },
  { id: 14, restaurant: "The Devil's Krafthouse", item: "Dilly Burger", rating: 8.5, notes: "Juicy patty, soft bun, crispy pickles, lettuce slightly overpowering.", photoUrl: "/images/dilly_burger.png" },
  { id: 15, restaurant: "Ginger and Soy", item: "Tteokbokki", rating: 8, notes: "Unique textures and flavors, dumpling and egg a great addition.", photoUrl: "/images/tteokbokki.png" },
  { id: 17, restaurant: "Il Forno", item: "Stinger Pizza", rating: 8, notes: "Soft and crunchy crust, jalapeño heat balanced with honey.", photoUrl: "/images/stinger_pizza.png" },
  { id: 18, restaurant: "Il Forno", item: "BBQ Chicken Pizza", rating: 8, notes: "Sauce perfectly proportioned, meat could be softer.", photoUrl: "/images/bbq_chicken_pizza.png" },
  { id: 19, restaurant: "J.B.'s Roast & Chops", item: "Black and Blue Burger", rating: 8, notes: "Patty thick, bleu cheese present, arugula and onion just added volume.", photoUrl: "/images/black_and_blue_burger.png" },
  { id: 20, restaurant: "Pitchfork's", item: "Chocolate Cheesecake", rating: 8, notes: "Not overly sweet, solid chocolate, slightly dense.", photoUrl: "/images/chocolate_cheesecake.png" },
  { id: 23, restaurant: "The Devil's Krafthouse", item: "$5 Grilled Cheese", rating: 8, notes: "Crispy and filled well.", photoUrl: "/images/grilled_cheese_five_dollar.png" },
  { id: 24, restaurant: "Ginger and Soy", item: "Salmon Poke Bowl", rating: 7.5, notes: "Crunch balls not best addition, less salmon than expected.", photoUrl: "/images/salmon_poke_bowl.png" },
  { id: 25, restaurant: "It's Thyme", item: "Carolina BBQ Thyme", rating: 7.5, notes: "Presentation could be better, taste phenomenal.", photoUrl: "/images/carolina_bbq_thyme.png" },
  { id: 27, restaurant: "The Devil's Krafthouse", item: "Breaky Burger", rating: 7.5, notes: "Cheese and egg great, bacon dry, burger slightly dense.", photoUrl: "/images/breaky_burger.png" },
  { id: 28, restaurant: "J.B.'s Roast & Chops", item: "8oz Steak", rating: 7, notes: "Large portion but somewhat dry.", photoUrl: "/images/8oz_.png" },
  { id: 29, restaurant: "J.B.'s Roast & Chops", item: "Loaded Goat Cheeseburger", rating: 7, notes: "Bun dry, toppings ok, patty, goat cheese, garlic potato great.", photoUrl: "/images/loaded_goat_burger.png" },
  { id: 30, restaurant: "The Devil's Krafthouse", item: "Brie and Bacon Jam Burger", rating: 7, notes: "Sweet and savory, bun not dry, fries slightly soggy.", photoUrl: "/images/brie_and_bacon_burger.png" },
  { id: 31, restaurant: "The Devil's Krafthouse", item: "Flank Steak French Dip", rating: 7, notes: "Underfilled, french dip slightly bland, seasoned well.", photoUrl: "/images/flank_steak_french_dip.png" },
  { id: 32, restaurant: "Ginger and Soy", item: "Shanghai Bowl", rating: 6.5, notes: "Sauce and crispy ginger chicken great, rice overload lowered score.", photoUrl: "/images/shanghai_bowl.png" },
  { id: 33, restaurant: "Ginger and Soy", item: "Tokyo Bowl", rating: 6.5, notes: "Edamame and sweet potato didn't fit, rice bland but tasty sauce.", photoUrl: "/images/tokyo_bowl.png" },
  { id: 34, restaurant: "The Devil's Krafthouse", item: "Queso Burger", rating: 6.5, notes: "Bun dominated, minimal cheese, patty cooked well.", photoUrl: "/images/queso_burger.png" },
  { id: 35, restaurant: "Pitchfork's", item: "Vanilla Cheesecake", rating: 6, notes: "Very sweet, stiff texture.", photoUrl: "/images/vanilla_cheesecake.png" },
  { id: 37, restaurant: "Gothic Grill", item: "Double Patty Melt", rating: 9, notes: "Crispy bread, juicy patties, onions soft, sauce tasty.", photoUrl: "/images/double_patty_melt.png" }
];

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
            {/* Square Meal Image */}
            <div className="relative w-full aspect-square">
              <Image
                src={meal.photoUrl}
                alt={meal.item}
                fill
                className="object-cover rounded-t-xl"
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
  );
}