"use client";

import { useEffect, useState } from "react";
import SplashScreen from "../../components/Fist";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <p className="text-2xl font-bold text-gray-800">Welcome to the App!</p>
    </main>
  );
}
