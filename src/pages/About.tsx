import React from 'react';
import { Award, Shield, Heart, Droplets } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-[#9ACD32] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">About H2O</h1>
            <p className="mt-4 text-xl text-white">Leading the way in water purification since 2010</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We're committed to providing pure, safe water solutions while protecting our environment
              and promoting sustainable practices.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#9ACD32] text-white mx-auto">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Quality First</h3>
                <p className="mt-2 text-base text-gray-500">
                  Committed to delivering the highest quality water solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#9ACD32] text-white mx-auto">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Safety Assured</h3>
                <p className="mt-2 text-base text-gray-500">
                  Rigorous testing and certification for all products.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#9ACD32] text-white mx-auto">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Customer Care</h3>
                <p className="mt-2 text-base text-gray-500">
                  Dedicated support for all your water needs.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#9ACD32] text-white mx-auto">
                  <Droplets className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Eco-Friendly</h3>
                <p className="mt-2 text-base text-gray-500">
                  Sustainable solutions for a better tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-500">
              Founded in 2010, H2O began with a simple mission: to provide clean, safe water solutions
              for everyone. What started as a small family business has grown into a leading provider
              of water purification systems and innovative water products.
            </p>
            
            <p className="text-gray-500 mt-4">
              Over the years, we've expanded our product line to include everything from simple water
              bottles to advanced whole-house filtration systems. Our commitment to quality and
              customer satisfaction has never wavered, and we continue to innovate and improve our
              offerings.
            </p>

            <p className="text-gray-500 mt-4">
              Today, we're proud to serve customers worldwide, helping them achieve better health
              and wellness through pure, clean water. Our team of experts continues to research and
              develop new solutions, ensuring we stay at the forefront of water purification
              technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}