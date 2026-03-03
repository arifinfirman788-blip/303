import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Mountain, Utensils, User, Landmark, ArrowRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const agents = [
  { 
    id: "scenic",
    name: "景区智能体", 
    role: "Scenic Spot Agent", 
    icon: <Mountain size={24} />,
    desc: "提供智慧导览、景点讲解与路线规划，实时播报客流与天气，提升游客沉浸式游览体验。",
    link: "https://marsnowine-create.github.io/JQ-3.1/"
  },
  { 
    id: "dining",
    name: "餐饮智能体", 
    role: "Dining Agent", 
    icon: <Utensils size={24} />,
    desc: "基于口味偏好推荐地道美食，支持智能点餐与排队预约，打造舌尖上的个性化之旅。",
    link: "https://ai.studio/apps/73afbf67-117d-4c4e-9033-f1f73def18f2",
    snapshot: "/303/assets/dining-snapshot.png"
  },
  { 
    id: "personal",
    name: "个人智能体", 
    role: "Personal Agent", 
    icon: <User size={24} />,
    desc: "您的贴身AI管家，全天候响应个性化需求，从行程定制到生活服务，无微不至。",
    snapshot: "/303/assets/personal-agent.png"
  },
  { 
    id: "gov",
    name: "政府智能体", 
    role: "Government Agent", 
    icon: <Landmark size={24} />,
    desc: "对接监管数据，提供政策咨询与市场监测，助力旅游产业规范化、高质量发展。",
    link: "https://glsw-provincescreen-test.aihuangxiaoxi.com/admin/#/index",
    snapshot: "/303/assets/gov-agent.png",
    type: "pc" // Mark as PC layout
  }
];

export default function AgentMatrix() {
  const [activeAgentId, setActiveAgentId] = useState(agents[0].id);
  const activeAgent = agents.find(a => a.id === activeAgentId) || agents[0];

  return (
    <section id="matrix" className="py-24 bg-secondary-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          number="04" 
          title="智能体矩阵" 
          subtitle="构建全方位的智能生态，满足多样化业务需求"
          light={true}
        />

        <div className="flex flex-col lg:flex-row gap-8 h-[600px]">
          {/* Left: Navigation Menu (Drawer style) */}
          <div className="lg:w-1/3 flex flex-col h-full bg-secondary-800/30 backdrop-blur-sm rounded-3xl border border-secondary-700 overflow-hidden">
            {agents.map((agent) => (
              <button
                key={agent.id}
                onClick={() => setActiveAgentId(agent.id)}
                className={`flex-1 flex flex-col justify-center px-8 transition-all duration-500 border-b border-secondary-700/50 last:border-0 relative overflow-hidden group text-left ${
                  activeAgentId === agent.id 
                    ? 'bg-secondary-800/80 flex-[2]' 
                    : 'bg-transparent hover:bg-secondary-800/50'
                }`}
              >
                {/* Active Indicator Bar */}
                {activeAgentId === agent.id && (
                  <motion.div 
                    layoutId="active-bar"
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-500"
                  />
                )}

                <div className="flex items-center gap-4 mb-2">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    activeAgentId === agent.id 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-secondary-700 text-primary-400'
                  }`}>
                    {agent.icon}
                  </div>
                  <h3 className={`text-lg font-bold transition-colors ${activeAgentId === agent.id ? 'text-white' : 'text-secondary-300'}`}>
                    {agent.name}
                  </h3>
                </div>

                <AnimatePresence>
                  {activeAgentId === agent.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-secondary-400 leading-relaxed mt-2 pl-14">
                        {agent.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          {/* Right: Display Area */}
          <div className="lg:w-2/3 h-full bg-secondary-800/30 backdrop-blur-sm rounded-3xl border border-secondary-700 overflow-hidden relative flex items-center justify-center p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAgent.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full flex items-center justify-center"
              >
                  {/* PC Display Logic */}
                  {(activeAgent as any).type === "pc" ? (
                    <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl border-8 border-gray-800 shadow-2xl overflow-hidden group">
                      {/* Browser Bar */}
                      <div className="h-8 bg-gray-800 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      
                      {/* Screen Content */}
                      <div className="w-full h-full bg-white overflow-hidden relative">
                         {(activeAgent as any).snapshot ? (
                           <img 
                             src={(activeAgent as any).snapshot} 
                             alt={activeAgent.name}
                             className="w-full h-full object-cover"
                           />
                         ) : (activeAgent as any).link && (
                           <div className="w-full h-full">
                              <iframe 
                                src={(activeAgent as any).link} 
                                className="w-full h-full border-0 block"
                                title={activeAgent.name}
                                style={{ pointerEvents: 'none' }} 
                              />
                           </div>
                         )}
                         
                         {/* Click Overlay */}
                         {(activeAgent as any).link && (
                           <a 
                             href={(activeAgent as any).link} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="absolute inset-0 z-30 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors cursor-pointer"
                           >
                             <span className="sr-only">Visit {activeAgent.name}</span>
                           </a>
                         )}
                      </div>
                    </div>
                  ) : (activeAgent as any).link || (activeAgent as any).snapshot ? (
                    <div className="relative w-[280px] h-full max-h-[540px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                      {/* Phone Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                      
                      {/* Screen Content */}
                      <div className="w-full h-full bg-white overflow-hidden relative">
                         {/* Content Logic: Snapshot > Live Embed */}
                         {(activeAgent as any).snapshot ? (
                            <img 
                              src={(activeAgent as any).snapshot} 
                              alt={activeAgent.name}
                              className="w-full h-full object-contain bg-white"
                            />
                         ) : (
                           <div className="w-[133.33%] h-[133.33%] origin-top-left scale-75 overflow-hidden absolute inset-0">
                              <iframe 
                                src={(activeAgent as any).link} 
                                className="w-full h-full border-0 block"
                                title={activeAgent.name}
                                style={{ pointerEvents: 'none' }} // Disable iframe interaction
                              />
                           </div>
                         )}
                         
                         {/* Click Overlay (only if link exists) */}
                         {(activeAgent as any).link && (
                           <a 
                             href={(activeAgent as any).link} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="absolute inset-0 z-30 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors cursor-pointer"
                           >
                             <span className="sr-only">Visit {activeAgent.name}</span>
                           </a>
                         )}
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-[280px] h-full max-h-[540px] bg-secondary-800 rounded-[3rem] border-8 border-secondary-700 shadow-xl flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent"></div>
                      <div className="z-10 p-6 text-center">
                        <div className="w-20 h-20 bg-secondary-700 rounded-2xl flex items-center justify-center text-secondary-500 mb-6 mx-auto">
                          {activeAgent.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{activeAgent.name}</h3>
                        <p className="text-secondary-400 text-sm">功能演示开发中...</p>
                      </div>
                    </div>
                  )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
