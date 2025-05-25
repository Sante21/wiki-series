'use client';

import Image from "next/image";
import { useEffect, useState } from 'react';
import Link from 'next/link';

const sliderImages = [
  { src: '/series/twd.jpg', title: 'The Walking Dead' },
  { src: '/series/breakingbad.jpg', title: 'Breaking Bad' },
  { src: '/series/prison-break.jpg', title: 'Prison Break' },
  { src: '/series/shameless.jpg', title: 'Shameless' },
  { src: '/series/theoffice.jpeg', title: 'The Office' },
  { src: '/series/rickymorty.jpg', title: 'Rick and Morty' },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* SLIDER */}
      <div className="relative w-full h-[550px] overflow-hidden">
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h2 className="text-4xl font-bold drop-shadow-lg">{img.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* DESCRIPCIÓN */}
      <section className="py-14 px-8 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-amber-400">Welcome to WikiSeries</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore a collection of your favorite series. Each series includes relevant information such as its synopsis, image, and a complete character list.
          You can view each character with their image and description, and contribute by creating new ones.
        </p>
        <p className="mt-6 text-gray-400">
          Start browsing the series and discover who's part of each universe.
        </p>

        <Link href="/series" className="inline-block mt-10 px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition">
          See all series
        </Link>
      </section>
    </div>
  );
}
