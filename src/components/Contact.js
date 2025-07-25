import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
      .then(() => setStatus('Pesan terkirim!'))
      .catch(() => setStatus('Gagal mengirim pesan.'));
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-2xl font-semibold">Contact Me</h2>
      <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto space-y-4">
        <input name="name" placeholder="Nama" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="message" placeholder="Pesan" onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Kirim</button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </section>
  );
}