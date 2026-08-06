import React, { useState } from 'react';
import { ShieldCheck, XCircle, CheckCircle2, Zap, ArrowRight, Sparkles, Building2, Factory, Cpu, Flame, Award, HelpCircle } from 'lucide-react';

interface CompetitorComparisonProps {
  onOpenModal: () => void;
}

export const CompetitorComparison: React.FC<CompetitorComparisonProps> = ({ onOpenModal }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('machinery');

  const industryData: Record<string, {
    name: string;
    icon: React.ElementType;
    tag: string;
    targetMarkets: string[];
    fbTags: string[];
    painPoint: string;
    kefanfanSolution: string;
    avgCostReduction: string;
    conversionBoost: string;
    sampleCase: string;
  }> = {
    machinery: {
      name: '工业机械与自动化设备',
      icon: Factory,
      tag: 'B2B 重工业 / 高客单价',
      targetMarkets: ['欧洲 (德国/波兰)', '东南亚 (越南/印尼)', '南美 (巴西/智利)', '中东 (阿联酋/沙特)'],
      fbTags: ['#CNC_Machining', '#Packaging_Machine', '#Industrial_Automation', 'Solar_Inverter_Buyer'],
      painPoint: '传统展会费用极其高昂（单次10万+），邮件开发信回复率低于 0.5%，阿里等B2B平台陷入价格战。',
      kefanfanSolution: '通过客番番指纹环境对 FB 工业社群与竞品 Page 粉丝精准抓取，使用订制推 3D/视频广告定向投放工厂采购经理，自动引流至 WhatsApp 直接对接技术方案。',
      avgCostReduction: '68%',
      conversionBoost: '4.2 倍',
      sampleCase: '无锡某包装机械制造厂，月获客由原本 12 个提升至 58 个有效工厂采购询盘。'
    },
    hardware: {
      name: '五金建材与家居门窗',
      icon: Building2,
      tag: '建材工程 / 批发代理',
      targetMarkets: ['北美 (美国/加拿大)', '中东 (迪拜/卡塔尔)', '拉美 (墨西哥)', '澳洲'],
      fbTags: ['#Building_Materials', '#Aluminum_Profile', '#Hardware_Importer', '#Contractor_Sourcing'],
      painPoint: '海关数据获取的都是过期中介，买家已被打扰无数次，几乎不回复邮件。',
      kefanfanSolution: '客番番截流助手监控海外主流建筑博主与同行帖子动态，发现带“Price/RFQ/Brochure”关键词评测后，0.1s 自动私信触达并发送 Catalog。',
      avgCostReduction: '62%',
      conversionBoost: '3.8 倍',
      sampleCase: '佛山某铝合金型材出口商，订制推上线首月即签约迪拜工程商 18 万美元订单。'
    },
    electronics: {
      name: '电子消费品与新能源光伏',
      icon: Cpu,
      tag: '高频迭代 / 渠道分销',
      targetMarkets: ['欧洲', '北美', '日韩', '东南亚'],
      fbTags: ['#Solar_Inverter', '#Lithium_Battery', '#EV_Charger', '#Consumer_Electronics'],
      painPoint: '普通 FB 广告容易被认定为高风险违规封号，代理商服务费高昂且不保证询盘质量。',
      kefanfanSolution: '独家云真机指纹隔离环境，零关联防封号；搭配订制推 Meta Pixel 归因，精准寻找过去 7 天有光伏逆变器/电池采购行为的独立站买家。',
      avgCostReduction: '74%',
      conversionBoost: '5.1 倍',
      sampleCase: '深圳某储能电池品牌，单次询盘成本从原本 $85 骤降至 $18，月获客突破 300+ 条。'
    },
    auto: {
      name: '汽摩配件与机械部件',
      icon: Flame,
      tag: 'SKU繁多 / 后市场采购',
      targetMarkets: ['南美', '中东', '俄罗斯/中亚', '非洲'],
      fbTags: ['#Auto_Parts_Supplier', '#Engine_Components', '#Brake_Pad_Exporter', '#Car_Accessories'],
      painPoint: '配件 SKU 极多，买家询价往往附带 OE 编号，传统营销很难快速精准匹配。',
      kefanfanSolution: '客番番 AIGC 智能回复，自动识图并解析 OE 编码，在 FB 私信与 WhatsApp 中秒级自动匹配报价单，大大提升订单转化速度。',
      avgCostReduction: '59%',
      conversionBoost: '3.5 倍',
      sampleCase: '瑞安某刹车片工厂，成功通过客番番批量对接中东 14 家汽车后市场零部件连锁经销商。'
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4">
            <Award className="w-4 h-4 text-blue-400" />
            <span>做对决策 · 拒绝多花冤枉钱</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            为什么外贸领军企业都放弃传统渠道，选择 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">客番番·订制推</span>？
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            对比市面上四大主流获客方式，看客番番如何通过技术赋能帮你实现【降本 65% + 询盘质量翻倍】
          </p>
        </div>

        {/* Competitor Comparison Matrix Table */}
        <div className="overflow-x-auto mb-20">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-800 text-sm">
                <th className="py-4 px-5 text-slate-400 font-medium w-1/5">对比维度</th>
                <th className="py-4 px-5 text-slate-400 font-medium w-1/5">传统B2B平台/展会</th>
                <th className="py-4 px-5 text-slate-400 font-medium w-1/5">海关数据/群发软件</th>
                <th className="py-4 px-5 text-slate-400 font-medium w-1/5">市面通用FB代投服务</th>
                <th className="py-4 px-5 bg-gradient-to-b from-blue-600/20 to-indigo-600/20 text-blue-300 font-bold border-t-2 border-x border-blue-500 rounded-t-xl w-1/5 text-base">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span>客番番·订制推</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-sm">
              {/* Row 1 */}
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-5 font-bold text-slate-200">获客主动性</td>
                <td className="py-4 px-5 text-slate-400">被动等询盘，极易陷入低价竞价比价</td>
                <td className="py-4 px-5 text-slate-400">盲目群发，退信率高达 95%+</td>
                <td className="py-4 px-5 text-slate-400">依赖买家主动表单，流失率高</td>
                <td className="py-4 px-5 bg-blue-950/40 border-x border-blue-500/30 text-emerald-300 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>主动截流+多渠道自动化精准私信</span>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-5 font-bold text-slate-200">账号与资金安全</td>
                <td className="py-4 px-5 text-slate-400">平台规则苛刻，违规封店铺风险</td>
                <td className="py-4 px-5 text-rose-400/90 flex items-center gap-1">
                  <XCircle className="w-4 h-4 shrink-0" />
                  发信域名易被列入黑名单
                </td>
                <td className="py-4 px-5 text-rose-400/90">公共IP共享，极易关联封号/封主页</td>
                <td className="py-4 px-5 bg-blue-950/40 border-x border-blue-500/30 text-emerald-300 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>独家云真机独立指纹环境 100% 隔离</span>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-5 font-bold text-slate-200">单条有效询盘成本</td>
                <td className="py-4 px-5 text-slate-400">￥300 - ￥800+ / 条</td>
                <td className="py-4 px-5 text-slate-400">有效率低，折算 ￥200+/条</td>
                <td className="py-4 px-5 text-slate-400">￥150 - ￥350 / 条 (含高额服务费)</td>
                <td className="py-4 px-5 bg-blue-950/40 border-x border-blue-500/30 text-emerald-300 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>￥15 - ￥50 / 条 (降本 65%+)</span>
                  </div>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-5 font-bold text-slate-200">响应与跟进速度</td>
                <td className="py-4 px-5 text-slate-400">依赖业务员人工时差回复 (8-24小时)</td>
                <td className="py-4 px-5 text-slate-400">进垃圾邮箱，几乎无时效反馈</td>
                <td className="py-4 px-5 text-slate-400">需要专门的人盯着 FB 消息表单</td>
                <td className="py-4 px-5 bg-blue-950/40 border-x border-blue-500/30 text-emerald-300 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>24H 全语种 AIGC 实时回复 + WhatsApp 归集</span>
                  </div>
                </td>
              </tr>

              {/* Row 5 */}
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-5 font-bold text-slate-200">定制化服务保障</td>
                <td className="py-4 px-5 text-slate-400">标准化套餐，无专属行业优化方案</td>
                <td className="py-4 px-5 text-slate-400">售出即完事，无后续营销跟进指导</td>
                <td className="py-4 px-5 text-slate-400">只负责跑消耗，不包询盘转化质量</td>
                <td className="py-4 px-5 bg-blue-950/40 border-x border-blue-500/30 border-b-2 border-blue-500 rounded-b-xl text-emerald-300 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>高级顾问一对一打造【订制推】专属落地方案</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Industry Solution Selector Interactive Card */}
        <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700 pb-6 mb-8">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Industry Tailored Solutions</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                选择你的细分行业，查看客番番【订制推】专属提效方案
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              已有超过 1,800+ 外贸出口工厂及跨境贸易商在此获取专属突破方案
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {Object.entries(industryData).map(([key, item]) => {
              const IconComp = item.icon;
              const isActive = selectedIndustry === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedIndustry(key)}
                  className={`flex items-center gap-2.5 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20 font-bold scale-102'
                      : 'bg-slate-900/60 border-slate-700/80 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  <IconComp className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-blue-400'}`} />
                  <div className="overflow-hidden">
                    <div className="text-xs font-bold truncate">{item.name.split('与')[0]}</div>
                    <div className={`text-[10px] truncate ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>{item.tag}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Industry Strategy Detail Display */}
          {(() => {
            const current = industryData[selectedIndustry];
            if (!current) return null;
            return (
              <div className="grid lg:grid-cols-3 gap-6 bg-slate-900/90 border border-slate-700 rounded-xl p-6">
                <div className="lg:col-span-2 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold rounded-md">
                      {current.tag}
                    </span>
                    <h4 className="text-lg font-bold text-white">{current.name} · 订制推实操攻坚策</h4>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 bg-slate-800/80 rounded-lg border border-slate-700">
                      <span className="text-slate-400 font-semibold block mb-1">🎯 传统行业获客痛点：</span>
                      <p className="text-rose-300/90 leading-relaxed">{current.painPoint}</p>
                    </div>

                    <div className="p-3.5 bg-slate-800/80 rounded-lg border border-slate-700">
                      <span className="text-slate-400 font-semibold block mb-1">⚡ 客番番【订制推】突破路径：</span>
                      <p className="text-emerald-300/90 leading-relaxed">{current.kefanfanSolution}</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs text-slate-400 font-bold block mb-2">匹配精准 Meta & FB 商业标签：</span>
                    <div className="flex flex-wrap gap-2">
                      {current.fbTags.map((tag, idx) => (
                        <span key={idx} className="bg-slate-800 text-blue-300 border border-slate-700 text-xs px-2.5 py-1 rounded-md font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs text-slate-400 font-bold block mb-2">重点拓客目标国家市场：</span>
                    <div className="flex flex-wrap gap-2">
                      {current.targetMarkets.map((mkt, idx) => (
                        <span key={idx} className="bg-emerald-950/60 text-emerald-300 border border-emerald-800/80 text-xs px-2.5 py-1 rounded-md font-medium">
                          🌐 {mkt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Metric Card */}
                <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase">订制推实测投产比 (ROI)</span>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-center">
                      <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
                        <div className="text-2xl font-black text-emerald-400">{current.avgCostReduction}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">获客成本降低</div>
                      </div>
                      <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
                        <div className="text-2xl font-black text-blue-400">{current.conversionBoost}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">询盘转化提升</div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-blue-950/30 border border-blue-800/50 rounded-lg">
                      <div className="text-xs font-bold text-blue-300 mb-1">真实客户标杆反馈：</div>
                      <p className="text-xs text-slate-300 italic">{current.sampleCase}</p>
                    </div>
                  </div>

                  <button
                    onClick={onOpenModal}
                    className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>获取【{current.name.split('与')[0]}】定制推方案</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
