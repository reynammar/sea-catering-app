'use client';

import { useState } from 'react';
import { MealPlanCard } from '@/feature/ds/components/MealPlanCard';
import { Modal } from '@/feature/ds/components/Modal';
import { Button } from '@/feature/ds/components/Button';

type Plan = {
    id: number;
    name: string;
    price: string;
    description: string;
    details: string;
    image: string;
};

const mealPlans: Plan[] = [
  {
    id: 1,
    name: 'Diet Plan',
    price: 'Rp 30.000',
    description: 'Paket rendah kalori untuk kamu yang ingin menjaga berat badan ideal.',
    details: 'Setiap porsi mengandung sekitar 300-400 kalori, dengan gizi seimbang dari karbohidrat kompleks, protein tanpa lemak, dan sayuran segar.',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Protein Plan',
    price: 'Rp 40.000',
    description: 'Tingkatkan massa ototmu dengan paket tinggi protein kami.',
    details: 'Didesain untuk para pegiat gym, setiap porsi mengandung 30-40g protein. Termasuk dada ayam, ikan salmon, telur, dan sumber protein nabati.',
    image: 'https://i.pinimg.com/736x/8e/4c/27/8e4c274713e0573d2a33c106758f7035.jpg',
  },
  {
    id: 3,
    name: 'Royal Plan',
    price: 'Rp 60.000',
    description: 'Nikmati hidangan premium dengan bahan-bahan organik pilihan.',
    details: 'Menu mewah yang bervariasi setiap hari, menggunakan bahan organik terbaik seperti wagyu, salmon norwegia, dan sayuran hidroponik.',
    image: 'https://images.services.kitchenstories.io/u5E0Dw41g2S41t22w3v5zS2v52w=/1080x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/R2568-photo-final-2.jpg',
  },
];

export default function MenuPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleShowDetails = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Pilihan Paket Makanan</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {mealPlans.map((plan) => (
          <MealPlanCard key={plan.id} plan={plan} onShowDetails={() => handleShowDetails(plan)} />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedPlan && (
          <div>
            <img src={selectedPlan.image} alt={selectedPlan.name} className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-3xl font-bold text-primary-800">{selectedPlan.name}</h2>
              <p className="text-2xl font-semibold text-gray-700 mt-2">{selectedPlan.price}/porsi</p>
              <p className="text-gray-600 mt-4 text-lg">{selectedPlan.details}</p>
              <Button onClick={handleCloseModal} className="mt-6 w-full" variant="secondary">
                Tutup
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
}