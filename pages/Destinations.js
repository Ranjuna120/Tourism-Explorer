import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DestinationCard from '../components/DestinationCard'

const places = [
  {title:'Nuwara Eliya', location:'Central', description:'Hill station with tea plantations', image:''},
  {title:'Yala National Park', location:'South East', description:'Wildlife and safaris', image:''},
  {title:'Mirissa Beach', location:'South', description:'Beaches and whale watching', image:''}
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
