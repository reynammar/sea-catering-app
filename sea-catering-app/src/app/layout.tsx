import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/feature/ds/components/Navbar";
import { Providers } from "./providers";

const nunito = Nunito({
  variable: "--font-Nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "SEA Catering",
  description: "Healthy Meals, Anytime, Anywhere",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {" "}
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
