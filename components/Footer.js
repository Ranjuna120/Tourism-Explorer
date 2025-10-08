export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <div className="font-bold">Tourism Explorer</div>
        <div className="text-sm mt-2">© {new Date().getFullYear()} Tourism Explorer. All rights reserved.</div>
      </div>
    </footer>
  )
}
