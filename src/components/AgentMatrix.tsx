import { motion } from 'framer-motion';
import { Network, Mountain, Utensils, User, Landmark } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const agents = [
  { 
    name: "景区智能体", 
    role: "Scenic Spot Agent", 
    icon: <Mountain size={24} />,
    desc: "提供智慧导览、景点讲解与路线规划，实时播报客流与天气，提升游客沉浸式游览体验。"
  },
  { 
    name: "餐饮智能体", 
    role: "Dining Agent", 
    icon: <Utensils size={24} />,
    desc: "基于口味偏好推荐地道美食，支持智能点餐与排队预约，打造舌尖上的个性化之旅。"
  },
  { 
    name: "个人智能体", 
    role: "Personal Agent", 
    icon: <User size={24} />,
    desc: "您的贴身AI管家，全天候响应个性化需求，从行程定制到生活服务，无微不至。"
  },
  { 
    name: "政府智能体", 
    role: "Government Agent", 
    icon: <Landmark size={24} />,
    desc: "对接监管数据，提供政策咨询与市场监测，助力旅游产业规范化、高质量发展。"
  }
];

export default function AgentMatrix() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary-800/30 backdrop-blur-sm rounded-2xl border border-secondary-700 overflow-hidden hover:border-primary-500 transition-all group flex flex-col"
            >
              {/* Top: Info Section */}
              <div className="p-6 flex gap-5 border-b border-secondary-700/50">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary-700 rounded-xl flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-lg shadow-primary-900/20">
                      {agent.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{agent.name}</h3>
                    <p className="text-secondary-400 text-xs uppercase tracking-wider mb-3">{agent.role}</p>
                    <p className="text-secondary-400 text-sm leading-snug group-hover:text-secondary-300 transition-colors">
                      {agent.desc}
                    </p>
                  </div>
              </div>

              {/* Bottom: Display Area */}
              <div className="flex-1 bg-secondary-900/50 p-4 min-h-[200px] flex items-center justify-center relative overflow-hidden group-hover:bg-secondary-800/50 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-center text-secondary-600 group-hover:text-secondary-500 transition-colors z-10">
                     <div className="w-16 h-16 mx-auto mb-3 rounded-lg border-2 border-dashed border-secondary-700 flex items-center justify-center">
                        <span className="text-xs">界面/图表</span>
                     </div>
                     <p className="text-xs font-medium">{agent.name} 功能演示区</p>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
