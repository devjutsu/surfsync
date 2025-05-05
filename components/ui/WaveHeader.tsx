// export default function WaveHeader() {
//   return (
//     <header className="relative w-full">
//       <div className="bg-[#0A3B59] text-white text-center relative z-10 opacity-50">
//         <h1 className="text-3xl font-bold">SurfSync 🌊</h1>
//         <p className="text-white/70 text-sm">
//           Track your surf sessions with style
//         </p>
//       </div>

//       <div className="absolute w-full leading-none z-0 opacity-50">
//         <svg
//           className="w-full h-10 rotate-180"
//           viewBox="0 0 1440 320"
//           preserveAspectRatio="none"
//         >
//           <path
//             fill="#0A3B59"
//             d="M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"
//           >
//             <animate
//               attributeName="d"
//               dur="6s"
//               repeatCount="indefinite"
//               values="
//                 M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z;
//                 M0,140 C400,180 1040,220 1440,120 L1440,320 L0,320 Z;
//                 M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z
//               "
//             />
//           </path>
//         </svg>
//       </div>
//     </header>
//   );
// }

'use client';

import './WaveHeader.css';

export default function WaveHeader() {
  return (
    <header className="relative z-10 bg-[#0A3B59] text-white">
      {/* Контент хедера */}
      <div className="mx-auto px-4 py-6 max-w-4xl text-center">
        <h1 className="text-3xl font-bold">SurfSync 🌊</h1>
        <p className="text-sm text-white/70">Track your surf sessions with style</p>
      </div>

      {/* Волна через псевдоэлемент + clip-path */}
      <div className="wave-border"></div>
    </header>
  );
}
