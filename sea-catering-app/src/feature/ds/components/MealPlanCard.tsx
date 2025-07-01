import { Button } from './Button';

interface MealPlanCardProps {
  plan: {
    name: string;
    price: string;
    description: string;
    image: string;
  };
  onShowDetails: () => void;
}

export const MealPlanCard = ({ plan, onShowDetails }: MealPlanCardProps) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden w-full max-w-sm bg-white">
      <img src={plan.image} alt={plan.name} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary-800">{plan.name}</h3>
        <p className="text-xl font-semibold text-gray-700 mt-1">{plan.price}/porsi</p>
        <p className="text-gray-600 mt-4">{plan.description}</p>
        <Button onClick={onShowDetails} className="mt-6 w-full">
          Lihat Detail
        </Button>
      </div>
    </div>
  );
};