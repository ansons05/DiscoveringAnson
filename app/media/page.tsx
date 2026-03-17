"use client"

import Link from "next/link"

export default function MediaPage() {
  const books = [
    // --- MAGISTERIUM ---
    { title: "The Iron Trial", author: "Holly Black & Cassandra Clare", image: "/covers/iron-trial.jpg", tags: ["Fantasy", "YA"] },
    { title: "The Copper Gauntlet", author: "Holly Black & Cassandra Clare", image: "/covers/copper-gauntlet.jpg", tags: ["Fantasy"] },
    { title: "The Bronze Key", author: "Holly Black & Cassandra Clare", image: "/covers/bronze-key.jpg", tags: ["Fantasy"] },
    { title: "The Silver Mask", author: "Holly Black & Cassandra Clare", image: "/covers/silver-mask.jpg", tags: ["Fantasy"] },
    { title: "The Golden Tower", author: "Holly Black & Cassandra Clare", image: "/covers/golden-tower.jpg", tags: ["Fantasy"] },

    // --- HOLLY BLACK / FAERIE ---
    { title: "The Cruel Prince", author: "Holly Black", image: "/covers/cruel-prince.jpg", tags: ["Fantasy", "Political"] },
    { title: "The Wicked King", author: "Holly Black", image: "/covers/wicked-king.jpg", tags: ["Fantasy"] },
    { title: "The Queen of Nothing", author: "Holly Black", image: "/covers/queen-nothing.jpg", tags: ["Fantasy"] },
    { title: "Tithe", author: "Holly Black", image: "/covers/tithe.jpg", tags: ["Fantasy"] },
    { title: "Valiant", author: "Holly Black", image: "/covers/valiant.jpg", tags: ["Fantasy"] },
    { title: "Ironside", author: "Holly Black", image: "/covers/ironside.jpg", tags: ["Fantasy"] },

    // --- PERCY JACKSON + HEROES ---
    { title: "The Lightning Thief", author: "Rick Riordan", image: "/covers/lightning-thief.jpg", tags: ["Fantasy", "Mythology"] },
    { title: "The Sea of Monsters", author: "Rick Riordan", image: "/covers/sea-monsters.jpg", tags: ["Fantasy"] },
    { title: "The Titan’s Curse", author: "Rick Riordan", image: "/covers/titans-curse.jpg", tags: ["Fantasy"] },
    { title: "The Battle of the Labyrinth", author: "Rick Riordan", image: "/covers/labyrinth.jpg", tags: ["Fantasy"] },
    { title: "The Last Olympian", author: "Rick Riordan", image: "/covers/last-olympian.jpg", tags: ["Fantasy"] },
    { title: "The Lost Hero", author: "Rick Riordan", image: "/covers/lost-hero.jpg", tags: ["Fantasy"] },
    { title: "The Son of Neptune", author: "Rick Riordan", image: "/covers/son-neptune.jpg", tags: ["Fantasy"] },
    { title: "The Mark of Athena", author: "Rick Riordan", image: "/covers/mark-athena.jpg", tags: ["Fantasy"] },
    { title: "The House of Hades", author: "Rick Riordan", image: "/covers/house-hades.jpg", tags: ["Fantasy"] },
    { title: "The Blood of Olympus", author: "Rick Riordan", image: "/covers/blood-olympus.jpg", tags: ["Fantasy"] },
    { title: "The Hidden Oracle", author: "Rick Riordan", image: "/covers/hidden-oracle.jpg", tags: ["Fantasy"] },
    { title: "The Dark Prophecy", author: "Rick Riordan", image: "/covers/dark-prophecy.jpg", tags: ["Fantasy"] },
    { title: "The Burning Maze", author: "Rick Riordan", image: "/covers/burning-maze.jpg", tags: ["Fantasy"] },

    // --- OTHER FICTION ---
    { title: "The One and Only Ivan", author: "Katherine Applegate", image: "/covers/ivan.jpg", tags: ["Fiction"] },
    { title: "From Blood and Ash", author: "Jennifer L. Armentrout", image: "/covers/blood-ash.jpg", tags: ["Fantasy", "Romance"] },
    { title: "A Kingdom of Flesh and Fire", author: "Jennifer L. Armentrout", image: "/covers/flesh-fire.jpg", tags: ["Fantasy"] },
    { title: "The Crown of Gilded Bones", author: "Jennifer L. Armentrout", image: "/covers/gilded-bones.jpg", tags: ["Fantasy"] },
    { title: "They Both Die at the End", author: "Adam Silvera", image: "/covers/they-both-die.jpg", tags: ["Fiction"] },
    { title: "The House on Mango Street", author: "Sandra Cisneros", image: "/covers/mango-street.jpg", tags: ["Literary"] },
    { title: "The Book Thief", author: "Markus Zusak", image: "/covers/book-thief.jpg", tags: ["Historical"] },
    { title: "Like Water for Chocolate", author: "Laura Esquivel", image: "/covers/chocolate.jpg", tags: ["Magical Realism"] },
    { title: "The Fault in Our Stars", author: "John Green", image: "/covers/fault-stars.jpg", tags: ["Fiction"] },
    { title: "Looking for Alaska", author: "John Green", image: "/covers/alaska.jpg", tags: ["Fiction"] },
    { title: "The Midnight Library", author: "Matt Haig", image: "/covers/midnight-library.jpg", tags: ["Philosophy"] },

    // --- CLASSICS / PHILOSOPHY ---
    { title: "1984", author: "George Orwell", image: "/covers/1984.jpg", tags: ["Dystopian"] },
    { title: "Animal Farm", author: "George Orwell", image: "/covers/animal-farm.jpg", tags: ["Political"] },
    { title: "Oedipus Rex", author: "Sophocles", image: "/covers/oedipus.jpg", tags: ["Classic"] },
    { title: "Oedipus at Colonus", author: "Sophocles", image: "/covers/oedipus2.jpg", tags: ["Classic"] },
    { title: "Antigone", author: "Sophocles", image: "/covers/antigone.jpg", tags: ["Classic"] },

    // --- NONFICTION / THEORY ---
    { title: "Atomic Habits", author: "James Clear", image: "/covers/atomic-habits.jpg", tags: ["Self-Help"] },
    { title: "The Myth of Sisyphus", author: "Albert Camus", image: "/covers/sisyphus.jpg", tags: ["Philosophy"] },
    { title: "Basic Economics", author: "Thomas Sowell", image: "/covers/economics.jpg", tags: ["Economics"] },
    { title: "Six Easy Pieces", author: "Richard Feynman", image: "/covers/feynman.jpg", tags: ["Science"] },
    { title: "Sapiens", author: "Yuval Noah Harari", image: "/covers/sapiens.jpg", tags: ["History"] },

    // --- PAPERS / SHORT FORM ---
    { title: "Reasoning", author: "Blackburn", tags: ["Philosophy"] },
    { title: "Luck Swallows Everything", author: "Strawson", tags: ["Philosophy"] },
    { title: "What's Expected of Us", author: "Ted Chiang", tags: ["Philosophy"] },
    { title: "Human Freedom and the Self", author: "Chisholm", tags: ["Philosophy"] },
    { title: "The Incompatibility of Free Will and Determinism", author: "Peter van Inwagen", tags: ["Philosophy"] },
    { title: "Alternative Possibilities and Moral Responsibility", author: "Frankfurt", tags: ["Philosophy"] },
  ]

  const Card = ({ item }: any) => (
    <div className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 hover:shadow-sm hover:-translate-y-1 transition-all duration-300">
      <div className="flex gap-4 items-center">

        <div className="w-12 h-16 bg-muted rounded overflow-hidden flex-shrink-0">
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>

        <div>
          <div className="font-medium">{item.title}</div>
          <div className="text-sm text-muted-foreground">{item.author}</div>

          <div className="flex gap-2 mt-2 flex-wrap">
            {item.tags?.map((tag: string, i: number) => (
              <span key={i} className="text-xs px-2 py-0.5 border rounded-full text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-12">

        <Link href="/" className="text-sm text-muted-foreground">← Back</Link>

        <h1 className="text-4xl font-light">Media</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((b, i) => <Card key={i} item={b} />)}
        </div>

      </div>
    </div>
  )
}