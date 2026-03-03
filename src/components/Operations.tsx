import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, MessageSquare, Hotel, MapPin, BarChart3, FileSpreadsheet, Target, ThumbsUp, Lightbulb, X, Expand } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

// Excel Data Extracted
const trainingPlanData = [
  { id: 1, name: "贵州饭店•贵宾楼", area: "贵阳", type: "行政豪华型", star: "五星级", rooms: "516间", operator: "刘锐奇", date: "2025.12.10", feedback: "可稳定支撑酒店对客服务场景，能高效响应客人物品配送等基础服务需求，能一定程度减轻工作人员压力", demand: "1、建议打通pms系统，便于为住客提供智能体订房以及更多的主动服务。\n2、建议打通停车场系统，便于为住客提供更加便捷的停车服务。\n3、建议优化天气展示，增加未来7天的天气查询。" },
  { id: 2, name: "匀东贵州饭店", area: "黔南都匀", type: "商务型酒店", star: "五星级", rooms: "220间", operator: "刘鑫", date: "2025.11.3", feedback: "对目前功能较为满意，AI问答确实为工作人员减轻了一些工作量", demand: "1、用户提交工单后可以自动拨打电话至对应部门座机，提升响应效率\n2、增加餐饮送餐工单以及餐厅预订服务供工单\n3、用户提交工单后可与对应部门有临时的沟通渠道，方便酒店与客户之间的服务交流。" },
  { id: 3, name: "逸客酒店", area: "黔西南兴义", type: "舒适型", star: "无", rooms: 48, operator: "褚园群", date: "2025.11.26", feedback: "酒店使用较为积极，自酒店上线以来时不时会有客人提交工单，单处理速度也比较快。酒店也表示在节假日旺季会举办相应酒店活动引导用户使用智能体。", demand: "" },
  { id: 4, name: "南源酒店", area: "黔西南兴义", type: "舒适性", star: "无", rooms: 54, operator: "罗正妮", date: "2025.11.26", feedback: "该酒店自上线以来陆续有工单且工单且处理速度较快，与酒店沟通回访时，酒店表示对目前酒店智能体功能比较满意，一定程度上减少了酒店前台的工作压力暂无新增需求", demand: "" },
  { id: 5, name: "柏霖温泉酒店", area: "黔南龙里", type: "舒适型", star: "无", rooms: 70, operator: "石贵萍", date: "2025.12.23", feedback: "酒店刚刚上线，对于智能体功能基本满意，明确会在使用过程中不断提前建议完善功能。", demand: "1、由于该酒店属于温泉酒店，酒店方面希望在知识库新增“其他服务”一栏，方便其填入旗下温泉、康养等服务" },
  { id: 6, name: "佰利世纪酒店", area: "黔南都匀", type: "经济型", star: "无", rooms: "93间", operator: "田野", date: "2025.12.19", feedback: "酒店新上线，愿意在住客入住期间引导住客使用智能体小程序。", demand: "" },
  { id: 7, name: "首杨麓湖酒店", area: "贵阳", type: "商务型酒店", star: "无", rooms: "101间", operator: "刘彬", date: "2025.11.28", feedback: "酒店上线前各部门工作人员进行了详细验收，确保智能体知识库的完整度，目前用户试用反馈不错，工作人员也认为减少了用户的高频问题回复次数。", demand: "" },
  { id: 8, name: "珑庭芳大酒店", area: "黔南龙里", type: "商务型酒店", star: "四星级", rooms: "125间", operator: "黄维维", date: "2025.9.9", feedback: "由于工单总量较少，前台暂未形成定时查看、及时处理的工作习惯，导致服务响应有时出现延迟，已于前台负责人沟通交流，确保有工单第一时间处理。", demand: "1、针对前期酒店反馈的“房号自动关联”与“工单后台受理”，已完成优化并进行了专项回访，目前运行稳定。" },
  { id: 9, name: "安顺拾光民宿", area: "安顺", type: "舒适型", star: "无", rooms: "15间", operator: "陈天云", date: "2025.12.10", feedback: "酒店方对智能体的使用较为满意，暂时没有反馈。", demand: "1、店长对小程序的期待值比较高，希望AI推荐旅游攻略时能着重推民宿附近地标的旅游地，同时希望附近的旅游景点，吃喝玩能与民宿互推。" },
  { id: 10, name: "圣丰酒店", area: "贵阳", type: "豪华型酒店", star: "四星级", rooms: "141间", operator: "谭静雯", date: "2025.12.5", feedback: "针对使用率低的问题与房务部经理进行沟通后，酒店方安排各班前台工作人员配合，尽量多的给前来办理入住的每一位客人推荐扫码使用酒店智能体；", demand: "1、客人在扫大堂的二维码的时，必须要绑定房间号才行，然而现无法手动输入或退出房间，只能回房间扫码登录。造成前台推介后客人认为麻烦觉得有事还不如直接口头给前台说。" },
  { id: 11, name: "夜郎智慧酒店", area: "惠水", type: "经济型", star: "无", rooms: "72间", operator: "周舟", date: "2025.12.10", feedback: "由于前台没有音响设备加上该酒店采取夜班无人值守的形式，工单响应时间较长，但已与前台负责人沟通，确保前台上班第一时间处理工单，避免客诉。", demand: "1、酒店负责人对吐槽码功能期待值较高，希望尽快上线体验。" },
  { id: 12, name: "公羽家设计师酒店", area: "贵阳", type: "经济型", star: "无", rooms: "40间", operator: "王政怡", date: "2025.12.11", feedback: "酒店对目前酒店智能体功能以及开发进度表示认可以及满意。", demand: "1、酒店建议停车工单录入时能增加提醒离场的信息" }
];

export default function Operations() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="operations" className="py-24 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          number="02" 
          title="运营情况" 
          subtitle="数据驱动的卓越表现，实时的运营成效展示"
        />

        <div className="space-y-20">
          
          {/* 1. 合作企业 (Cooperation) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary-100">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Hotel size={20} />
                   </div>
                   <h3 className="text-xl font-bold text-secondary-900">合作企业</h3>
                </div>
                
                <div className="space-y-6">
                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-secondary-50 p-4 rounded-xl">
                         <p className="text-sm text-secondary-500 mb-1">上线酒店</p>
                         <p className="text-3xl font-bold text-secondary-900">169<span className="text-sm font-normal text-secondary-500 ml-1">家</span></p>
                      </div>
                      <div className="bg-secondary-50 p-4 rounded-xl">
                         <p className="text-sm text-secondary-500 mb-1">签约待上线</p>
                         <p className="text-3xl font-bold text-secondary-900">340<span className="text-sm font-normal text-secondary-500 ml-1">家</span></p>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl border border-green-100">
                      <TrendingUp className="text-green-600" />
                      <div>
                         <p className="text-sm text-green-800 font-medium">环比增长</p>
                         <p className="text-2xl font-bold text-green-600">201.18%</p>
                      </div>
                   </div>

                   <div className="border-t border-secondary-100 pt-6">
                      <h4 className="font-medium text-secondary-900 mb-3 flex items-center gap-2">
                         <MapPin size={16} className="text-secondary-400" />
                         省外推广计划
                      </h4>
                      <div className="flex flex-wrap gap-2">
                         <span className="px-3 py-1 bg-secondary-100 text-secondary-600 rounded-full text-sm">四川省</span>
                         <span className="px-3 py-1 bg-secondary-100 text-secondary-600 rounded-full text-sm">云南省</span>
                         <span className="px-3 py-1 bg-secondary-100 text-secondary-600 rounded-full text-sm">河南开封</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* 2. 经营数据 (Business Data) */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary-100">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                      <BarChart3 size={20} />
                   </div>
                   <h3 className="text-xl font-bold text-secondary-900">经营数据</h3>
                </div>

                <div className="space-y-8">
                   {/* Overall Stats */}
                   <div>
                      <h4 className="text-sm font-bold text-secondary-400 uppercase tracking-wider mb-4">整体情况</h4>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-50 rounded-lg text-purple-600"><MessageSquare size={18} /></div>
                            <div>
                               <p className="text-2xl font-bold text-secondary-900">36,610</p>
                               <p className="text-xs text-secondary-500">累计AI问答数</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-50 rounded-lg text-purple-600"><Users size={18} /></div>
                            <div>
                               <p className="text-2xl font-bold text-secondary-900">20,985</p>
                               <p className="text-xs text-secondary-500">累计访问量</p>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Specific Hotel Stats */}
                   <div className="bg-secondary-50 rounded-xl p-5 border border-secondary-100">
                      <h4 className="font-bold text-secondary-900 mb-4 flex justify-between items-center">
                         贵州饭店·贵宾楼
                         <span className="text-xs font-normal text-white bg-secondary-900 px-2 py-0.5 rounded">标杆案例</span>
                      </h4>
                      <div className="space-y-4">
                         <div>
                            <p className="text-xs text-secondary-500 mb-1">两会期间</p>
                            <div className="flex justify-between text-sm">
                               <span>AI问答: <span className="font-medium text-secondary-900">342条</span></span>
                               <span>访问量: <span className="font-medium text-secondary-900">190人次</span></span>
                            </div>
                         </div>
                         <div className="w-full h-px bg-secondary-200"></div>
                         <div>
                            <p className="text-xs text-secondary-500 mb-1">上周末 (2.28-3.1)</p>
                            <div className="flex justify-between text-sm">
                               <span>AI问答: <span className="font-medium text-secondary-900">74条</span></span>
                               <span>访问量: <span className="font-medium text-secondary-900">70人次</span></span>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* 3. 陪跑计划 (Training Plan) - Updated with Excel Data */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary-100">
             <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <FileSpreadsheet size={20} />
                   </div>
                   <h3 className="text-xl font-bold text-secondary-900">陪跑计划反馈</h3>
                </div>
                <div className="flex items-center gap-2">
                   <button 
                      onClick={() => setIsModalOpen(true)}
                      className="flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                   >
                      <Expand size={16} />
                      查看完整报表
                   </button>
                </div>
             </div>
             
             <div className="overflow-x-auto rounded-xl border border-secondary-200">
                <table className="w-full text-sm text-left">
                   <thead className="bg-secondary-50 text-secondary-700 font-medium">
                      <tr>
                         <th className="px-4 py-3 whitespace-nowrap">酒店名称</th>
                         <th className="px-4 py-3 whitespace-nowrap">地区</th>
                         <th className="px-4 py-3 whitespace-nowrap">类型</th>
                         <th className="px-4 py-3 whitespace-nowrap">上线时间</th>
                         <th className="px-4 py-3 min-w-[200px]">使用感受</th>
                         <th className="px-4 py-3 min-w-[200px]">改进需求</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-secondary-100 bg-white">
                      {trainingPlanData.slice(0, 5).map((row) => (
                         <tr key={row.id} className="hover:bg-secondary-50/50 transition-colors">
                            <td className="px-4 py-3 font-medium text-secondary-900">{row.name}</td>
                            <td className="px-4 py-3 text-secondary-600">{row.area}</td>
                            <td className="px-4 py-3 text-secondary-600">
                               <span className="px-2 py-0.5 bg-secondary-100 rounded text-xs">{row.type}</span>
                            </td>
                            <td className="px-4 py-3 text-secondary-500 whitespace-nowrap">{row.date}</td>
                            <td className="px-4 py-3 text-secondary-600">
                               <div className="flex gap-2">
                                  <ThumbsUp size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                                  <p className="line-clamp-2" title={row.feedback}>{row.feedback}</p>
                               </div>
                            </td>
                            <td className="px-4 py-3 text-secondary-600">
                               <div className="flex gap-2">
                                  <Lightbulb size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                                  <p className="line-clamp-2" title={row.demand}>{row.demand}</p>
                               </div>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
             <div className="mt-4 text-center">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="text-xs text-secondary-400 hover:text-emerald-600 transition-colors flex items-center gap-1 mx-auto"
                >
                  显示部分精选反馈，点击查看 12 家酒店完整详细记录
                  <Expand size={12} />
                </button>
             </div>
          </div>

          {/* 4. 经营计划 (Business Plan) */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary-100">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                   <TrendingUp size={20} />
                </div>
                <h3 className="text-xl font-bold text-secondary-900">经营计划</h3>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Image 1: 一文读懂 */}
                <div className="space-y-3">
                   <div className="rounded-xl overflow-hidden shadow-sm border border-secondary-200 group cursor-pointer hover:shadow-md transition-all">
                      <img 
                        src="/303/assets/yiwen.jpg" 
                        alt="一文读懂酒店智能体" 
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />
                   </div>
                   <p className="text-center font-medium text-secondary-900">一文读懂酒店智能体</p>
                </div>

                {/* Image 2: 一图看懂 */}
                <div className="space-y-3">
                   <div className="rounded-xl overflow-hidden shadow-sm border border-secondary-200 group cursor-pointer hover:shadow-md transition-all">
                      <img 
                        src="/303/assets/yitu.jpg" 
                        alt="一图看懂酒店智能体" 
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />
                   </div>
                   <p className="text-center font-medium text-secondary-900">一图看懂酒店智能体</p>
                </div>
             </div>

             {/* Monthly Goal - Highlighted */}
             <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white shadow-lg flex items-center justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Target size={100} />
                </div>
                <div className="relative z-10 flex items-center gap-4">
                   <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Target size={24} className="text-white" />
                   </div>
                   <div>
                      <h4 className="text-lg font-bold text-white/90">3月份任务目标</h4>
                      <p className="text-2xl font-black tracking-tight">完成 2000 家酒店上线</p>
                   </div>
                </div>
                <motion.div 
                   initial={{ scale: 0.9 }}
                   animate={{ scale: 1.1 }}
                   transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                   className="relative z-10 bg-white text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm hidden sm:block"
                >
                   冲刺目标
                </motion.div>
             </div>
          </div>

        </div>
      </div>

      {/* Full Screen Table Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-secondary-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-7xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-secondary-100 bg-secondary-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <FileSpreadsheet size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900">陪跑计划反馈详情</h3>
                    <p className="text-sm text-secondary-500">共 {trainingPlanData.length} 家酒店反馈记录</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-secondary-100 text-secondary-500 hover:bg-secondary-200 hover:text-secondary-900 flex items-center justify-center transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 overflow-auto p-6">
                <div className="overflow-hidden rounded-xl border border-secondary-200">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-secondary-50 text-secondary-700 font-medium sticky top-0 z-10">
                      <tr>
                         <th className="px-4 py-3 whitespace-nowrap bg-secondary-50">酒店名称</th>
                         <th className="px-4 py-3 whitespace-nowrap bg-secondary-50">地区</th>
                         <th className="px-4 py-3 whitespace-nowrap bg-secondary-50">类型</th>
                         <th className="px-4 py-3 whitespace-nowrap bg-secondary-50">星级</th>
                         <th className="px-4 py-3 whitespace-nowrap bg-secondary-50">房间数</th>
                         <th className="px-4 py-3 whitespace-nowrap bg-secondary-50">运营负责人</th>
                         <th className="px-4 py-3 whitespace-nowrap bg-secondary-50">上线时间</th>
                         <th className="px-4 py-3 min-w-[300px] bg-secondary-50">使用感受</th>
                         <th className="px-4 py-3 min-w-[300px] bg-secondary-50">改进需求</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary-100 bg-white">
                      {trainingPlanData.map((row) => (
                         <tr key={row.id} className="hover:bg-secondary-50/50 transition-colors">
                            <td className="px-4 py-3 font-medium text-secondary-900 whitespace-nowrap">{row.name}</td>
                            <td className="px-4 py-3 text-secondary-600 whitespace-nowrap">{row.area}</td>
                            <td className="px-4 py-3 text-secondary-600 whitespace-nowrap">
                               <span className="px-2 py-0.5 bg-secondary-100 rounded text-xs">{row.type}</span>
                            </td>
                            <td className="px-4 py-3 text-secondary-600 whitespace-nowrap">{row.star}</td>
                            <td className="px-4 py-3 text-secondary-600 whitespace-nowrap">{row.rooms}</td>
                            <td className="px-4 py-3 text-secondary-600 whitespace-nowrap">{row.operator}</td>
                            <td className="px-4 py-3 text-secondary-500 whitespace-nowrap">{row.date}</td>
                            <td className="px-4 py-3 text-secondary-600 align-top">
                               <div className="flex gap-2">
                                  <ThumbsUp size={14} className="text-emerald-500 flex-shrink-0 mt-1" />
                                  <p className="whitespace-pre-wrap leading-relaxed">{row.feedback}</p>
                               </div>
                            </td>
                            <td className="px-4 py-3 text-secondary-600 align-top">
                               <div className="flex gap-2">
                                  <Lightbulb size={14} className="text-amber-500 flex-shrink-0 mt-1" />
                                  <p className="whitespace-pre-wrap leading-relaxed">{row.demand || "暂无需求"}</p>
                               </div>
                            </td>
                         </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
