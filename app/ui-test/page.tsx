import React from 'react';

export default function UITestPage() {
  return (
    <div className="min-h-screen bg-base-100 p-8 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-bold text-primary">Surftrack UI Test</h1>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-error">Error</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 w-full max-w-4xl">
        <div className="rounded-xl bg-primary text-primary-content p-6 text-center font-bold">Primary</div>
        <div className="rounded-xl bg-secondary text-secondary-content p-6 text-center font-bold">Secondary</div>
        <div className="rounded-xl bg-accent text-accent-content p-6 text-center font-bold">Accent</div>
        <div className="rounded-xl bg-warning text-warning-content p-6 text-center font-bold">Warning</div>
        <div className="rounded-xl bg-info text-base-100 p-6 text-center font-bold">Info</div>
        <div className="rounded-xl bg-success text-base-100 p-6 text-center font-bold">Success</div>
        <div className="rounded-xl bg-error text-error-content p-6 text-center font-bold">Error</div>
      </div>
    </div>
  );
}