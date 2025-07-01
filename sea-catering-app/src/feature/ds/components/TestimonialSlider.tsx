'use client';

import { useState } from 'react';
import { TestimonialCard } from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  review: string;
  rating: number;
};

export const TestimonialSlider = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-primary-900 mb-8">Apa Kata Mereka?</h2>
      
      <div className="overflow-hidden relative">
        
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <div className="px-2"> 
                <TestimonialCard testimonial={testimonial} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={prevTestimonial}
          className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
          aria-label="Previous Testimonial"
        >
          <ChevronLeft className="text-primary-700" />
        </button>
        <div className="text-sm font-semibold text-gray-600">
          {currentIndex + 1} / {testimonials.length}
        </div>
        <button
          onClick={nextTestimonial}
          className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
          aria-label="Next Testimonial"
        >
          <ChevronRight className="text-primary-700" />
        </button>
      </div>
    </div>
  );
};