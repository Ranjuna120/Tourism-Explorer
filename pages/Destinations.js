import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DestinationCard from '../components/DestinationCard'

const places = [
  {title:'Nuwara Eliya', location:'Central', description:'Hill station with tea plantations', image:'https://images.unsplash.com/photo-1505765051273-6d6d4b5b1a3f?auto=format&fit=crop&w=1200&q=80'},
  {title:'Yala National Park', location:'South East', description:'Wildlife and safaris', image:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80'},
  {title:'Mirissa Beach', location:'South', description:'Beaches and whale watching', image:'https://images.unsplash.com/photo-1549887534-0a7ba9b6b7f3?auto=format&fit=crop&w=1200&q=80'}
]

export default function Destinations(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Destinations</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {places.map((p,i)=> <DestinationCard key={i} {...p} />)}
        </div>
      </main>
      <Footer />
    </div>
  )
}
