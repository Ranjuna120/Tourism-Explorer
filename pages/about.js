import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p>We provide premium transport and guided tours across Sri Lanka.</p>
      </main>
      <Footer />
    </div>
  )
}
