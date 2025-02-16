import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-[#9ACD32] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
            <p className="mt-4 text-xl text-white">We're here to help and answer any questions</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9ACD32] focus:ring-[#9ACD32] sm:text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9ACD32] focus:ring-[#9ACD32] sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9ACD32] focus:ring-[#9ACD32] sm:text-sm"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#9ACD32] focus:ring-[#9ACD32] sm:text-sm"
                  placeholder="Your message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#9ACD32] hover:bg-[#8BB82D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9ACD32]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#9ACD32]" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 font-medium">Address</p>
                    <p className="text-gray-500">
                      123 Water Street<br />
                      Pure City, PC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#9ACD32]" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 font-medium">Phone</p>
                    <p className="text-gray-500">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#9ACD32]" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 font-medium">Email</p>
                    <p className="text-gray-500">info@h2o.com </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#9ACD32]" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 font-medium">Business Hours</p>
                    <p className="text-gray-500">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.935242!3d40.730610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjIiTiA3M8KwNTYnMDYuOSJX!5e0!3m2!1sen!2sus!4v1620841112374!5m2!1sen!2sus"
                  className="w-full h-64 rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}