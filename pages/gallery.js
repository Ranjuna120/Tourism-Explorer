import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

const imgs = [
  '',
  '',
  ''
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
