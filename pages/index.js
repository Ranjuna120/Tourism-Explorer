import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DestinationCard from '../components/DestinationCard'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const featured = [
  {title:'Sigiriya Rock', location:'Central Province', description:'Ancient rock fortress', image:'/images/beach.png'},
  {title:'Ella Gap', location:'Uva Province', description:'Scenic mountain views', image:'/images/image2.png'},
  {title:'Galle Fort', location:'Southern Province', description:'Historic coastal fort', image:'/images/image3.png'}
]

export default function Home(){
  const imgs = [
    '/images/beach.png',
    '/images/image2.png',
    '/images/image3.png'
  ];
  const [bgIdx, setBgIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIdx(idx => (idx + 1) % imgs.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section
          id="hero"
          className="h-screen flex items-center relative"
          style={{
            backgroundImage: `url('${imgs[bgIdx]}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'background-image 0.8s ease'
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative w-full max-w-6xl mx-auto px-4 text-center text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold">Explore Sri Lanka's beauty</h1>
            <h2 className="mt-2 text-xl md:text-2xl">Guided tours & adventures</h2>
            <p className="mt-4 max-w-2xl mx-auto">Experience the wonder of Sri Lanka with our premium transport services. From airport transfers to guided tours, we make your journey unforgettable.</p>
            <div className="mt-6 flex justify-center gap-4">
              <a href="/Destinations" className="btn-primary">Explore Destinations</a>
              <a href="/contact" className="btn-primary">Contact Us</a>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded shadow text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="mt-2 text-sm">Available Service</div>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <div className="text-3xl font-bold">5+ Years</div>
              <div className="mt-2 text-sm">Experience</div>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <div className="text-3xl font-bold">Island Wide</div>
              <div className="mt-2 text-sm">Coverage</div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-8">
          <h3 className="text-2xl font-bold mb-4">Featured Destinations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((d,i)=> (
              <DestinationCard key={i} {...d} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


