import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export default function SectionHeader({ number, title, subtitle, className = "", light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-16 md:mb-24 relative ${className}`}>
      {/* Decorative large number */}
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: light ? 0.1 : 0.05, x: 0 }}
        viewport={{ once: true }}
        className={`absolute -top-16 -left-4 md:-left-8 text-[8rem] md:text-[10rem] font-black leading-none pointer-events-none select-none ${light ? 'text-white' : 'text-primary-900'}`}
      >
        {number}
      </motion.span>

      <div className="relative z-10 pl-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`flex items-center gap-3 mb-3 ${light ? 'text-primary-300' : 'text-primary-600'}`}
        >
          <span className="h-px w-8 bg-current"></span>
          <span className="text-sm font-bold tracking-widest uppercase">Part {number}</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-3xl md:text-5xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-secondary-900'}`}
        >
          {title}
        </motion.h2>
        
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg max-w-2xl ${light ? 'text-secondary-300' : 'text-secondary-500'}`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
