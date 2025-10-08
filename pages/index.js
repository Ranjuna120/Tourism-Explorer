import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DestinationCard from '../components/DestinationCard'
import Image from 'next/image'
import { useEffect } from 'react'

const featured = [
  {title:'Sigiriya Rock', location:'Central Province', description:'Ancient rock fortress', image:'/images/beach.png'},
  {title:'Ella Gap', location:'Uva Province', description:'Scenic mountain views', image:'/images/image2.png'},
  {title:'Galle Fort', location:'Southern Province', description:'Historic coastal fort', image:'/images/image3.png'}
]

export default function Home(){
  useEffect(() => {
    // simple slider: rotate background images
    const imgs = [
      '/images/beach.jpg',
      '/images/image2.jpg',
      '/images/image3.jpg'
    ];
    let i = 0;
    const el = document.getElementById('hero');
    if (!el) return;
    // Preload images for smoother transitions
    imgs.forEach(src => {
      const img = new window.Image();
      img.src = src;
    });
    el.style.backgroundImage = '';
    // Remove slider interval
    return undefined;
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section id="hero" className="h-[60vh] md:h-[70vh] bg-cover bg-center relative flex items-center">
          <div className="bg-black/30 absolute inset-0"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
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


