import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'

export default function Contact(){
  useEffect(()=>{
    const form = document.getElementById('contact-form')
    if(!form) return
    form.addEventListener('submit', (e)=>{
      e.preventDefault()
      const name = form.elements['name'].value.trim()
      const email = form.elements['email'].value.trim()
      const msg = form.elements['message'].value.trim()
      let err = ''
      if(!name) err = 'Name is required'
      else if(!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) err = 'Valid email required'
      else if(!msg) err = 'Message required'
      const el = document.getElementById('form-msg')
      if(err){ el.textContent = err; el.classList.remove('text-green-600'); el.classList.add('text-red-600'); return }
      el.textContent = 'Message sent (demo).'
      el.classList.remove('text-red-600'); el.classList.add('text-green-600')
      form.reset()
    })
  },[])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <form id="contact-form" className="space-y-4 bg-white p-6 rounded shadow">
          <div>
            <label className="block text-sm">Name</label>
            <input name="name" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input name="email" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Message</label>
            <textarea name="message" rows="5" className="w-full border px-3 py-2 rounded" />
          </div>
          <div id="form-msg" className="text-sm"></div>
          <div>
            <button type="submit" className="btn-primary">Send Message</button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  )
}
