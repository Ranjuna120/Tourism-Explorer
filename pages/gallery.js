import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

const imgs = [
  'https://images.unsplash.com/photo-1505765051273-6d6d4b5b1a3f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1549887534-0a7ba9b6b7f3?auto=format&fit=crop&w=1200&q=80'
]

export default function Gallery(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imgs.map((src,i)=> (
            <div key={i} className="w-full h-64 relative rounded overflow-hidden">
              <Image src={src} alt={`img-${i}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
