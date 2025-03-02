import React from 'react';

export const Hero = () => {
  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-base font-semibold text-green-500">Introducing Travel Alert</span>
              <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                <span className="block text-slate-800">Connect with Fellow</span>
                <span className="block text-green-500">Travelers Seamlessly</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-slate-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Never miss a chance to meet friends while traveling. Our smart travel alerts notify you when your connections will be in the same city as you.
            </p>
            <div className="mt-8 sm:mt-12">
              <button className="rounded-md bg-green-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-600 transition-colors">
                Get Started
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            {/* Placeholder for hero image */}
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-slate-100 rounded-lg overflow-hidden h-64">
                {/* We can add an actual image here later */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  [Travel Illustration]
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 