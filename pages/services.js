import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <svg className="w-12 h-12 text-blue-500 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 17.25V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 17.25z" /></svg>
            <h2 className="font-semibold text-lg mb-2">Airport Transfers</h2>
            <p className="text-gray-600">Safe and reliable transport to and from all major airports in Sri Lanka. Enjoy punctual service and comfortable vehicles for a stress-free journey.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <svg className="w-12 h-12 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
            <h2 className="font-semibold text-lg mb-2">Guided Tours</h2>
            <p className="text-gray-600">Explore Sri Lanka’s top attractions with expert guides. Discover history, culture, and natural beauty on personalized tours tailored to your interests.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <svg className="w-12 h-12 text-yellow-500 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 19.5l-15-15" /></svg>
            <h2 className="font-semibold text-lg mb-2">Daily Rentals</h2>
            <p className="text-gray-600">Flexible daily vehicle rentals for business, leisure, or group travel. Choose from a range of vehicles to suit your needs and enjoy competitive rates.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
