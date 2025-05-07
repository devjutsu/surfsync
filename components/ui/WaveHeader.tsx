'use client';

import Link from 'next/link';
import './WaveHeader.css';

export default function WaveHeader() {
  return (
    <header className="fixed top-0 w-full bg-[#0A3B59] text-white shadow-md z-50">
      <Link className="justify-center mx-auto px-4 max-w-4xl text-center" href="/" key="home">
        <h1 className="text-2xl font-bold  ">Surf 🌊 Sync </h1>
        <p className="text-xs text-white/70 font-[family-name:var(--font-geist-mono)]=">
          Track your board with no limits
        </p>
      </Link>

      <div className="wave-svg"></div>
      <div className="wave-bottom"></div>
      <div className="wave-glow-bottom"></div>
      <div className="wave-glow" />
    </header>
  );
}
