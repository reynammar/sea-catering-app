import { AuthForm } from "@/feature/ds/components/AuthForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 flex items-center">
      <AuthForm isRegister />
    </main>
  );
}