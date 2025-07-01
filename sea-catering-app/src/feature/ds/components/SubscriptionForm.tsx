"use client";

import { useState, useMemo } from "react";
import { Button } from "./Button";
import axios from "axios";

const planPrices: { [key: string]: number } = {
  "Diet Plan": 30000,
  "Protein Plan": 40000,
  "Royal Plan": 60000,
};

const mealTypeOptions = ["Breakfast", "Lunch", "Dinner"];
const deliveryDayOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const SubscriptionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    plan: "Diet Plan",
    mealTypes: ["Lunch"],
    deliveryDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    allergies: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const totalPrice = useMemo(() => {
    const planPrice = planPrices[formData.plan] || 0;
    const numMealTypes = formData.mealTypes.length;
    const numDeliveryDays = formData.deliveryDays.length;
    if (numMealTypes === 0 || numDeliveryDays === 0) return 0;
    return planPrice * numMealTypes * numDeliveryDays * 4.3;
  }, [formData.plan, formData.mealTypes, formData.deliveryDays]);

  const handleCheckboxChange = (
    field: "mealTypes" | "deliveryDays",
    value: string
  ) => {
    const currentValues = formData[field];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];
    setFormData({ ...formData, [field]: newValues });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.mealTypes.length === 0 || formData.deliveryDays.length === 0) {
      alert("Pilih minimal satu tipe makanan dan hari pengiriman.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post("/api/subscribe", {
        ...formData,
        totalPrice,
      });
      alert(
        `Pendaftaran berhasil! Total Biaya: Rp ${totalPrice.toLocaleString(
          "id-ID"
        )}`
      );
      console.log("Data tersimpan:", response.data);
      setFormData({
        name: "",
        phone: "",
        plan: "Diet Plan",
        mealTypes: ["Lunch"],
        deliveryDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        allergies: "",
      });
    } catch (error) {
      alert("Terjadi kesalahan. Silakan coba lagi.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-primary-800">
        Formulir Langganan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Nama Lengkap*
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            No. Telepon Aktif*
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Pilih Paket*
        </label>
        <select
          value={formData.plan}
          onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
          className="w-full px-4 py-2 border rounded-md bg-white"
        >
          {Object.keys(planPrices).map((p) => (
            <option key={p} value={p}>
              {p} - Rp {planPrices[p].toLocaleString("id-ID")}/meal
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Tipe Makanan* (Pilih min. 1)
        </label>
        <div className="grid grid-cols-3 gap-2">
          {mealTypeOptions.map((type) => (
            <label
              key={type}
              className={`p-3 border rounded-md text-center cursor-pointer ${
                formData.mealTypes.includes(type)
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.mealTypes.includes(type)}
                onChange={() => handleCheckboxChange("mealTypes", type)}
                className="hidden"
              />
              {type}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Hari Pengiriman* (Pilih min. 1)
        </label>
        <div className="grid grid-cols-4 gap-2">
          {deliveryDayOptions.map((day) => (
            <label
              key={day}
              className={`p-2 border rounded-md text-center cursor-pointer text-sm ${
                formData.deliveryDays.includes(day)
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.deliveryDays.includes(day)}
                onChange={() => handleCheckboxChange("deliveryDays", day)}
                className="hidden"
              />
              {day.substring(0, 3)}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Alergi (Opsional)
        </label>
        <input
          type="text"
          value={formData.allergies}
          onChange={(e) =>
            setFormData({ ...formData, allergies: e.target.value })
          }
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Contoh: Udang, kacang"
        />
      </div>
      <div className="bg-primary-100 p-4 rounded-md text-center mb-6">
        <p className="text-lg text-primary-800">Estimasi Biaya Bulanan:</p>
        <p className="text-3xl font-bold text-primary-900">
          Rp {totalPrice.toLocaleString("id-ID")}
        </p>
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? "Mengirim..." : "Daftar Sekarang"}
      </Button>
    </form>
  );
};
