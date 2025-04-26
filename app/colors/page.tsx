import React from 'react';

const themeColors = [
  { name: 'base-100', bg: 'bg-base-100', text: 'text-neutral-content' },
  { name: 'primary', bg: 'bg-primary', text: 'text-primary-content' },
  { name: 'secondary', bg: 'bg-secondary', text: 'text-secondary-content' },
  { name: 'accent', bg: 'bg-accent', text: 'text-accent-content' },
  { name: 'warning', bg: 'bg-warning', text: 'text-warning-content' },
];

export default function ColorsPage() {
  return (
    <div className="min-h-screen bg-base-100 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {themeColors.map((color) => (
        <div
          key={color.name}
          className={`flex flex-col items-center justify-center rounded-xl shadow-md h-32 font-bold text-center ${color.bg} ${color.text}`}
        >
          <span className="text-lg">{color.name}</span>
        </div>
      ))}
      <button className="btn btn-primary">Primary Button</button>
      <button className="btn btn-secondary">Secondary Button</button>
      <button className="btn btn-accent">Accent Button</button>
      <button className="btn btn-warning">Warning Button</button>
    </div>
  );
}
