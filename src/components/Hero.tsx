import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-48 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary-100/50 blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary-100/50 blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-8"
          >
            <Sparkles size={16} />
            <span>AI驱动的未来酒店</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-secondary-900 mb-6"
          >
            酒店 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">智能体</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-secondary-500 max-w-2xl mx-auto leading-relaxed"
          >
            <span className="font-semibold text-secondary-800">华创云信</span> 联合 <span className="font-semibold text-secondary-800">贵旅数网</span> 倾力打造
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex justify-center gap-4"
          >
            <button className="px-8 py-4 rounded-full bg-secondary-900 text-white font-semibold hover:bg-secondary-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2">
              立即体验 <ChevronRight size={20} />
            </button>
            <button className="px-8 py-4 rounded-full bg-white text-secondary-700 border border-secondary-200 font-semibold hover:bg-secondary-50 transition-all hover:-translate-y-1">
              了解更多
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
