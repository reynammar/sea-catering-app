import { TestimonialForm } from "@/feature/ds/components/TestimonialForm";
import { TestimonialSlider } from "@/feature/ds/components/TestimonialSlider";

const testimonials = [
  {
    id: 1,
    name: "Andi Saputra",
    review:
      "Makanannya enak-enak dan selalu fresh! Program diet jadi nggak membosankan sama sekali.",
    rating: 5,
  },
  {
    id: 2,
    name: "Citra Kirana",
    review:
      "Pilihan menunya sangat variatif, jadi nggak bosan. Kualitas bahannya premium.",
    rating: 5,
  },
  {
    id: 3,
    name: "Budi Santoso",
    review:
      "Paket proteinnya benar-benar ngebantu progress gym saya. Porsinya pas dan rasanya juara.",
    rating: 4,
  },
  {
    id: 4,
    name: "Dewi Lestari",
    review:
      "Sangat praktis untuk yang sibuk tapi tetap mau makan sehat. Worth every penny!",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <main className="font-sans">
      <section className="p-20 bg-primary-100">
        <h1 className="text-5xl font-bold text-primary-900">SEA Catering</h1>
        <p className="mt-4 text-xl text-primary-800 font-semibold">
          “Healthy Meals, Anytime, Anywhere”
        </p>
        <p className="mt-6 max-w-2xl text-primary-700">
          Selamat datang di SEA Catering! Kami adalah layanan katering sehat
          yang bisa dikustomisasi dengan pengiriman ke seluruh Indonesia.
        </p>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Layanan Unggulan Kami
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="w-full md:w-1/4 p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Kustomisasi Makanan</h3>
              <p>Pilih menu sesuai selera dan kebutuhan gizimu.</p>
            </div>
            <div className="w-full md:w-1/4 p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Pengiriman Luas</h3>
              <p>Kami menjangkau pengiriman hingga ke kota-kota besar.</p>
            </div>
            <div className="w-full md:w-1/4 p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Info Nutrisi Detail</h3>
              <p>Ketahui kandungan gizi dari setiap makanan yang kamu pesan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-100">
        <div className="container mx-auto px-6">
          <TestimonialSlider testimonials={testimonials} />

          <div className="mt-12">
            <TestimonialForm />
          </div>
        </div>
      </section>

      <footer className="text-center py-10 bg-gray-800 text-white">
        <h3 className="text-xl font-bold">Hubungi Kami</h3>
        <div className="mt-2">
          <p>Manager: Brian</p>
          <p>Phone: 08123456789</p>
        </div>
      </footer>
    </main>
  );
}
