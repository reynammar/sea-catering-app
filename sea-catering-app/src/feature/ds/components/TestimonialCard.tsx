import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    review: string;
    rating: number;
  };
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-secondary-500">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={18}
          fill={index < rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
};

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-primary-600 text-white p-6 rounded-lg shadow-lg min-w-[300px] flex-shrink-0">
      <div className="flex items-center mb-2">
        <h4 className="font-bold text-lg mr-2">{testimonial.name}</h4>
        <StarRating rating={testimonial.rating} />
      </div>
      <p className="italic">"{testimonial.review}"</p>
    </div>
  );
};