import Image from 'next/image'

export default function DestinationCard({title, location, description, image, href}){
  const src = image || 'https://placehold.co/600x400?text=No+Image'

  return (
    <article className="bg-white border border-teal-500 shadow-lg rounded overflow-hidden">
      <div className="w-full h-48 relative">
        <Image src={src} alt={title || 'destination image'} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="mt-2 text-sm">{description}</p>
        <a href={href || '#'} className="inline-block mt-3 btn-primary">View</a>
      </div>
    </article>
  )
}
