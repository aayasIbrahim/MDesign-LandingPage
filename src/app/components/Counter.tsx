// src/components/StatsSection.tsx
import React from 'react';

const StatsSection: React.FC = () => {
  // Static data for stats
  const STATS_DATA = [
    { id: 1, value: '8+', label: 'satisfied clients' },
    { id: 2, value: '200+', label: 'Projects completed' },
    { id: 3, value: '99+', label: 'Reviews given' },
  ];

  return (
    <section className="bg-white py-10 md:py-16 mt-[100px]">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row  justify-evenly divide-y-2 md:divide-y-0 md:divide-x-2 divide-green-400">
        {STATS_DATA.map((stat) => (
          <div key={stat.id} className="text-center px-8 lg:px-12 py-4">
            <h3 className="font-poppins font-semibold text-[48px] leading-[48px] align-middle text-green-600">
              {stat.value}
            </h3>
            <p className="font-poppins font-normal text-[28px] leading-[28px] tracking-normal align-middle mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
