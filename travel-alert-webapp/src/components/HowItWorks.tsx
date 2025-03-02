import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Connect your email',
    description: 'Securely connect your Gmail account to automatically detect travel plans from your booking confirmations.',
  },
  {
    number: '02',
    title: 'Add connections',
    description: 'Connect with friends and colleagues who you\'d like to meet while traveling.',
  },
  {
    number: '03',
    title: 'Set up alerts',
    description: 'Create alerts for specific destinations and dates you\'re interested in.',
  },
  {
    number: '04',
    title: 'Get notified',
    description: 'Receive notifications when your connections\' travel plans overlap with yours.',
  },
];

export const HowItWorks = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            How Travel Alert Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Four simple steps to never miss a travel connection
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <span className="text-lg font-semibold">{step.number}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-800">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-center text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 