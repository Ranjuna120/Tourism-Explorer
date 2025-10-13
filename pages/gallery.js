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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {imgs.map((img,i)=> (
            <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <div className="w-[400px] h-96 relative rounded overflow-hidden mb-2">
                <Image src={img.src} alt={img.caption} fill className="object-cover rounded" />
              </div>
              <div className="font-semibold text-gray-700">{img.caption}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
