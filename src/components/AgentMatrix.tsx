import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Briefcase, BarChart, Shield, Headphones, Network } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const agents = [
  { 
    name: "客服智能体", 
    role: "Customer Service", 
    icon: <Headphones size={24} />,
    desc: "7x24小时在线，即时响应住客咨询，处理预订与投诉，提升服务满意度。"
  },
  { 
    name: "营销智能体", 
    role: "Marketing", 
    icon: <MessageSquare size={24} />,
    desc: "基于用户画像精准推送优惠活动，激活私域流量，提升复购率。"
  },
  { 
    name: "管理智能体", 
    role: "Management", 
    icon: <Briefcase size={24} />,
    desc: "自动化排班与任务分配，实时监控运营状态，辅助管理层科学决策。"
  },
  { 
    name: "数据智能体", 
    role: "Data Analysis", 
    icon: <BarChart size={24} />,
    desc: "全维度数据采集与分析，生成可视化报表，洞察经营趋势与潜在风险。"
  },
  { 
    name: "安防智能体", 
    role: "Security", 
    icon: <Shield size={24} />,
    desc: "联动监控系统，智能识别异常行为，保障酒店与住客的安全。"
  },
  { 
    name: "中枢智能体", 
    role: "Core AI", 
    icon: <Bot size={24} />,
    desc: "作为大脑协调各子智能体工作，统一调度资源，确保系统高效运转。"
  },
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Matrix Overview & Diagram Placeholder */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-secondary-800/50 backdrop-blur-sm p-8 rounded-2xl border border-secondary-700">
              <div className="flex items-center gap-3 mb-6">
                <Network className="text-primary-400" size={28} />
                <h3 className="text-xl font-bold">生态协同效应</h3>
              </div>
              <p className="text-secondary-400 leading-relaxed mb-6">
                单一的智能体只能解决点状问题，而我们的矩阵式设计实现了智能体之间的互联互通。通过中枢智能体的统一调度，各职能智能体能够像高效团队一样紧密配合。
              </p>
              <div className="aspect-square bg-secondary-800 rounded-xl border border-dashed border-secondary-600 flex items-center justify-center relative overflow-hidden">
                 <div className="text-center text-secondary-500">
                    <p className="text-sm font-medium">矩阵架构图配图位</p>
                    <p className="text-xs mt-2 opacity-60">建议展示拓扑结构图</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Column: Agents Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agents.map((agent, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-secondary-800/30 backdrop-blur-sm p-6 rounded-2xl border border-secondary-700 hover:bg-secondary-800 hover:border-primary-500 transition-all group cursor-pointer flex gap-5"
                >
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
