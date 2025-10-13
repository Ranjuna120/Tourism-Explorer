import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

const imgs = [
  { src: '/images/beach.png', caption: 'Sigiriya Rock' },
  { src: '/images/image2.png', caption: 'Ella Gap' },
  { src: '/images/image3.png', caption: 'Galle Fort' },
  { src: '/images/beach.png', caption: 'Sigiriya Rock' },
  { src: '/images/image2.png', caption: 'Ella Gap' },
  { src: '/images/image3.png', caption: 'Galle Fort' }
]

export default function Gallery(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {imgs.map((img,i)=> (
            <div key={i} className="bg-white rounded-lg shadow flex flex-col items-center">
              <div className="w-[350px] h-[420px] relative rounded-lg overflow-hidden">
                <Image src={img.src} alt={img.caption} fill className="object-cover rounded-lg" />
                <div className="absolute bottom-0 left-0 w-full bg-white/80 text-gray-800 font-semibold py-2 text-center text-lg">{img.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
