import React, { useState } from 'react';

const ContactSection = ({ id = 'contact' }) => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      setStatus({ type: 'error', message: 'Please add your name and phone.' });
      return;
    }
    setStatus({ type: 'success', message: 'Thanks! We will call you shortly.' });
  };

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section id={id} className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-green-600 font-semibold uppercase mb-2">Visit or call</p>
          <h2 className="text-4xl font-extrabold mb-4">Book a table or place an order</h2>
          <p className="text-gray-600 mb-6">
            We’re open Tuesday – Saturday: 12:00pm – 11:00pm. Closed on Sunday. Call us or drop a message and the team will confirm availability.
          </p>
          <div className="space-y-3">
            <a className="block text-lg font-semibold text-[#e53945]" href="tel:+911234567890">+91 12345 67890</a>
            <a className="block text-gray-700 underline" href="https://maps.google.com?q=Hungry+Monk" target="_blank" rel="noreferrer">View on Google Maps</a>
            <p className="text-gray-700">123 Food Street, Nagpur</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl p-8 space-y-4">
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e53945]"
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Phone</label>
            <input
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e53945]"
              value={form.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              placeholder="Phone number"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Message</label>
            <textarea
              className="w-full mt-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e53945]"
              value={form.message}
              onChange={(e) => updateField('message', e.target.value)}
              rows={3}
              placeholder="Reservation time, order notes, etc."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Send request
          </button>
          {status?.message && (
            <p className={`text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

