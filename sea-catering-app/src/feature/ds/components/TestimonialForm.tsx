'use client';

import { useState } from 'react';
import { Button } from './Button';
import { Star } from 'lucide-react';

export const TestimonialForm = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, review, rating });
    alert('Terima kasih atas ulasan Anda!');
    setName('');
    setReview('');
    setRating(5);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center text-primary-800">Beri Ulasan Anda</h3>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nama Anda</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="review" className="block text-gray-700 font-semibold mb-2">Ulasan</label>
        <textarea
          id="review"
          rows={4}
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
          required
        ></textarea>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Rating</label>
        <div className="flex items-center" onMouseLeave={() => setHoverRating(0)}>
          {[...Array(5)].map((_, index) => {
            const currentRating = index + 1;
            return (
              <label key={currentRating}>
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={() => setRating(currentRating)}
                  className="hidden"
                />
                <Star
                  size={32}
                  className="cursor-pointer transition-colors"
                  onMouseEnter={() => setHoverRating(currentRating)}
                  fill={currentRating <= (hoverRating || rating) ? '#FFC107' : 'none'}
                  stroke={currentRating <= (hoverRating || rating) ? '#FFC107' : '#A9A9A9'}
                />
              </label>
            );
          })}
        </div>
      </div>
      <Button type="submit" className="w-full">Kirim Ulasan</Button>
    </form>
  );
};