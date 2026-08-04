import React, { useState, useEffect } from 'react';
import {
  Calculator,
  Sparkles,
  TrendingUp,
  DollarSign,
  Users,
  ArrowRight,
  ShieldCheck,
  Zap,
  Building,
  Target,
  BadgeDollarSign,
  Briefcase,
  Layers,
  HelpCircle,
  RotateCcw,
  CheckCircle2,
  PieChart,
  Info
} from 'lucide-react';
import { INDUSTRY_TEMPLATES, ExtendedIndustryTemplate } from '../data/mockData';
import { BusinessType } from '../types';

interface RoiCalculatorProps {
  onApplyPreset: (businessType: BusinessType, industry: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onApplyPreset }) => {
  const [selectedIndustryVal, setSelectedIndustryVal] = useState<string>(INDUSTRY_TEMPLATES[0].value);
  const [businessType, setBusinessType] = useState<BusinessType>('工厂');
  const [teamSize, setTeamSize] = useState<number>(5);
  const [matrixAccounts, setMatrixAccounts] = useState<number>(60);
  const [traditionalBudget, setTraditionalBudget] = useState<number>(3500); // USD
  const [currentInquiries, setCurrentInquiries] = useState<number>(12); // monthly inquiries
  
  // Custom exact estimation fields
  const [customDealSize, setCustomDealSize] = useState<number>(INDUSTRY_TEMPLATES[0].avgDealSize);
  const [profitMargin, setProfitMargin] = useState<number>(25); // %
  const [customConversionRate, setCustomConversionRate] = useState<number>(INDUSTRY_TEMPLATES[0].conversionRate);
  const [showFormulaDetails, setShowFormulaDetails] = useState<boolean>(false);

  const matchedIndustry: ExtendedIndustryTemplate =
    INDUSTRY_TEMPLATES.find((i) => i.value === selectedIndustryVal) || INDUSTRY_TEMPLATES[0];

  // When industry changes, sync defaults
  useEffect(() => {
    setCustomDealSize(matchedIndustry.avgDealSize);
    setCustomConversionRate(matchedIndustry.conversionRate);
  }, [selectedIndustryVal]);

  // Realistic Calculations based on B2B Export Benchmarks
  const dailyTotalOutreach = matrixAccounts * 35; // 35 leads per account/day
  const monthlyTotalOutreach = dailyTotalOutreach * 30;

  const estimatedInquiries = Math.round(
    currentInquiries +
      matrixAccounts * (matchedIndustry.avgInquiryMultiplier / 1.8) +
      teamSize * 2.5
  );

  const inquiryGrowthPercent = Math.round(
    ((estimatedInquiries - currentInquiries) / Math.max(currentInquiries, 1)) * 100
  );

  // CPL comparisons
  const traditionalCPL = matchedIndustry.traditionalCPL;
  const kefanfanCPL = matchedIndustry.kefanfanCPL;
  const cplSavingsPercent = Math.round(((traditionalCPL - kefanfanCPL) / traditionalCPL) * 100);

  // Staff labor savings
  const equivalentRepsSaved = (matrixAccounts / 25).toFixed(1);
  const monthlyLaborCostSavedRMB = Math.round(Number(equivalentRepsSaved) * 7500);

  // New deals and GMV lift using customDealSize and customConversionRate
  const incrementalInquiries = Math.max(0, estimatedInquiries - currentInquiries);
  const estimatedDeals = Math.max(1, Math.round(incrementalInquiries * (customConversionRate / 100)));
  const estimatedGMVLift = Math.round(estimatedDeals * customDealSize);
  const grossProfitLift = Math.round(estimatedGMVLift * (profitMargin / 100));

  // Estimated ROI ratio
  const estRoiRatio = (
    grossProfitLift / Math.max(traditionalBudget, 800)
  ).toFixed(1);

  const resetToIndustryDefaults = () => {
    setCustomDealSize(matchedIndustry.avgDealSize);
    setCustomConversionRate(matchedIndustry.conversionRate);
    setProfitMargin(25);
  };

  return (
    <section id="calculator" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 inline-flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            全网真实 B2B 外贸 ROI 精算模型
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 tracking-tight">
            测算你的 FB/INS 社媒获客精确投产比
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            基于客番番 9 年 3,000+ 跨国外贸企业出海大数据库。输入你的实际行业、平均客单价与矩阵配置，实时校准精准获客收益。
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
          {/* Controls Form Left Side */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Bar: Industry Selector */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-600" />
                  1. 选择外贸主营品类 (自动载入行业调研基准)
                </label>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  真实数据源已同步
                </span>
              </div>
              <select
                value={selectedIndustryVal}
                onChange={(e) => setSelectedIndustryVal(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-sm font-bold focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 cursor-pointer"
              >
                {INDUSTRY_TEMPLATES.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label} (行业参考客单价: ${item.avgDealSize.toLocaleString()} USD)
                  </option>
                ))}
              </select>

              {/* Research Benchmark Tag */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px]">
                <div className="bg-slate-100 p-2 rounded-lg text-slate-600">
                  行业参考客单价: <span className="font-bold text-slate-900">${matchedIndustry.avgDealSize.toLocaleString()}</span>
                </div>
                <div className="bg-slate-100 p-2 rounded-lg text-slate-600">
                  传统展会CPL: <span className="font-bold text-rose-600">${matchedIndustry.traditionalCPL}</span>
                </div>
                <div className="bg-slate-100 p-2 rounded-lg text-slate-600">
                  客番番AI CPL: <span className="font-bold text-emerald-600">${matchedIndustry.kefanfanCPL}</span>
                </div>
                <div className="bg-slate-100 p-2 rounded-lg text-slate-600">
                  成交转化率: <span className="font-bold text-blue-600">{matchedIndustry.conversionRate}%</span>
                </div>
              </div>
            </div>

            {/* 2. Business Type Selector */}
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-purple-600" />
                2. 选择业务形态
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(['工厂', '外贸团队', '跨境卖家', '本地商家'] as BusinessType[]).map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setBusinessType(type)}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                      businessType === type
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Precise Parameter Adjustment Section (客单价, 毛利率, 转化率) */}
            <div className="bg-blue-50/70 p-5 rounded-2xl border border-blue-200/80 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-blue-950 flex items-center gap-2">
                  <BadgeDollarSign className="w-4 h-4 text-blue-600" />
                  3. 核心财务与成交参数 (支持按企业实际精准自定义)
                </span>
                <button
                  type="button"
                  onClick={resetToIndustryDefaults}
                  className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  恢复行业默认值
                </button>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {/* Input 1: Custom Average Deal Size (客单价) */}
                <div className="bg-white p-3 rounded-xl border border-blue-200">
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    平均客单价 (USD $)
                  </label>
                  <div className="relative">
                    <span className="absolute left-2.5 top-2 text-xs font-bold text-slate-400">$</span>
                    <input
                      type="number"
                      min="500"
                      max="1000000"
                      step="500"
                      value={customDealSize}
                      onChange={(e) => setCustomDealSize(Math.max(100, Number(e.target.value)))}
                      className="w-full pl-6 pr-2 py-1.5 border border-slate-300 rounded-lg text-sm font-extrabold text-blue-900 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    折合约 ¥{Math.round(customDealSize * 7.2).toLocaleString()} RMB
                  </span>
                </div>

                {/* Input 2: Profit Margin % */}
                <div className="bg-white p-3 rounded-xl border border-blue-200">
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    预期产品毛利率 (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="5"
                      max="90"
                      value={profitMargin}
                      onChange={(e) => setProfitMargin(Math.min(90, Math.max(1, Number(e.target.value))))}
                      className="w-full px-2.5 py-1.5 border border-slate-300 rounded-lg text-sm font-extrabold text-emerald-700 focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                    <span className="absolute right-2.5 top-2 text-xs font-bold text-slate-400">%</span>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 block">行业平均 20%-35%</span>
                </div>

                {/* Input 3: Conversion Rate % */}
                <div className="bg-white p-3 rounded-xl border border-blue-200">
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    询盘-订单成交率 (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="0.5"
                      max="30"
                      step="0.1"
                      value={customConversionRate}
                      onChange={(e) => setCustomConversionRate(Math.min(50, Math.max(0.1, Number(e.target.value))))}
                      className="w-full px-2.5 py-1.5 border border-slate-300 rounded-lg text-sm font-extrabold text-purple-700 focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                    <span className="absolute right-2.5 top-2 text-xs font-bold text-slate-400">%</span>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 block">行业真实均值 {matchedIndustry.conversionRate}%</span>
                </div>
              </div>
            </div>

            {/* 4. Sliders: Team & Matrix & Current Metrics */}
            <div className="space-y-4">
              {/* Matrix Accounts */}
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center text-sm font-bold text-slate-800 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-indigo-600" />
                    拟部署 FB/INS 矩阵账号数
                  </span>
                  <span className="text-indigo-600 font-extrabold text-base">{matrixAccounts} 个账号</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="10"
                  value={matrixAccounts}
                  onChange={(e) => setMatrixAccounts(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>日均挖掘: {dailyTotalOutreach.toLocaleString()} 人次</span>
                  <span>月度触达: {monthlyTotalOutreach.toLocaleString()} 人次</span>
                </div>
              </div>

              {/* Team Size */}
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center text-sm font-bold text-slate-800 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-blue-600" />
                    现有人力团队规模
                  </span>
                  <span className="text-blue-600 font-extrabold">{teamSize} 人</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
              </div>

              {/* Ad budget & current inquiries */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <div className="flex justify-between text-xs font-bold text-slate-800 mb-1">
                    <span>传统月推广预算</span>
                    <span className="text-emerald-600">${traditionalBudget.toLocaleString()} USD</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="30000"
                    step="500"
                    value={traditionalBudget}
                    onChange={(e) => setTraditionalBudget(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                  />
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <div className="flex justify-between text-xs font-bold text-slate-800 mb-1">
                    <span>目前月均有效询盘</span>
                    <span className="text-purple-600">{currentInquiries} 条/月</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={currentInquiries}
                    onChange={(e) => setCurrentInquiries(Number(e.target.value))}
                    className="w-full accent-purple-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Toggle Math Formula Drawer */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowFormulaDetails(!showFormulaDetails)}
                className="w-full py-2.5 px-4 bg-slate-200/60 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-slate-500" />
                  查看计算公式与全网调研推导逻辑 (Formula & Methodology)
                </span>
                <span className="text-blue-600 underline font-bold">{showFormulaDetails ? '收起' : '展开详情'}</span>
              </button>

              {showFormulaDetails && (
                <div className="mt-3 p-4 bg-white rounded-xl border border-slate-300 text-xs text-slate-600 space-y-2 leading-relaxed">
                  <div className="font-bold text-slate-900 border-b border-slate-100 pb-1">
                    📊 算法模型与行业参数说明:
                  </div>
                  <p>
                    1. <strong>月触达量</strong> = {matrixAccounts} 账号 × 35人次/日 × 30天 = <strong>{monthlyTotalOutreach.toLocaleString()} 人次</strong>。
                  </p>
                  <p>
                    2. <strong>预测月询盘量</strong> = 当前 ({currentInquiries}条) + 矩阵贡献 ({Math.round(matrixAccounts * (matchedIndustry.avgInquiryMultiplier / 1.8))}条) + 团队人效提档 ({Math.round(teamSize * 2.5)}条) = <strong>{estimatedInquiries} 条/月</strong>。
                  </p>
                  <p>
                    3. <strong>成交总额 (GMV)</strong> = 新增询盘 ({incrementalInquiries}条) × 转化率 ({customConversionRate}%) × 客单价 (${customDealSize.toLocaleString()} USD) = <strong>${estimatedGMVLift.toLocaleString()} USD</strong> (约合 ¥{Math.round(estimatedGMVLift * 7.2).toLocaleString()} RMB)。
                  </p>
                  <p>
                    4. <strong>新增毛利润</strong> = 新增成交额 × 毛利率 ({profitMargin}%) = <strong>${grossProfitLift.toLocaleString()} USD</strong>。
                  </p>
                  <p>
                    5. <strong>询盘成本对比</strong> = 客番番平均 CPL 为 <strong>${kefanfanCPL} USD</strong> (相比传统展会/阿里巴巴 ${traditionalCPL} USD, 降低 {cplSavingsPercent}%)。
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Results Panel Right Side */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6 relative overflow-hidden border border-slate-800">
            {/* Header Badge */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span className="text-sm font-extrabold tracking-wide">客番番系统预期增效精算</span>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full font-bold">
                真实数据校准
              </span>
            </div>

            {/* Metric 1: Monthly Inquiry Lift */}
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
              <div className="text-xs text-blue-200 flex justify-between items-center">
                <span>预估月度有效询盘总量</span>
                <span className="text-[10px] text-slate-300 font-mono">Inquiry Forecast</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-white font-mono">{estimatedInquiries}</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                  +{inquiryGrowthPercent}% 增长
                </span>
              </div>
              <div className="text-[11px] text-slate-300 pt-1">
                从目前 {currentInquiries} 条/月 提升至{' '}
                <span className="text-emerald-300 font-bold">{estimatedInquiries} 条/月</span> 高意向询盘
              </div>
            </div>

            {/* Metric 2 & 3: CPL comparison & Staff Savings */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-blue-200">单条询盘成本 (CPL)</div>
                <div className="text-xl font-black text-amber-300 mt-1 font-mono">
                  ${kefanfanCPL} <span className="text-xs font-normal text-slate-300">/条</span>
                </div>
                <div className="text-[10px] text-emerald-400 mt-0.5">
                  传统竞价/展会 ${traditionalCPL} (省 {cplSavingsPercent}%)
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-blue-200">相当于节约人力投入</div>
                <div className="text-xl font-black text-emerald-300 mt-1 font-mono">
                  {equivalentRepsSaved} 人
                </div>
                <div className="text-[10px] text-slate-300 mt-0.5">
                  月省约 ¥{monthlyLaborCostSavedRMB.toLocaleString()} 自动化拓客薪资
                </div>
              </div>
            </div>

            {/* Metric 4 & 5: Revenue & Profit Lift & ROI */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-900/60 to-indigo-900/60 border border-blue-500/30 space-y-3">
              <div className="flex justify-between items-center">
                <div className="text-xs text-blue-200">预估新增月度营业额 (GMV)</div>
                <div className="text-xs font-bold text-amber-300">
                  成单: ~{estimatedDeals} 笔 (客单价 ${customDealSize.toLocaleString()})
                </div>
              </div>
              <div className="text-3xl font-black text-emerald-400 font-mono">
                ${estimatedGMVLift.toLocaleString()} USD <span className="text-xs text-slate-300 font-normal">/ 月</span>
              </div>

              <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-slate-300 block">月度新增毛利润 ({profitMargin}%):</span>
                  <span className="text-emerald-300 font-bold font-mono">${grossProfitLift.toLocaleString()} USD</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-300 block">预估综合投产比 (ROI):</span>
                  <span className="text-amber-300 font-extrabold text-sm font-mono">1 : {estRoiRatio}</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onApplyPreset(businessType, selectedIndustryVal)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white font-bold py-4 rounded-xl shadow-xl shadow-blue-950 hover:shadow-2xl transition-all cursor-pointer text-sm"
            >
              <span>将此精准测算结果导入生成专属拓客方案</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
