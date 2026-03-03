import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Zap, Workflow, Share2, ShoppingBag, HardDrive, LayoutDashboard, ChevronRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const features = [
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "持续跟进 AI 潮流",
    subtitle: "Continuous Evolution",
    desc: "具备首页迭代能力，产品持续进化，始终保持技术领先。",
    detail: "通过云端即时更新，确保每一台终端都能享受到最新的 AI 模型能力，无需人工现场维护。"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "快速上线，十分钟部署",
    subtitle: "Rapid Deployment",
    desc: "分钟级入驻流程，极大降低时间成本，实现即刻启用。",
    detail: "标准化的接入流程与自动化配置工具，让传统酒店也能轻松拥抱智能化。"
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "住客全生命周期经营",
    subtitle: "Lifecycle Management",
    desc: "深度打通 PMS，覆盖住客从预订到离店的全流程服务。",
    detail: "从预订确认、入住办理、客房服务到离店退房、售后回访，提供全链路的智能关怀。"
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "多数字分身体系",
    subtitle: "Multi-Agent System",
    desc: "构建智能体路由调度系统，实现多角色智能分身的高效协同。",
    detail: "不同职能的智能体（如管家、客服、销售）协同工作，为住客提供专业且一致的服务体验。"
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "S2B2C 消费一体化",
    subtitle: "Integrated Consumption",
    desc: "集订房、购物、在地体验于一体，打造一站式消费闭环。",
    detail: "打破酒店服务边界，连接周边商圈与特色服务，构建完整的本地生活服务生态。"
  },
  {
    icon: <HardDrive className="w-6 h-6" />,
    title: "硬件闭环能力",
    subtitle: "Hardware Integration",
    desc: "房间内零距离交互，实现软硬件的无缝连接与控制。",
    detail: "深度对接主流智能家居协议，实现语音控制灯光、窗帘、空调等设备，打造沉浸式智慧客房。"
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "管理端经营能力",
    subtitle: "Management Dashboard",
    desc: "真正承接住客需求，为管理者提供强大的后台经营支持。",
    detail: "可视化数据看板与智能决策辅助，帮助管理者实时掌握运营状态，优化资源配置。"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          number="03" 
          title="产品主要特点" 
          subtitle="七大核心优势，定义新一代酒店智能解决方案"
        />

        <div className="grid grid-cols-1 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:items-start p-8 rounded-3xl bg-white border border-secondary-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                {/* Icon & Title Column */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900">{feature.title}</h3>
                      <p className="text-xs font-medium text-secondary-400 uppercase tracking-wider mt-1">{feature.subtitle}</p>
                    </div>
                  </div>
                  <div className="h-px w-full bg-secondary-100 my-4"></div>
                  <p className="text-secondary-600 font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </div>

                {/* Detail Text Column */}
                <div className="lg:w-1/3 flex flex-col justify-center">
                   <h4 className="text-sm font-bold text-secondary-900 mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    核心价值
                   </h4>
                   <p className="text-sm text-secondary-500 leading-relaxed">
                     {feature.detail}
                   </p>
                   <button className="mt-4 text-primary-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                     了解更多 <ChevronRight size={14} />
                   </button>
                </div>

                {/* Image Placeholder Column */}
                <div className="lg:w-1/3 flex-grow">
                  <div className="aspect-[4/3] bg-secondary-50 rounded-xl border-2 border-dashed border-secondary-200 flex items-center justify-center relative overflow-hidden group-hover:bg-secondary-100 transition-colors">
                    <div className="text-center text-secondary-400">
                       <p className="text-sm font-medium">功能演示配图</p>
                       <p className="text-xs mt-1 opacity-70">建议展示 UI 界面或场景图</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
