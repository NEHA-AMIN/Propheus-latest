'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CONTACT_INFO = [
  { icon: '📧', title: 'Email Us', details: 'hello@propheus.com', link: 'mailto:hello@propheus.com' },
  { icon: '📞', title: 'Call Us', details: '+1 (555) 123-4567', link: 'tel:+15551234567' },
  { icon: '📍', title: 'Visit Us', details: '123 Innovation Drive, San Francisco, CA 94105', link: 'https://maps.google.com' },
  { icon: '💬', title: 'Live Chat', details: 'Available Mon-Fri, 9AM-6PM PST', link: '#' }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen">
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 to-transparent" />
        <div className="relative z-10 container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight">Let's <span className="animated-teal-gradient">Connect</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed">Have questions? Want to see a demo? We're here to help you unlock the power of location intelligence.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTACT_INFO.map((info, index) => (
            <motion.a key={info.title} href={info.link} target={info.link?.startsWith('http') ? '_blank' : undefined} rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ scale: 1.05 }} className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 cursor-pointer">
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">{info.title}</h3>
              <p className="text-sm text-slate-400">{info.details}</p>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-100 mb-4">Send Us a Message</h2>
              <p className="text-lg text-slate-400">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" placeholder="john@company.com" />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-semibold text-slate-300 mb-2">Company</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" placeholder="Your Company Name" />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all resize-none" placeholder="Tell us about your needs..." />
              </div>

              <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }} className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${isSubmitting ? 'bg-slate-700 text-slate-400 cursor-not-allowed' : submitStatus === 'success' ? 'bg-green-500 text-white' : 'bg-teal-500 hover:bg-teal-600 text-white shadow-lg hover:shadow-teal-500/50'}`}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : submitStatus === 'success' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Our Location</h2>
            <p className="text-lg text-slate-400">Come visit us at our San Francisco headquarters</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden h-96">
            <div className="w-full h-full bg-gradient-to-br from-teal-900/20 to-slate-900/40 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-xl text-slate-300 font-semibold">123 Innovation Drive</p>
                <p className="text-lg text-slate-400">San Francisco, CA 94105</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
