import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Map, Target, TrendingUp, Share2, Layers, Smartphone, ChevronRight } from 'lucide-react';
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
    id: "zone",
    icon: <Smartphone className="w-5 h-5" />,
    title: "“黄小西带你游贵州”专区上线",
    desc: "2024年2月2日，高德地图APP正式上线“黄小西带你游贵州”文旅服务专区，以“黄小西”IP为视觉标识和交互入口，一站式集成信息查询、智能规划、语音导览、票务预订等功能，用户搜索“贵州”“贵州旅游”即可进入。同步上线“黄小西带你游贵阳”市州落地页，用户搜索“贵阳”可进入专属服务页面。",
    images: [
      "/303/assets/amap-1.png",
      "/303/assets/amap-2.png"
    ]
  },
  {
    id: "growth",
    icon: <TrendingUp className="w-5 h-5" />,
    title: "营销推广与用户增长成效显现",
    desc: "双方联合打造“黄小西”在高德APP的开屏宣传，在关键节点推广“黄小西”品牌与贵州旅游形象，试验投放5天累计曝光183.3万次、点击7.7万次，曝光与点击量均显著提升。两大专区上线后，在短时间内便累计带动“黄小西”曝光量突破200万次，新增直接用户3.17万人次，品牌认知度与渗透率持续提高。",
    images: [
      "/303/assets/amap-growth.png"
    ]
  },
  {
    id: "content",
    icon: <Share2 className="w-5 h-5" />,
    title: "联合内容运营协同发力",
    desc: "正在与高德联合打造“黄小西扫街榜”主题榜单及内容板块，引入本地优质文旅内容，构建“内容种草—智能规划—产品订购—导航抵达—服务体验”用户旅程闭环，实现线上线下场景无缝衔接。依托内容与智能服务协同，专区用户停留时长、服务调用频次双提升。",
    images: [
      "/303/assets/amap-content.png"
    ]
  },
  {
    id: "supply",
    icon: <Layers className="w-5 h-5" />,
    title: "供应链组织与资源整合",
    desc: "依托华创云信供应链基础及贵旅集团的本地资源网络，接入景区、酒店等旅游产品至高德平台，借助高德平台实现旅游产品的用户触达与交易达成，通过整合供应链资源，推动高德生态内的旅游商品交易体系重构。同时，依托本地服务网络，形成从线上引流到线下体验的商业闭环。",
    images: [
      "/303/assets/amap-supply-1.png",
      "/303/assets/amap-supply-2.png"
    ]
  },
  {
    id: "eco",
    icon: <Target className="w-5 h-5" />,
    title: "共推贵州旅游智能体服务生态",
    desc: "优先推动“黄小西”酒店智能体适配并接入高德地图，在地点详情页、搜索结果页等场景实现服务唤起，提升用户服务获取效率。在此基础上，分阶段推动景区、餐饮、旅行社等智能体接入，打造覆盖“吃住行游购娱”的全链条智能服务体系。",
    images: [
      "/303/assets/amap-eco-1.png",
      "/303/assets/amap-eco-2.png"
    ]
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
  const [activeAmapIndex, setActiveAmapIndex] = useState(0);

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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch bg-secondary-50 p-8 rounded-3xl border border-secondary-100">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <div className="prose prose-lg text-secondary-600 mb-8">
                  <h4 className="text-xl font-bold text-secondary-900 mb-4 flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-primary-500" />
                    即将发布：全程陪伴的数字生命
                  </h4>
                  <p className="mb-6 leading-relaxed">
                    在即将召开的旅发大会上，我们将重新定义“黄小西”。她不再仅仅是一个工具，而是一个有温度、有记忆、全程陪伴您贵州之旅的<strong>数字生命</strong>。
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-lg bg-white border border-secondary-200 flex items-center justify-center text-lg shadow-sm flex-shrink-0">🎫</div>
                      <div>
                        <h5 className="font-bold text-secondary-900 text-sm">订票准备</h5>
                        <p className="text-sm text-secondary-500">订票完成后，贴心提醒您携带身份证件，并根据天气建议出行装备。</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-lg bg-white border border-secondary-200 flex items-center justify-center text-lg shadow-sm flex-shrink-0">🏨</div>
                      <div>
                        <h5 className="font-bold text-secondary-900 text-sm">入住体验</h5>
                        <p className="text-sm text-secondary-500">入住后自动连接酒店服务，并为您定制专属的 Citywalk 探索方案。</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-lg bg-white border border-secondary-200 flex items-center justify-center text-lg shadow-sm flex-shrink-0">🏞️</div>
                      <div>
                        <h5 className="font-bold text-secondary-900 text-sm">景区游览</h5>
                        <p className="text-sm text-secondary-500">化身金牌导游，为您提供深度文化讲解与实时路线导览。</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-lg bg-white border border-secondary-200 flex items-center justify-center text-lg shadow-sm flex-shrink-0">🍽️</div>
                      <div>
                        <h5 className="font-bold text-secondary-900 text-sm">餐饮服务</h5>
                        <p className="text-sm text-secondary-500">根据口味偏好推荐地道美食，一键完成预订与点餐。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-8 bg-secondary-100/50 rounded-2xl h-full min-h-[480px]"
              >
                <div className="w-[280px] h-[500px] rounded-2xl shadow-xl overflow-hidden bg-white border border-secondary-200 relative">
                   <div className="w-[375px] h-[667px] absolute top-0 left-0 origin-top-left scale-[0.746] overflow-hidden">
                      <iframe 
                        src="https://arifinfirman788-blip.github.io/HuangxiaoxiV4.0/" 
                        className="w-full h-full border-0 block overflow-hidden"
                        title="Huang Xiaoxi Preview"
                        scrolling="no"
                      />
                   </div>
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
              <h3 className="text-2xl font-bold text-secondary-900">高德的合作</h3>
            </div>
            
            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100 mb-12">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="w-12 h-12 rounded-xl bg-white text-primary-600 flex items-center justify-center shadow-sm flex-shrink-0">
                    <Map size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary-900 mb-2">打造全域旅游服务新生态</h4>
                    <p className="text-secondary-600 leading-relaxed max-w-4xl">
                        通过与高德地图的深度合作，我们将“黄小西”IP与高德的LBS能力完美融合，从线上引流到线下体验，构建完整的商业闭环。
                    </p>
                  </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left: Display Area - Sticky on Desktop */}
              <div className="lg:sticky lg:top-32 relative aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-xl border border-secondary-200 bg-secondary-900 group order-2 lg:order-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeAmapIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full bg-white"
                >
                  {amapPoints[activeAmapIndex].images.length === 1 ? (
                    <img 
                      src={amapPoints[activeAmapIndex].images[0]} 
                      alt={amapPoints[activeAmapIndex].title}
                      className="w-full h-full object-contain bg-secondary-50" 
                    />
                  ) : (
                    <div className="grid grid-cols-2 h-full w-full gap-1 bg-secondary-50">
                       <div className="relative overflow-hidden h-full group/img1 flex items-center justify-center">
                         <img 
                           src={amapPoints[activeAmapIndex].images[0]} 
                           alt="Primary View"
                           className="w-full h-full object-contain transition-transform duration-700 group-hover/img1:scale-105" 
                         />
                       </div>
                       <div className="relative overflow-hidden h-full group/img2 flex items-center justify-center">
                         <img 
                           src={amapPoints[activeAmapIndex].images[1]} 
                           alt="Secondary View"
                           className="w-full h-full object-contain transition-transform duration-700 group-hover/img2:scale-105" 
                         />
                       </div>
                    </div>
                  )}
                  
                   {/* Overlay Text - Removed as requested */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/10 via-transparent to-transparent pointer-events-none"></div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Interactive List (Accordion Style) */}
            <div className="flex flex-col order-1 lg:order-2">
              <div className="space-y-3">
                    {amapPoints.map((point, index) => (
                       <div
                          key={point.id}
                          className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                            activeAmapIndex === index 
                              ? "bg-white border-primary-500 shadow-md ring-1 ring-primary-100" 
                              : "bg-secondary-50/50 border-transparent hover:bg-white hover:border-primary-200 hover:shadow-sm"
                          }`}
                       >
                          <button
                            onClick={() => setActiveAmapIndex(index)}
                            className="w-full text-left p-4 flex items-center gap-4 group"
                          >
                            <div className={`p-2 rounded-lg transition-colors flex-shrink-0 ${
                              activeAmapIndex === index ? "bg-primary-100 text-primary-600" : "bg-white text-secondary-400 group-hover:text-primary-500 shadow-sm"
                            }`}>
                               {point.icon}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                               <h5 className={`font-bold transition-colors truncate ${
                                  activeAmapIndex === index ? "text-primary-700" : "text-secondary-900"
                               }`}>
                                  {point.title}
                               </h5>
                            </div>
                            
                            <div className={`transition-transform duration-300 ${activeAmapIndex === index ? "rotate-90 text-primary-500" : "text-secondary-400 group-hover:text-primary-500"}`}>
                               <ChevronRight size={18} />
                            </div>
                          </button>

                          <AnimatePresence>
                            {activeAmapIndex === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="px-4 pb-4 pt-0 pl-[4.5rem]">
                                  <p className="text-sm text-secondary-600 leading-relaxed border-t border-secondary-100 pt-3">
                                    {point.desc}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                       </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
