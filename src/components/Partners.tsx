import React from 'react';

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-medium text-secondary-300 mb-12">
          Jointly Developed By Industry Leaders
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          <div className="flex flex-col items-center">
            {/* Placeholder for Logo */}
            <div className="text-3xl font-bold tracking-tight mb-2">Huachuang Yunxin</div>
            <div className="text-secondary-400 text-sm">华创云信</div>
          </div>
          
          <div className="hidden md:block w-px h-16 bg-secondary-700"></div>
          
          <div className="flex flex-col items-center">
             {/* Placeholder for Logo */}
            <div className="text-3xl font-bold tracking-tight mb-2">Guilv Shuwang</div>
            <div className="text-secondary-400 text-sm">贵旅数网</div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-secondary-400 text-center leading-relaxed">
          Combining Huachuang Yunxin's financial technology expertise with Guilv Shuwang's deep industry knowledge to create the definitive AI solution for modern hospitality.
        </div>
      </div>
    </section>
  );
}
