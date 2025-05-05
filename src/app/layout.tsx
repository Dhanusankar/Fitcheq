import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import { Toaster } from "react-hot-toast";

const geist = Geist({
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Fitcheq Fitness & Nutrition Tracker",
  description: "Personalized fitness and nutrition tracking for adults aged 18-70 focusing on muscle gain, fat loss, and cardiovascular health",
  keywords: "fitness, nutrition, health, workout, exercise, diet, tracking, muscle gain, fat loss, cardiovascular",
  authors: [{ name: "Fitness Tracker Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased min-h-screen bg-gray-50`}>
        <AuthProvider>{children}</AuthProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
