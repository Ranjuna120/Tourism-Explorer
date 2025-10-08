import Link from 'next/link'

export default function Navbar(){
  return (
    <nav className="bg-blue-700 text-yellow-400">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">Tourism Explorer</div>
        <div className="space-x-4 hidden md:block">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/Destinations" className="hover:underline">Destinations</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/gallery" className="hover:underline">Gallery</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
