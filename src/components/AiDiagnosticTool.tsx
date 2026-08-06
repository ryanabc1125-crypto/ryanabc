import React, { useState } from 'react';
import {
  Sparkles,
  Bot,
  Target,
  Globe2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Building,
  Sliders,
  FileSpreadsheet,
  Award,
  ChevronRight,
  RotateCcw
} from 'lucide-react';

interface AiDiagnosticToolProps {
  onOpenModal: () => void;
}

export const AiDiagnosticTool: React.FC<AiDiagnosticToolProps> = ({ onOpenModal }) => {
  const [step, setStep] = useState<number>(1);

  // Quiz Form State
  const [industry, setIndustry] = useState<string>('工业机械与自动化设备');
  const [targetMarket, setTargetMarket] = useState<string>('欧洲 (德国/意大利/波兰)');
  const [currentChannel, setCurrentChannel] = useState<string>('阿里国际站/中国制造网 (询盘质量低/比价严重)');
  const [teamScale, setTeamScale] = useState<string>('3-10人外贸团队');

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleStartDiagnose = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResult(true);
      setStep(3);
    }, 1200);
  };

  const handleReset = () => {
    setStep(1);
    setShowResult(false);
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-b border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-4">
            <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
            <span>AI 智能测算 · 订制推方案配比</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            30秒 测算你的品类专属 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">客番番【订制推】拓客矩阵</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            回答 4 个简单问题，AI 引擎将根据客番番 3,000+ 真实企业出海数据库，实时匹配最佳 Meta 标签、指纹矩阵配比与拓客策略。
          </p>
        </div>

        {/* Diagnostic Card Container */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-5">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                1
              </div>
              <span className={`text-xs font-bold ${step >= 1 ? 'text-white' : 'text-slate-500'}`}>行业与市场</span>
              <ChevronRight className="w-4 h-4 text-slate-700" />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                2
              </div>
              <span className={`text-xs font-bold ${step >= 2 ? 'text-white' : 'text-slate-500'}`}>渠道与规模</span>
              <ChevronRight className="w-4 h-4 text-slate-700" />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 3 ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-500'}`}>
                3
              </div>
              <span className={`text-xs font-bold ${step >= 3 ? 'text-emerald-400' : 'text-slate-500'}`}>专属报告</span>
            </div>

            {showResult && (
              <button
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                重新测试
              </button>
            )}
          </div>

          {/* STEP 1: Industry & Market */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <label className="block text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                  <Building className="w-4 h-4 text-blue-400" />
                  Q1. 贵公司的出口产品所属行业领域？
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    '工业机械与自动化设备',
                    '五金建材与门窗结构',
                    '电子消费品与储能光伏',
                    '汽摩配件与机械零件',
                    '纺织服装与家居用品',
                    '医疗器械与化工原料'
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setIndustry(item)}
                      className={`p-3.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                        industry === item
                          ? 'bg-blue-600/30 border-blue-500 text-white ring-1 ring-blue-500'
                          : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-indigo-400" />
                  Q2. 重点开拓或深耕的海外目标市场？
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    '欧洲 (德国/意大利/波兰)',
                    '北美 (美国/加拿大)',
                    '东南亚 (越南/印尼/泰国)',
                    '中东 (沙特/阿联酋)',
                    '拉美 (巴西/墨西哥)',
                    '全球通拓 (多语言)'
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTargetMarket(item)}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                        targetMarket === item
                          ? 'bg-indigo-600/30 border-indigo-500 text-white ring-1 ring-indigo-500'
                          : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>下一步：渠道与规模</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Current Channel & Team */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <label className="block text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-400" />
                  Q3. 目前主要获客渠道及最核心痛点？
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    '阿里国际站/中国制造网 (询盘质量低/比价严重)',
                    '海关数据/展会名单群发 (退信率高/打不通)',
                    '第三方 FB 广告代投 (服务费高/不保质量)',
                    '传统外贸展会 (费用昂贵/单次10万+)'
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCurrentChannel(item)}
                      className={`p-3.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                        currentChannel === item
                          ? 'bg-purple-600/30 border-purple-500 text-white ring-1 ring-purple-500'
                          : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  Q4. 现有外贸业务/社媒跟进团队规模？
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    'SOHO / 个人独立外贸',
                    '3-10人外贸团队',
                    '10-30人成熟出口团队',
                    '30人以上大型工厂'
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setTeamScale(item)}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                        teamScale === item
                          ? 'bg-emerald-600/30 border-emerald-500 text-white ring-1 ring-emerald-500'
                          : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  返回上一步
                </button>

                <button
                  type="button"
                  onClick={handleStartDiagnose}
                  disabled={isGenerating}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
                >
                  {isGenerating ? (
                    <>
                      <Bot className="w-4 h-4 animate-spin" />
                      <span>AI 引擎分析数据库中...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>立即生成【订制推】专属方案报告</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Report & Recommendation */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-gradient-to-r from-blue-900/60 via-indigo-900/60 to-slate-900 p-6 rounded-2xl border border-blue-500/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-500/20 pb-4 mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider">Matched Result for Your Business</span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      【{industry.split('与')[0]}】客番番 · 订制推拓客配比建议书
                    </h3>
                  </div>
                  <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full shrink-0 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    建议投产比 1 : 6.8+
                  </span>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 text-xs">
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block mb-1">建议云真机指纹矩阵：</span>
                    <p className="text-lg font-black text-blue-400 font-mono">30 - 60 个独立账号</p>
                    <span className="text-[10px] text-slate-400 mt-1 block">全独立固定住宅 IP，100% 零关联</span>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block mb-1">预测月均有效询盘：</span>
                    <p className="text-lg font-black text-emerald-400 font-mono">45 - 80+ 条 / 月</p>
                    <span className="text-[10px] text-slate-400 mt-1 block">比传统渠道成本降低 65%+</span>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block mb-1">推荐自动化跟进配置：</span>
                    <p className="text-sm font-bold text-amber-300">RPA 0.1s 截流 + WhatsApp AIGC</p>
                    <span className="text-[10px] text-slate-400 mt-1 block">全语种自动翻译及报盘名片归集</span>
                  </div>
                </div>

                {/* Strategy highlight details */}
                <div className="mt-5 space-y-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-white">针对痛点 ({currentChannel.split('(')[0]})：</strong>
                      客番番【订制推】将直接通过定向标签精准锁定欧洲/目标市场买家，摒弃低价比价大池，直接将意向客户引流至独立 WhatsApp 专属沟通。
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-white">团队配置建议 ({teamScale})：</strong>
                      搭配 1 位业务员即可通过客番番后端看板管理相当于 5 人外贸团队的月度出海发信量。
                    </p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <div className="text-xs text-slate-300">
                  <span className="font-bold text-white block">需要高级出海顾问为你出具《完整 PDF 版可行性报告》？</span>
                  <span>包含专属竞争对手 Page 截流名单与 Meta 细分行业广告投放方案。</span>
                </div>
                <button
                  onClick={onOpenModal}
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all cursor-pointer shrink-0"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-200" />
                  <span>免费领取【{industry.split('与')[0]}】订制推完整报告</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
