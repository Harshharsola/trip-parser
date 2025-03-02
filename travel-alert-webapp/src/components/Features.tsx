import React from 'react';

const features = [
  {
    title: 'Smart Email Integration',
    description: 'Automatically extract travel details from your booking confirmations with secure Gmail integration.',
    icon: '✉️',
  },
  {
    title: 'Travel Alerts',
    description: 'Set up alerts for specific destinations and date ranges to find overlapping travel plans.',
    icon: '🔔',
  },
  {
    title: 'Privacy First',
    description: 'Your data privacy is our priority. Control exactly what you share and with whom.',
    icon: '🔒',
  },
  {
    title: 'Smart Connections',
    description: 'Connect with friends and colleagues to share travel plans seamlessly.',
    icon: '🤝',
  },
];

export const Features = () => {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything you need to connect while traveling
          </h2>
          <p className="mt-6 text-xl text-slate-700 max-w-3xl mx-auto">
            Simple, secure, and smart travel coordination for modern travelers.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="pt-6">
                <div className="flow-root rounded-xl bg-white px-6 pb-8 h-full shadow-sm hover:shadow-md transition-shadow">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center rounded-xl bg-primary p-4 shadow-lg">
                      <span className="text-3xl" role="img" aria-label={feature.title}>
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-slate-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 