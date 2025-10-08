import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Services</h1>
        <ul className="list-disc pl-6">
          <li>Airport Transfers</li>
          <li>Guided Tours</li>
          <li>Daily Rentals</li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
