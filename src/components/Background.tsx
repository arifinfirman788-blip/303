import { motion } from 'framer-motion';
import { Rocket, Map, Target, TrendingUp, Share2, Layers, Smartphone } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const aiEvolutionPoints = [
  {
    title: "AI产品上线，市值蒸发",
    content: "ChatGPT 等生成式 AI 产品上线后，传统搜索引擎和知识问答平台受到巨大冲击，相关行业巨头市值在短时间内直接蒸发 1.5 万亿美元。",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    highlight: "1.5 万亿美元"
  },
  {
    title: "美股“七巨头”占标普 60% 市值",
    content: "以英伟达、微软为代表的 AI 核心企业（Magnificent Seven）强势领涨，其总市值一度占据标普 500 指数的 60%，资本市场全面向 AI 倾斜。",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    highlight: "60% 市值占比"
  },
  {
    title: "AI 成为“影响国家级变量”",
    content: "AI 已经超越了单一的“企业工具”范畴，成为影响国家竞争力的核心变量。各国纷纷出台政策，将其视为关乎未来的战略制高点。",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    highlight: "国家级战略"
  },
  {
    title: "AI 让“组织规模”失效",
    content: "传统的人力堆叠模式正在失效。AI 赋能下，“一人公司”或超级小团队创造的价值可能超越千人企业，组织效能被重新定义。",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    highlight: "一人公司 vs 千人企业"
  }
];

const amapPoints = [
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "“黄小西带你游贵州”专区上线",
    desc: "2026年2月2日正式上线，集成信息查询、智能规划、语音导览、票务预订等功能，打造一站式文旅服务入口。"
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "营销推广与用户增长成效显现",
    desc: "联合开屏宣传累计曝光183.3万次，带动“黄小西”曝光突破200万次，新增直接用户3.17万人次。"
  },
  {
    icon: <Share2 className="w-5 h-5" />,
    title: "联合内容运营协同发力",
    desc: "打造“黄小西扫街榜”，构建“内容种草—智能规划—产品订购—导航抵达”的用户旅程闭环。"
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "供应链组织与资源整合",
    desc: "依托本地资源网络，接入景区、酒店产品，推动高德生态内的旅游商品交易体系重构。"
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "共推贵州旅游智能体服务生态",
    desc: "推动“黄小西”酒店智能体接入高德，逐步覆盖景区、餐饮等场景，打造全链条智能服务体系。"
  }
];

// Enhanced component with Orthogonal "Bracket" Connectors
const FusionRow = ({ left, right, center, stamp }: { left: string, right: string | string[], center: string, stamp: string }) => {
  return (
    <div className="relative mb-16 last:mb-0">
      {/* Top Layer: Inputs */}
      <div className="grid grid-cols-2 gap-8 lg:gap-24 mb-12 relative z-10">
        {/* Left Input (Guilv) */}
        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-t-emerald-500 border-x border-b border-secondary-100 h-full flex items-center justify-center text-center hover:shadow-md transition-all relative">
          <p className="text-secondary-700 font-medium text-sm lg:text-base leading-relaxed">{left}</p>
          {/* Connector Start Point */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-500 rounded-full border-4 border-white shadow-sm z-20"></div>
        </div>

        {/* Right Input (Huachuang) */}
        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-t-blue-500 border-x border-b border-secondary-100 h-full flex flex-col items-center justify-center text-center hover:shadow-md transition-all relative">
          {Array.isArray(right) ? (
            right.map((item, idx) => (
              <p key={idx} className={`text-secondary-700 font-medium text-sm lg:text-base leading-relaxed ${idx > 0 ? "mt-2 pt-2 border-t border-secondary-100 w-full" : ""}`}>
                {item}
              </p>
            ))
          ) : (
            <p className="text-secondary-700 font-medium text-sm lg:text-base leading-relaxed">{right}</p>
          )}
          {/* Connector Start Point */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-4 border-white shadow-sm z-20"></div>
        </div>
      </div>

      {/* Middle Layer: Orthogonal Connector Lines */}
      <div className="absolute top-[calc(100%-10rem)] left-0 w-full h-16 pointer-events-none hidden lg:block">
         {/* We need to connect the bottom-center of the two top boxes to the top-center of the bottom box */}
         {/* Since we can't easily know the exact height of the boxes, we position this relative to the row container */}
         {/* Actually, a better way is to place the connector lines absolutely within the row container */}
         
         {/* Left Vertical Line Down */}
         <div className="absolute top-[30%] left-[25%] h-[40%] w-[2px] bg-gradient-to-b from-emerald-500 to-emerald-300"></div>
         
         {/* Right Vertical Line Down */}
         <div className="absolute top-[30%] right-[25%] h-[40%] w-[2px] bg-gradient-to-b from-blue-500 to-blue-300"></div>
         
         {/* Horizontal Connecting Line */}
         <div className="absolute top-[70%] left-[25%] right-[25%] h-[2px] bg-gradient-to-r from-emerald-300 via-secondary-300 to-blue-300"></div>
         
         {/* Center Vertical Line Down */}
         <div className="absolute top-[70%] left-1/2 -translate-x-1/2 h-[30%] w-[2px] bg-secondary-300"></div>
         
         {/* Junction Dot */}
         <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-secondary-300 rounded-full z-10 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-secondary-400 rounded-full"></div>
         </div>
      </div>
      
      {/* Mobile Connectors (Simple Vertical) */}
      <div className="lg:hidden absolute top-[30%] left-1/4 bottom-[30%] w-px bg-gradient-to-b from-emerald-500 to-emerald-200 opacity-50"></div>
      <div className="lg:hidden absolute top-[30%] right-1/4 bottom-[30%] w-px bg-gradient-to-b from-blue-500 to-blue-200 opacity-50"></div>


      {/* Bottom Layer: Outcome */}
      <div className="flex justify-center relative z-10 mt-8">
        <div className="relative w-full max-w-2xl bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-2xl border border-secondary-200 text-center shadow-sm">
          <p className="text-secondary-900 font-bold text-lg lg:text-xl">{center}</p>
          
          {/* Connector End Point */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary-300 rounded-full border-4 border-white shadow-sm"></div>

          {/* Stamp Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 2, rotate: -45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -12 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
            className="absolute -top-3 -right-3 lg:-right-6 bg-white border-2 border-red-500 text-red-500 px-3 py-1 text-sm font-black uppercase tracking-widest shadow-sm rounded-sm"
          >
            {stamp}
          </motion.div>
        </div>
      </div>
      
      {/* Structural Lines Overlay (Re-implementation for better positioning) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
          {/* We need lines that start from the bottom of the top boxes (approx 45% down the container) and go to the top of the bottom box (approx 75% down) */}
          {/* Since height is variable, we use percentages that generally align with the spacing */}
          
          {/* Left Path: Down -> Right -> Down */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
             <defs>
               <linearGradient id="grad-left" x1="0%" y1="0%" x2="0%" y2="100%">
                 <stop offset="0%" stopColor="#10b981" /> {/* emerald-500 */}
                 <stop offset="100%" stopColor="#cbd5e1" /> {/* secondary-300 */}
               </linearGradient>
               <linearGradient id="grad-right" x1="0%" y1="0%" x2="0%" y2="100%">
                 <stop offset="0%" stopColor="#3b82f6" /> {/* blue-500 */}
                 <stop offset="100%" stopColor="#cbd5e1" /> {/* secondary-300 */}
               </linearGradient>
             </defs>
             
             {/* Left Bracket Line */}
             <path 
               d="M 25% 45% V 65% H 50% V 75%" 
               fill="none" 
               stroke="url(#grad-left)" 
               strokeWidth="2" 
               vectorEffect="non-scaling-stroke"
               className="opacity-30"
             />
             
             {/* Right Bracket Line */}
             <path 
               d="M 75% 45% V 65% H 50% V 75%" 
               fill="none" 
               stroke="url(#grad-right)" 
               strokeWidth="2" 
               vectorEffect="non-scaling-stroke"
               className="opacity-30"
             />
             
             {/* Central Junction Dot */}
             <circle cx="50%" cy="65%" r="4" fill="white" stroke="#cbd5e1" strokeWidth="2" />
          </svg>
      </div>
    </div>
  );
};

export default function Background() {
  return (
    <section id="background" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          number="01" 
          title="项目背景" 
          subtitle="探索智能体诞生的契机与行业变革的源动力"
        />

        <div className="space-y-32">
          
          {/* Sub-section 1: AI Evolution */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-bold text-sm">1</span>
              <h3 className="text-2xl font-bold text-secondary-900">
                AI 到底已经进化成什么样了？
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiEvolutionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer shadow-md hover:shadow-xl transition-all"
                >
                  <img 
                    src={point.image} 
                    alt={point.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/60 to-transparent opacity-90"></div>
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="text-primary-400 text-xs font-bold uppercase tracking-wider mb-2">
                      {point.highlight}
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2 leading-tight">
                      {point.title}
                    </h4>
                    <p className="text-secondary-300 text-sm leading-snug line-clamp-4 group-hover:text-white transition-colors">
                      {point.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sub-section 2: Huang Xiaoxi Release */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-bold text-sm">2</span>
              <h3 className="text-2xl font-bold text-secondary-900">
                黄小西旅发大会发布
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-secondary-50 p-8 rounded-3xl border border-secondary-100">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg text-secondary-600"
              >
                <h4 className="text-xl font-bold text-secondary-900 mb-4">
                  行业首发，震撼亮相
                </h4>
                <p className="mb-4">
                  在备受瞩目的黄小西旅发大会上，酒店智能体首次公开亮相。作为大会的亮点之一，它不仅展示了前沿的 AI 技术，更通过实际场景演示，向行业展示了未来酒店服务的无限可能。
                </p>
                <p>
                  大会现场，智能体流畅地完成了从住客意图识别、个性化推荐到服务指令下发的全流程操作，获得了在场行业专家与合作伙伴的高度评价，标志着贵州旅游服务正式迈入智能化新时代。
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-video bg-white rounded-2xl flex items-center justify-center border-2 border-dashed border-secondary-200 relative overflow-hidden group shadow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-50"></div>
                <div className="text-secondary-400 text-center z-10">
                  <Rocket className="w-12 h-12 mx-auto mb-3 text-primary-300" />
                  <p className="text-lg font-medium">发布会现场配图位</p>
                  <p className="text-sm mt-2 opacity-70">建议展示：发布会演讲照片或演示屏幕</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Sub-section 3: Guilv & Huachuang (Refactored Structure) */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-bold text-sm">3</span>
              <h3 className="text-2xl font-bold text-secondary-900">
                贵旅数网这一年 & 华创云信的很多年
              </h3>
            </div>

            <div className="bg-secondary-50/50 rounded-3xl p-6 lg:p-12 border border-secondary-100">
              {/* Header Columns */}
              <div className="grid grid-cols-2 gap-8 lg:gap-24 mb-12 text-center">
                 <div className="flex flex-col items-center">
                   <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xl mb-3">贵</div>
                   <h4 className="text-xl font-bold text-secondary-900">贵旅数网这一年</h4>
                 </div>
                 <div className="flex flex-col items-center">
                   <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl mb-3">华</div>
                   <h4 className="text-xl font-bold text-secondary-900">华创云信的很多年</h4>
                 </div>
              </div>

              {/* Fusion Rows */}
              <FusionRow 
                left="“黄小西”智能体矩阵的建设及运营"
                right="人工智能、大数据、支付结算全栈技术支持"
                center="“黄小西”智慧旅游品牌形象、宣传推广持续加强"
                stamp="有品牌"
              />

              <FusionRow 
                left="已完成全省3A级以上景区、4星级以上酒店等标准化资源的全面接入，完善户外、探险、定制类旅游商品"
                right={["旅游供应链金融服务的持续运营", "以化债为基础的大体量旅游门票产品的组织能力"]}
                center="旅游商品的组织宽度不断拓展、深度持续下沉"
                stamp="深产品"
              />

              <FusionRow 
                left="逐渐成为贵旅集团打通各类平台的工具，链接集团内外各类产品及平台资源"
                right={["以加油站便利店运营为线索，组织各类便利商品", "以白酒交易所标品、定制酒业务为契机，组织各类贵州好酒"]}
                center="供应链组织能力逐步加强，突破旅游边界，向全场景升级"
                stamp="宽供应链"
              />

            </div>
          </div>

          {/* Sub-section 4: Amap Collaboration */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-bold text-sm">4</span>
              <h3 className="text-2xl font-bold text-secondary-900">
                高德的合作
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 bg-primary-50 rounded-3xl p-8 flex flex-col justify-center border border-primary-100">
                <Map className="w-16 h-16 text-primary-500 mb-6" />
                <h4 className="text-2xl font-bold text-secondary-900 mb-4">
                  打造全域旅游<br/>服务新生态
                </h4>
                <p className="text-secondary-600 leading-relaxed">
                  通过与高德地图的深度合作，我们将“黄小西”IP与高德的LBS能力完美融合，从线上引流到线下体验，构建完整的商业闭环。
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {amapPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-2xl border border-secondary-100 hover:border-primary-200 hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 bg-secondary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                      {point.icon}
                    </div>
                    <h5 className="font-bold text-secondary-900 mb-2">{point.title}</h5>
                    <p className="text-sm text-secondary-500 leading-relaxed">{point.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
