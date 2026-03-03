import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const milestones = [
  {
    date: "Q1 2024",
    title: "Project Initiation",
    description: "Strategic partnership formed between Huachuang Yunxin and Guilv Shuwang.",
    status: "completed"
  },
  {
    date: "Q2 2024",
    title: "Core Development",
    description: "Building the AI engine and integrating with initial hotel datasets.",
    status: "completed"
  },
  {
    date: "Q3 2024",
    title: "Beta Testing",
    description: "Pilot program launch in select hotels to gather real-world feedback.",
    status: "current"
  },
  {
    date: "Q4 2024",
    title: "Full Launch",
    description: "Official rollout to the broader market with enhanced features.",
    status: "upcoming"
  }
];

export default function Milestones() {
  return (
    <section id="milestones" className="py-24 bg-white relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-primary-50 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 sm:text-4xl">
            Project Roadmap
          </h2>
          <p className="mt-4 text-lg text-secondary-500">
            Tracking our journey from concept to realization.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-secondary-200 hidden md:block"></div>

          <div className="space-y-12 relative">
            {milestones.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-5/12"></div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary-500 z-10 hidden md:flex items-center justify-center">
                  {item.status === 'completed' && <div className="w-3 h-3 bg-primary-500 rounded-full"></div>}
                  {item.status === 'current' && <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>}
                </div>

                <div className="w-full md:w-5/12 bg-white p-6 rounded-xl border border-secondary-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-primary-600 font-bold text-sm tracking-wider uppercase">{item.date}</span>
                    {item.status === 'completed' ? (
                      <span className="flex items-center text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded-full">
                        <CheckCircle2 size={12} className="mr-1" /> Completed
                      </span>
                    ) : item.status === 'current' ? (
                      <span className="text-primary-600 text-xs font-medium bg-primary-50 px-2 py-1 rounded-full">
                        In Progress
                      </span>
                    ) : (
                      <span className="text-secondary-400 text-xs font-medium bg-secondary-50 px-2 py-1 rounded-full">
                        Upcoming
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">{item.title}</h3>
                  <p className="text-secondary-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
