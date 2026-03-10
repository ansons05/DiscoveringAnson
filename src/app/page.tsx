import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import CategoryGrid from '@/components/CategoryGrid'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <CategoryGrid />
      <Footer />
    </main>
  )
}
