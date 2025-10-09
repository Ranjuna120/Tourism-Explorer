import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-6 text-lg text-gray-700">Tourism Explorer is dedicated to making your journey through Sri Lanka unforgettable. With years of experience, we offer safe, comfortable, and reliable transport, as well as expertly guided tours to the island's most breathtaking destinations.</p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">To provide exceptional travel experiences that showcase the beauty, culture, and heritage of Sri Lanka, while ensuring customer satisfaction and safety.</p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Customer-first service</li>
            <li>Safety and reliability</li>
            <li>Local expertise</li>
            <li>Respect for nature and culture</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded shadow p-6 text-center">
              <img src="/images/beach.png" alt="Founder" className="mx-auto mb-2 rounded-full w-20 h-20 object-cover" />
              <div className="font-bold">Ranjuna Perera</div>
              <div className="text-sm text-gray-500">Founder & Lead Guide</div>
            </div>
            <div className="bg-white rounded shadow p-6 text-center">
              <img src="/images/image2.png" alt="Operations" className="mx-auto mb-2 rounded-full w-20 h-20 object-cover" />
              <div className="font-bold">Minicabs Tours</div>
              <div className="text-sm text-gray-500">Operations Manager</div>
            </div>
            <div className="bg-white rounded shadow p-6 text-center">
              <img src="/images/image3.png" alt="Support" className="mx-auto mb-2 rounded-full w-20 h-20 object-cover" />
              <div className="font-bold">Samanthi Silva</div>
              <div className="text-sm text-gray-500">Customer Support</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
