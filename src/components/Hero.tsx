import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Globe, Sparkles, MessageSquare, TrendingUp, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal, onScrollToCalculator }) => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 max-w-7xl mx-auto text-center overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-300/30 to-purple-300/30 blur-3xl rounded-full -z-10 pointer-events-none" />

      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200/80 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-xs animate-bounce-short">
        <Sparkles className="w-4 h-4 text-blue-600" />
        <span>AI 驱动的全球客户开发系统</span>
      </div>

      {/* Headline */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight text-slate-900 leading-tight">
        告别传统获客，<br className="hidden sm:inline" />
        开启 <span className="gradient-text">FB/INS 自动化询盘</span> 时代
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
        专为外贸企业打造的自动获客引擎。根据你的行业属性，量身定制 FB/INS 营销闭环，让询盘主动找上门。
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
        <button
          onClick={onOpenModal}
          className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-bold hover:scale-102 transition-all shadow-xl shadow-blue-200 hover:shadow-blue-300 active:scale-98 cursor-pointer"
        >
          <span>立即领取你的自动获客方案</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <button
          onClick={onScrollToCalculator}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-6 py-4 rounded-xl text-base font-semibold hover:bg-slate-50 transition-all shadow-xs hover:border-slate-300 cursor-pointer"
        >
          <TrendingUp className="w-4 h-4 text-blue-600" />
          <span>测算我的询盘增长潜力</span>
        </button>
      </div>

      {/* Hero Visual Card / Platform Preview Card */}
      <div className="relative max-w-4xl mx-auto rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-md p-4 sm:p-6 shadow-2xl text-left">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
              Meta FB/Instagram 自动拓客引擎运行控制台
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-md border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            24H 智能获客中
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Box 1 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500">1. 精准买家标签抓取</span>
              <span className="text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded">Meta API</span>
            </div>
            <div className="text-2xl font-black text-slate-800">1,280+</div>
            <p className="text-xs text-slate-500 mt-1">当日匹配 Facebook & INS 意向买家</p>
            <div className="mt-3 text-[11px] bg-white p-2 rounded-lg border border-slate-200 text-slate-600 flex items-center justify-between">
              <span>竞品粉丝与行业社群匹配</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            </div>
          </div>

          {/* Box 2 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-500">2. 全自动触达与私信</span>
              <span className="text-[10px] bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded">AI 话术</span>
            </div>
            <div className="text-2xl font-black text-slate-800">890+</div>
            <p className="text-xs text-slate-500 mt-1">多语种 Catalog 自动开场私信发送</p>
            <div className="mt-3 text-[11px] bg-white p-2 rounded-lg border border-slate-200 text-slate-600 flex items-center justify-between">
              <span>自然沟通 · 云端安全防封</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            </div>
          </div>

          {/* Box 3 */}
          <div className="p-4 rounded-xl bg-blue-600 text-white relative overflow-hidden shadow-lg shadow-blue-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-blue-100">3. 真实询盘生成</span>
              <span className="text-[10px] bg-white/20 text-white font-bold px-2 py-0.5 rounded">高转化</span>
            </div>
            <div className="text-2xl font-black text-white">38 条 / 日</div>
            <p className="text-xs text-blue-100 mt-1">直接导流至 WhatsApp / 邮箱对话</p>
            <div className="mt-3 text-[11px] bg-white/10 p-2 rounded-lg border border-white/20 text-white flex items-center justify-between backdrop-blur-xs">
              <span>匹配度 92% 的采购商报价需求</span>
              <MessageSquare className="w-3.5 h-3.5 text-blue-200" />
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Badges */}
      <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-600 text-sm font-semibold">
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-2xs">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          <span>数据安全保障</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-2xs">
          <Zap className="w-4 h-4 text-blue-600" />
          <span>24h 自动化运行</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-2xs">
          <Globe className="w-4 h-4 text-blue-600" />
          <span>覆盖 200+ 国家与地区</span>
        </div>
      </div>
    </section>
  );
};
