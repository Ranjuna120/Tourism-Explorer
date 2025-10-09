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
          <div className="relative w-full max-w-6xl mx-auto px-4 text-center text-white flex flex-col items-center" style={{paddingTop: '4vh'}}>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-2" style={{marginTop: -200}}>Explore Sri Lanka's beauty</h1>
            <h2 className="text-xl md:text-2xl mb-2">Guided tours & adventures</h2>
            <p className="max-w-2xl mx-auto mb-4">Experience the wonder of Sri Lanka with our premium transport services. From airport transfers to guided tours, we make your journey unforgettable.</p>
            <div className="mt-8 flex justify-center gap-4">
              <a href="/Destinations" className="btn-primary py-3 px-6 text-lg font-semibold rounded-full shadow-lg bg-white text-blue-700 hover:bg-blue-100 transition">Explore Destinations</a>
              <a href="/contact" className="btn-primary py-3 px-6 text-lg font-semibold rounded-full shadow-lg bg-blue-700 text-white hover:bg-blue-800 transition">Contact Us</a>
            </div>
          </div>
        </section>

        {/* Frosted glass cards overlay on hero image */}
        <div className="absolute left-1/2 bottom-12 transform -translate-x-1/2 z-20 w-full max-w-3xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="backdrop-blur bg-white/30 border border-white/40 p-6 rounded-xl shadow-lg text-center text-white">
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
                <div className="text-2xl font-bold">24/7</div>
                <div className="mt-1 text-sm">Available Service</div>
              </div>
            </div>
            <div className="backdrop-blur bg-white/30 border border-white/40 p-6 rounded-xl shadow-lg text-center text-white">
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" /></svg>
                <div className="text-2xl font-bold">5+ Years</div>
                <div className="mt-1 text-sm">Experience</div>
              </div>
            </div>
            <div className="backdrop-blur bg-white/30 border border-white/40 p-6 rounded-xl shadow-lg text-center text-white">
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20z" /></svg>
                <div className="text-2xl font-bold">Island Wide</div>
                <div className="mt-1 text-sm">Coverage</div>
              </div>
            </div>
          </div>
        </div>

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


