import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, CheckCircle, BarChart3, PieChart } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const stats = [
  { label: "服务响应时间", value: "< 3s", icon: <Clock size={20} />, trend: "下降 85%", desc: "相比传统人工服务，响应速度显著提升，实现即问即答。" },
  { label: "住客满意度", value: "98%", icon: <Users size={20} />, trend: "提升 12%", desc: "个性化服务与即时反馈机制，大幅提升了住客的入住体验。" },
  { label: "运营效率", value: "+40%", icon: <TrendingUp size={20} />, trend: "显著提升", desc: "自动化处理重复性任务，释放人力专注于高价值服务。" },
  { label: "任务完成率", value: "99.9%", icon: <CheckCircle size={20} />, trend: "稳定运行", desc: "高可靠性的系统架构，确保每一项指令都能被准确执行。" },
];

export default function Operations() {
  return (
    <section id="operations" className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          number="02" 
          title="运营情况" 
          subtitle="数据驱动的卓越表现，实时的运营成效展示"
        />

        <div className="space-y-16">
          {/* Top Section: Overview Text + Main Chart Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                <BarChart3 className="text-primary-600" />
                核心运营指标概览
              </h3>
              <p className="text-secondary-500 mb-6 leading-relaxed">
                自系统上线以来，我们在多个关键运营指标上取得了突破性进展。通过实时数据监控与智能分析，酒店的运营效率得到了显著优化，同时大幅降低了人力成本。
              </p>
              <div className="bg-white p-6 rounded-xl border border-secondary-100 shadow-sm">
                <h4 className="font-semibold text-secondary-900 mb-4 text-sm uppercase tracking-wider">关键成效</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-secondary-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></span>
                    <span>客房服务响应零延迟，投诉率降低 60%</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-secondary-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></span>
                    <span>智能推荐带来的增值服务收入提升 15%</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-secondary-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0"></span>
                    <span>夜间无人值守模式稳定运行超过 5000 小时</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-secondary-100 h-full min-h-[400px] flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                  <PieChart size={200} />
                </div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-bold text-secondary-900">实时数据看板</h3>
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400"></span>
                  </div>
                </div>
                
                <div className="flex-grow flex items-center justify-center bg-secondary-50 rounded-xl border-2 border-dashed border-secondary-200">
                  <div className="text-center text-secondary-400">
                    <p className="text-lg font-medium">数据图表配图位</p>
                    <p className="text-sm mt-2">建议展示：月度运营趋势图 / 用户活跃度热力图</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-secondary-100 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-secondary-500 text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                  <div className="text-primary-500 bg-primary-50 p-2 rounded-lg group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-4xl font-bold text-secondary-900">{stat.value}</span>
                  <span className="text-xs text-green-600 font-medium mb-1.5 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                    {stat.trend}
                  </span>
                </div>
                <p className="text-xs text-secondary-400 leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
