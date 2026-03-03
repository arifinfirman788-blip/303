import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Zap, Workflow, Share2, ShoppingBag, HardDrive, LayoutDashboard, ChevronRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const evolutionStages = [
  {
    id: 1,
    version: "1.0",
    title: "表单式提示词阶段",
    features: ["固定按钮", "功能罗列", "类似“功能目录式”工具"],
    characteristics: "功能清晰，但偏被动。",
    image: "/303/assets/feature-evo-1.png"
  },
  {
    id: 2,
    version: "2.0",
    title: "预设问题对话引导",
    features: ["引导式提问", "场景化问题", "用户开始通过对话完成需求"],
    characteristics: "开始从“工具逻辑”向“对话逻辑”转变。",
    image: "/303/assets/feature-evo-2.png"
  },
  {
    id: 3,
    version: "3.0",
    title: "多数字分身员工卡片",
    features: ["不再是统一客服", "多角色数字员工入口", "用户可选择不同分身进入服务"],
    characteristics: "角色化、人格化、服务分层。",
    image: "/303/assets/feature-evo-3.png"
  },
  {
    id: 4,
    version: "4.0",
    title: "能力直接前置展示",
    features: ["不仅展示“员工是谁”", "更直接展示“员工能做什么”", "根据入住状态动态推荐能力"],
    characteristics: "从按钮驱动 → 对话驱动；从客服逻辑 → 智能体逻辑；从被动展示 → 主动经营。",
    image: "/303/assets/feature-evo-4.jpg"
  }
];

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "快速上线，十分钟部署",
    subtitle: "Rapid Deployment",
    desc: "部署本身就是产品能力，而不是人工实施能力。对话式入驻助手自动引导，无需复杂流程与技术对接。",
    detail: "通过对话式交互完成初始化配置，实现低门槛启动、低组织成本与快速规模化复制。",
    images: [
      "/303/assets/deploy-1.png",
      "/303/assets/deploy-2.png",
      "/303/assets/deploy-3.png",
      "/303/assets/deploy-4.png"
    ]
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "住客全生命周期经营",
    subtitle: "Lifecycle Management",
    desc: "只有知道住客是谁、住在哪、处在什么阶段，才能真正经营。",
    detail: "具备实时获取订单信息、判断入住状态、获取房型与时间等能力。从私域引流、入住主动服务到离店自动化触达，将一次性交易转化为长期关系经营。",
    layout: "lifecycle",
    phases: [
      {
        id: "phase1",
        title: "私域入口体系",
        items: ["小程序私域中枢", "礼宾邀请卡自动生成", "多渠道引流"],
        image: "/303/assets/lifecycle-pre.png"
      },
      {
        id: "phase2",
        title: "入住中主动服务",
        items: ["AI 咨询", "服务下单", "岗位自动分发", "全流程可追踪"],
        image: "/303/assets/lifecycle-in.jpg"
      },
      {
        id: "phase3",
        title: "离店后自动化触达",
        items: ["自动优惠券触发", "续订激励工具", "差异化客户触达"],
        image: "/303/assets/lifecycle-post.jpg"
      }
    ]
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "多数字分身体系 + 智能体路由调度",
    subtitle: "Multi-Agent Matrix & Routing",
    desc: "不是一个万能客服，而是角色化智能体矩阵。千人千面服务的系统化实现，而非人工经验。",
    detail: "底层智能路由系统可识别住客身份、当前阶段、问题类型，自动调度最合适的数字分身。",
    layout: "multi-agent",
    roles: [
      { name: "综合管家分身", icon: "🎩" },
      { name: "亲子陪伴分身", icon: "🧸" },
      { name: "本地推荐分身", icon: "🗺️" },
      { name: "旅游规划分身", icon: "✈️" },
      { name: "睡眠陪伴分身", icon: "🌙" },
      { name: "政府接待分身", icon: "🏛️" }
    ],
    routingLogic: ["住客身份", "当前阶段", "问题类型"],
    images: {
      mobile: "/303/assets/agent-mobile.jpg",
      pc: "/303/assets/agent-pc.png"
    }
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "集订房、购物、在地体验，消费于一体",
    subtitle: "S2B2C Business Loop",
    desc: "不只是订房工具，而是完整商业闭环。酒店从单一房费收入，升级为多元经营结构。",
    detail: "打破酒店服务边界，连接周边商圈与特色服务，构建完整的本地生活服务生态。",
    capabilities: [
      { label: "已支持", items: ["在线订房", "购买酒店自营商品", "购买智能体优选商品"] },
      { label: "内嵌能力", items: ["周边商家推荐", "文娱活动日历"] },
      { label: "住客交互", items: ["购买贵州特产", "预订本地活动", "完成消费"] }
    ],
    images: [
      "/303/assets/s2b2c-1.png",
      "/303/assets/s2b2c-2.jpg",
      "/303/assets/s2b2c-3.jpg",
      "/303/assets/s2b2c-4.jpg"
    ]
  },
  {
    icon: <HardDrive className="w-6 h-6" />,
    title: "硬件闭环能力（房间内零距离）",
    subtitle: "Physical Space Integration",
    desc: "我们并非简单接入音箱，而是构建完整闭环。把智能体从手机端，延伸到真实物理空间。",
    detail: "深度对接主流智能家居协议，实现语音控制灯光、窗帘、空调等设备，打造沉浸式智慧客房。",
    layout: "hardware",
    points: [
      {
        title: "服务触达更自然",
        desc: "住客无需打开手机，直接语音发起服务。",
        icon: "🗣️"
      },
      {
        title: "服务场景更完整",
        desc: "补物品、询问信息、下单商品、呼叫服务，直接闭环。",
        icon: "🏨"
      },
      {
        title: "数据与系统打通",
        desc: "语音指令 → 进入智能体 → 生成工单 → 分发岗位 → 管理端留痕，实现真正“有手有脚”。",
        icon: "🔗"
      },
      {
        title: "可规模化复制",
        desc: "统一设计标准、可贴牌、可批量采购、与软件能力深度绑定。",
        icon: "📦"
      }
    ],
    images: [
      "/303/assets/hardware-1.jpg",
      "/303/assets/hardware-2.jpg"
    ]
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "管理端经营能力（真正承接住客需求）",
    subtitle: "Management Dashboard",
    desc: "住客端所有行为，必须在管理端有真实落点。",
    detail: "可视化数据看板与智能决策辅助，帮助管理者实时掌握运营状态，优化资源配置。",
    layout: "management",
    tabs: [
      {
        id: "workorder",
        title: "工单承接体系",
        desc: "自动生成工单、分发到岗位、状态可追踪、响应效率可统计。解决电话占线、信息丢失、责任模糊问题。",
        image: "/303/assets/management-1.jpg",
        features: ["自动生成", "智能分发", "状态追踪", "效率统计"]
      },
      {
        id: "staff",
        title: "多数字员工体系",
        desc: "不是抽象AI，而是岗位级数字员工。把经验型工作转化为系统资产。",
        image: "/303/assets/management-2.jpg",
        features: ["前台记事助手", "运营数据分析", "房价查探", "商品运营"]
      },
      {
        id: "training",
        title: "知识库持续训练",
        desc: "支持文档上传、文件导入、图片OCR及日常对话自动沉淀。越用越懂酒店，而不是一次性交付。",
        image: "/303/assets/management-3.jpg",
        features: ["多格式支持", "OCR识别", "对话沉淀", "持续进化"]
      }
    ]
  }
];

export default function Features() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          number="03" 
          title="产品主要特点" 
          subtitle="七大核心优势，定义新一代酒店智能解决方案"
        />

        <div className="space-y-12">
          {/* 1. Evolution Feature (Featured) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-secondary-200 shadow-lg overflow-hidden"
          >
            <div className="p-8 lg:p-12 border-b border-secondary-100">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600">
                    <RefreshCw className="w-8 h-8" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-secondary-900">持续跟进 AI 潮流的首页迭代能力</h3>
                    <p className="text-sm font-medium text-secondary-400 uppercase tracking-wider mt-1">Continuous Evolution</p>
                 </div>
              </div>
              <p className="text-secondary-600 text-lg leading-relaxed max-w-3xl">
                这是整个产品最核心、也最具战略意义的特点。我们不是一次性做完一个首页，而是持续跟随 AI 交互范式演进进行升级。
              </p>
            </div>

            <div className="flex flex-col min-h-[500px]">
               {/* Top: Horizontal Tab Navigation */}
               <div className="bg-secondary-50 px-8 pt-8 border-b border-secondary-200">
                  <div className="flex flex-wrap gap-2">
                     {evolutionStages.map((stage, index) => (
                        <button
                          key={stage.id}
                          onClick={() => setActiveStage(index)}
                          className={`relative px-6 py-4 rounded-t-xl transition-all duration-300 flex items-center gap-3 ${
                            activeStage === index 
                              ? "bg-white text-secondary-900 shadow-sm border-t border-x border-secondary-200 z-10" 
                              : "bg-secondary-100/50 text-secondary-500 hover:bg-secondary-100 hover:text-secondary-700 border-t border-x border-transparent"
                          }`}
                        >
                          <div className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold transition-colors ${
                            activeStage === index ? "bg-primary-100 text-primary-600" : "bg-secondary-200 text-secondary-500"
                          }`}>
                             {stage.version}
                          </div>
                          <span className="font-bold text-sm lg:text-base">{stage.title}</span>
                          
                          {/* Bottom line hider for active tab */}
                          {activeStage === index && (
                             <div className="absolute -bottom-px left-0 right-0 h-px bg-white"></div>
                          )}
                        </button>
                     ))}
                  </div>
               </div>

               {/* Bottom: Content Area */}
               <div className="flex-1 bg-white p-8 lg:p-12">
                  <AnimatePresence mode="wait">
                     <motion.div
                       key={activeStage}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       transition={{ duration: 0.3 }}
                       className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                     >
                        {/* Left: Text Details */}
                        <div>
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-100 text-secondary-600 text-xs font-bold uppercase tracking-wider mb-6">
                              Ver {evolutionStages[activeStage].version} 阶段特征
                           </div>
                           
                           <h4 className="text-2xl font-bold text-secondary-900 mb-6">
                              {evolutionStages[activeStage].title}
                           </h4>

                           <div className="space-y-6 mb-8">
                              <div>
                                 <h5 className="text-sm font-bold text-secondary-400 uppercase tracking-wider mb-3">核心功能</h5>
                                 <ul className="space-y-3">
                                    {evolutionStages[activeStage].features.map((feature, idx) => (
                                       <li key={idx} className="flex items-start gap-3">
                                          <div className="w-5 h-5 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                             <CheckCircle2 size={12} />
                                          </div>
                                          <span className="text-secondary-700">{feature}</span>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                              
                              <div className="bg-primary-50/50 p-5 rounded-xl border border-primary-100">
                                 <h5 className="text-sm font-bold text-primary-700 uppercase tracking-wider mb-2">阶段总结</h5>
                                 <p className="text-secondary-700 font-medium leading-relaxed">
                                    {evolutionStages[activeStage].characteristics}
                                 </p>
                              </div>
                           </div>
                        </div>

                        {/* Right: Image Display */}
                        <div className="flex justify-center bg-secondary-50 rounded-2xl p-6 border border-secondary-100 relative overflow-hidden group">
                           <div className="absolute inset-0 bg-grid-black/[0.03] bg-[length:20px_20px]"></div>
                           <div className="relative z-10 w-full max-w-[220px] shadow-2xl rounded-[2rem] border-[4px] border-secondary-900 overflow-hidden bg-white">
                              <img 
                                src={evolutionStages[activeStage].image} 
                                alt={evolutionStages[activeStage].title}
                                className="w-full h-auto object-cover"
                              />
                           </div>
                        </div>
                     </motion.div>
                  </AnimatePresence>
               </div>
            </div>
          </motion.div>

          {/* Other Features Grid */}
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
              {feature.layout === "lifecycle" ? (
                <div className="flex flex-col lg:flex-row gap-8 p-8 rounded-3xl bg-white border border-secondary-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                   {/* Left Column: Info & Logic */}
                   <div className="lg:w-1/3 flex flex-col gap-6">
                      {/* Header Info */}
                      <div>
                         <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-4">
                            {feature.icon}
                         </div>
                         <h3 className="text-xl font-bold text-secondary-900">{feature.title}</h3>
                         <p className="text-xs font-medium text-secondary-400 uppercase tracking-wider mt-1">{feature.subtitle}</p>
                      </div>
                      
                      <p className="text-secondary-600 font-medium leading-relaxed">
                         {feature.desc}
                      </p>
              
                      {/* PMS Capabilities */}
                      <div className="bg-secondary-50 p-5 rounded-xl border border-secondary-100">
                         <h4 className="text-sm font-bold text-secondary-900 mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                            PMS 深度打通
                         </h4>
                         <div className="flex flex-wrap gap-2 mb-3">
                            {["实时获取订单", "判断预订/入住状态", "获取房型/时间", "动态推荐逻辑"].map((cap, idx) => (
                               <span key={idx} className="px-2 py-1 bg-white border border-secondary-200 rounded text-xs text-secondary-600">
                                  {cap}
                               </span>
                            ))}
                         </div>
                         <p className="text-xs text-secondary-400">
                            已支持主流 PMS：乐旅系统、西软系统（贵州饭店体系）
                         </p>
                      </div>
              
                      {/* Closed Loop Logic */}
                      <div>
                         <h4 className="text-sm font-bold text-secondary-900 mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                            闭环经营逻辑
                         </h4>
                         <div className="flex items-center justify-between text-xs font-bold text-secondary-700 bg-white p-3 rounded-xl border border-secondary-200 shadow-sm">
                            <span>理解</span>
                            <ChevronRight size={14} className="text-secondary-300" />
                            <span>判断</span>
                            <ChevronRight size={14} className="text-secondary-300" />
                            <span>执行</span>
                            <ChevronRight size={14} className="text-secondary-300" />
                            <span>反馈</span>
                         </div>
                      </div>
                   </div>
              
                   {/* Right Column: Phases & Images */}
                   <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {feature.phases?.map((phase, i) => (
                         <div key={i} className="flex flex-col gap-3 p-4 bg-secondary-50/50 rounded-2xl border border-secondary-100 hover:border-primary-100 transition-colors group/phase">
                            <div className="flex items-center gap-2">
                               <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-700 font-bold text-xs">
                                  {i + 1}
                               </span>
                               <h4 className="font-bold text-secondary-900 text-sm">{phase.title}</h4>
                            </div>
                            
                            <ul className="space-y-1.5 mb-2 min-h-[60px]">
                               {phase.items.map((item, j) => (
                                  <li key={j} className="flex items-center gap-1.5 text-xs text-secondary-600">
                                     <div className="w-1 h-1 rounded-full bg-primary-400"></div>
                                     {item}
                                  </li>
                               ))}
                            </ul>
              
                            <div className="mt-auto bg-white rounded-lg overflow-hidden border border-secondary-200 shadow-sm relative h-[360px] p-2">
                               <img 
                                 src={phase.image} 
                                 alt={phase.title} 
                                 className="w-full h-full object-contain transition-transform duration-700 group-hover/phase:scale-105"
                               />
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
              ) : feature.layout === "multi-agent" ? (
                <div className="flex flex-col lg:flex-row gap-8 p-8 rounded-3xl bg-white border border-secondary-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                   {/* Left: Matrix & Logic */}
                   <div className="lg:w-1/2 flex flex-col gap-8">
                      <div>
                         <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600">
                               {feature.icon}
                            </div>
                            <div>
                               <h3 className="text-xl font-bold text-secondary-900">{feature.title}</h3>
                               <p className="text-xs font-medium text-secondary-400 uppercase tracking-wider mt-1">{feature.subtitle}</p>
                            </div>
                         </div>
                         <p className="text-secondary-600 font-medium leading-relaxed">
                            {feature.desc}
                         </p>
                      </div>

                      {/* Agent Matrix */}
                      <div>
                         <h4 className="text-sm font-bold text-secondary-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                            角色化智能体矩阵
                         </h4>
                         <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {(feature.roles as any[])?.map((role, i) => (
                               <div key={i} className="flex items-center gap-2 p-3 bg-secondary-50 rounded-xl border border-secondary-100 hover:border-primary-200 transition-colors">
                                  <span className="text-lg">{role.icon}</span>
                                  <span className="text-sm font-bold text-secondary-700">{role.name}</span>
                               </div>
                            ))}
                         </div>
                      </div>

                      {/* Routing Logic */}
                      <div className="bg-primary-50/30 p-6 rounded-2xl border border-primary-100">
                         <h4 className="text-sm font-bold text-secondary-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                            智能路由调度系统
                         </h4>
                         <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 justify-between">
                               {(feature.routingLogic as any[])?.map((logic, i) => (
                                  <div key={i} className="px-3 py-1.5 bg-white border border-secondary-200 rounded-lg text-xs font-bold text-secondary-600 shadow-sm">
                                     {logic}
                                  </div>
                               ))}
                            </div>
                            <div className="flex items-center justify-center text-primary-400">
                               <ChevronRight className="rotate-90" />
                            </div>
                            <div className="bg-primary-600 text-white text-center py-2 rounded-lg text-sm font-bold shadow-md">
                               自动调度最合适的数字分身
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Right: Images (PC + Mobile) */}
                   <div className="lg:w-1/2 relative min-h-[400px] flex items-center justify-center bg-secondary-50 rounded-2xl border border-secondary-100 overflow-hidden">
                      {/* Background Decoration */}
                      <div className="absolute inset-0 bg-grid-black/[0.03] bg-[length:20px_20px]"></div>
                      
                      {/* PC Image */}
                       <div className="absolute top-8 right-4 w-[85%] shadow-2xl rounded-lg border border-secondary-200 overflow-hidden bg-white z-10">
                          <img 
                            src={(feature.images as any)?.pc} 
                            alt="PC Interface" 
                            className="w-full h-auto"
                          />
                       </div>
 
                       {/* Mobile Image */}
                       <div className="absolute bottom-8 left-8 w-[35%] shadow-2xl rounded-[2rem] border-[6px] border-secondary-800 overflow-hidden bg-white z-20">
                          <img 
                            src={(feature.images as any)?.mobile} 
                            alt="Mobile Interface" 
                            className="w-full h-auto"
                          />
                       </div>
                   </div>
                </div>
              ) : feature.layout === "hardware" ? (
                <div className="flex flex-col lg:flex-row gap-8 p-8 rounded-3xl bg-white border border-secondary-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                   {/* Left: Info & Points */}
                   <div className="lg:w-1/2 flex flex-col gap-6">
                      <div>
                         <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600">
                               {feature.icon}
                            </div>
                            <div>
                               <h3 className="text-xl font-bold text-secondary-900">{feature.title}</h3>
                               <p className="text-xs font-medium text-secondary-400 uppercase tracking-wider mt-1">{feature.subtitle}</p>
                            </div>
                         </div>
                         <p className="text-secondary-600 font-medium leading-relaxed">
                            {feature.desc}
                         </p>
                      </div>

                      {/* Hardware Points */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {(feature as any).points?.map((point: any, i: number) => (
                            <div key={i} className="p-4 bg-secondary-50 rounded-xl border border-secondary-100 hover:border-primary-100 transition-colors">
                               <div className="flex items-center gap-2 mb-2">
                                  <span className="text-xl">{point.icon}</span>
                                  <h4 className="font-bold text-secondary-900 text-sm">{point.title}</h4>
                               </div>
                               <p className="text-xs text-secondary-500 leading-relaxed">
                                  {point.desc}
                               </p>
                            </div>
                         ))}
                      </div>
                   </div>

                   {/* Right: Dual Image Display */}
                   <div className="lg:w-1/2 flex flex-col gap-4">
                      <div className="h-[200px] bg-secondary-50 rounded-2xl border border-secondary-100 overflow-hidden relative group">
                         <div className="absolute inset-0 bg-grid-black/[0.03] bg-[length:20px_20px]"></div>
                         {/* Image 1 */}
                         <div className="relative h-full flex items-center justify-center p-4">
                            <img 
                              src={(feature.images as any)[0]} 
                              alt="Hardware Integration 1" 
                              className="w-full h-full object-contain shadow-sm rounded-lg"
                            />
                         </div>
                      </div>
                      <div className="h-[200px] bg-secondary-50 rounded-2xl border border-secondary-100 overflow-hidden relative group">
                         <div className="absolute inset-0 bg-grid-black/[0.03] bg-[length:20px_20px]"></div>
                         {/* Image 2 */}
                         <div className="relative h-full flex items-center justify-center p-4">
                            <img 
                              src={(feature.images as any)[1]} 
                              alt="Hardware Integration 2" 
                              className="w-full h-full object-contain shadow-sm rounded-lg"
                            />
                         </div>
                      </div>
                   </div>
                </div>
              ) : feature.layout === "management" ? (
                <div className="flex flex-col gap-8 p-8 rounded-3xl bg-white border border-secondary-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                   {/* Header */}
                   <div className="flex flex-col md:flex-row gap-6 items-start justify-between">
                      <div className="flex items-center gap-4">
                         <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600">
                            {feature.icon}
                         </div>
                         <div>
                            <h3 className="text-xl font-bold text-secondary-900">{feature.title}</h3>
                            <p className="text-xs font-medium text-secondary-400 uppercase tracking-wider mt-1">{feature.subtitle}</p>
                         </div>
                      </div>
                      <p className="text-secondary-600 font-medium leading-relaxed max-w-xl md:text-right">
                         {feature.desc}
                      </p>
                   </div>

                   {/* Tabs / Grid for 3 Pillars */}
                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {(feature as any).tabs?.map((tab: any, i: number) => (
                         <div key={i} className="flex flex-col bg-secondary-50 rounded-2xl overflow-hidden border border-secondary-100 hover:border-primary-200 hover:shadow-md transition-all group/card">
                            {/* Image Area */}
                            <div className="h-48 overflow-hidden bg-white border-b border-secondary-100 relative">
                               <img 
                                 src={tab.image} 
                                 alt={tab.title} 
                                 className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover/card:scale-105"
                               />
                               <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-700 shadow-sm border border-primary-100">
                                  0{i + 1}
                               </div>
                            </div>
                            
                            {/* Content Area */}
                            <div className="p-5 flex flex-col flex-grow">
                               <h4 className="text-lg font-bold text-secondary-900 mb-2">{tab.title}</h4>
                               <p className="text-xs text-secondary-500 leading-relaxed mb-4 flex-grow">
                                  {tab.desc}
                               </p>
                               
                               {/* Feature Tags */}
                               <div className="flex flex-wrap gap-1.5 mt-auto">
                                  {tab.features.map((tag: string, j: number) => (
                                     <span key={j} className="px-2 py-1 bg-white border border-secondary-200 rounded text-[10px] font-bold text-secondary-600">
                                        {tag}
                                     </span>
                                  ))}
                               </div>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
              ) : (
              <div className="flex flex-col lg:flex-row gap-8 lg:items-center p-8 rounded-3xl bg-white border border-secondary-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                {/* Text Column (Merged) */}
                <div className="lg:w-1/3 flex-shrink-0 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900">{feature.title}</h3>
                      <p className="text-xs font-medium text-secondary-400 uppercase tracking-wider mt-1">{feature.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-secondary-600 font-medium leading-relaxed mb-6">
                    {feature.desc}
                  </p>

                  <div className="bg-secondary-50 p-4 rounded-xl border border-secondary-100">
                     <h4 className="text-sm font-bold text-secondary-900 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                      核心价值
                     </h4>
                     {(feature as any).capabilities ? (
                        <div className="space-y-3">
                           {(feature as any).capabilities.map((cap: any, idx: number) => (
                              <div key={idx}>
                                 <span className="text-xs font-bold text-secondary-700 block mb-1">{cap.label}</span>
                                 <div className="flex flex-wrap gap-1.5">
                                    {cap.items.map((item: string, j: number) => (
                                       <span key={j} className="text-xs px-2 py-1 bg-white border border-secondary-200 rounded text-secondary-600">
                                          {item}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                           ))}
                        </div>
                     ) : (
                        <p className="text-sm text-secondary-500 leading-relaxed">
                          {feature.detail}
                        </p>
                     )}
                  </div>
                  
                  <button className="mt-6 text-primary-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all self-start">
                     了解更多 <ChevronRight size={14} />
                  </button>
                </div>

                {/* Image Display Column */}
                <div className="lg:w-2/3 flex-grow">
                  {Array.isArray(feature.images) ? (
                    <div className="grid grid-cols-4 gap-3">
                      {feature.images.map((img, i) => (
                        <div key={i} className="flex flex-col gap-3">
                           {/* Step Indicator */}
                           <div className="flex items-center gap-2">
                              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 text-xs font-bold">
                                 {i + 1}
                              </span>
                              <div className="h-px bg-secondary-200 flex-1"></div>
                           </div>
                           
                           {/* Image Container */}
                           <div className="aspect-[9/16] bg-secondary-50 rounded-xl border border-secondary-200 overflow-hidden relative group/img shadow-sm hover:shadow-md transition-all">
                             <img 
                               src={img} 
                               alt={`${feature.title} step ${i + 1}`} 
                               className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                             />
                           </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="aspect-[21/9] bg-secondary-50 rounded-xl border-2 border-dashed border-secondary-200 flex items-center justify-center relative overflow-hidden group-hover:bg-secondary-100 transition-colors">
                      <div className="text-center text-secondary-400">
                         <p className="text-sm font-medium">功能演示配图</p>
                         <p className="text-xs mt-1 opacity-70">建议展示 UI 界面或场景图</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              )}
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
