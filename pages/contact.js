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
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-8 flex flex-col gap-6">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded">
              <span className="bg-blue-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.25 11.25 8.25 11.25 0M12 15.75v2.25m0 0h-3m3 0h3" /></svg>
              </span>
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-gray-600">+94 76 397 8918</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded">
              <span className="bg-blue-100 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 7.5v9.75a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V7.5m19.5 0A2.25 2.25 0 0019.5 5.25H4.5A2.25 2.25 0 002.25 7.5m19.5 0v.75a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 8.25v-.75" /></svg>
              </span>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-gray-600">minicabs.tours@gmail.com</div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <div className="font-semibold flex items-center gap-2 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
                Business Hours
              </div>
              <div className="text-gray-700">Monday - Friday <span className="float-right">8:00 AM - 10:00 PM</span></div>
              <div className="text-gray-700">Saturday - Sunday <span className="float-right">9:00 AM - 9:00 PM</span></div>
              <div className="text-xs text-gray-500 mt-1">Emergency services available 24/7</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form className="flex flex-col gap-4" onSubmit={e => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const service = e.target.service.value;
              const message = e.target.message.value;
              const whatsappMsg = `Name: ${name}%0AEmail: ${email}%0AService: ${service}%0AMessage: ${message}`;
              window.open(`https://wa.me/94763978918?text=${whatsappMsg}`);
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Full Name *</label>
                  <input type="text" name="name" required className="w-full border rounded px-3 py-2" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email Address *</label>
                  <input type="email" name="email" required className="w-full border rounded px-3 py-2" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">Service Interested</label>
                <select name="service" className="w-full border rounded px-3 py-2">
                  <option value="">Select a service</option>
                  <option value="Airport Transfer">Airport Transfer</option>
                  <option value="Guided Tour">Guided Tour</option>
                  <option value="Group Travel">Group Travel</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium">Message *</label>
                <textarea name="message" required className="w-full border rounded px-3 py-2" rows={4} placeholder="Tell us about your travel plans, dates, group size, and any special requirements..." />
              </div>
              <button type="submit" className="bg-blue-200 text-blue-900 font-semibold py-2 rounded flex items-center justify-center gap-2 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2.25 2.25 0 002.22 0L21 8" /></svg>
                Send via WhatsApp
              </button>
              <div className="text-xs text-gray-500 mt-2">We'll open WhatsApp for you to complete sending your message.</div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
