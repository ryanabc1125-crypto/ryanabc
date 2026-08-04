import React from 'react';
import { Star, TrendingUp, Quote, Sparkles, Globe2, ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES, LIVE_INQUIRY_FEED } from '../data/mockData';

interface CaseStudiesProps {
  onOpenModal: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenModal }) => {
  return (
    <section id="case-studies" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            标杆客户证言
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 tracking-tight">
            超过 1,500+ 外贸企业通过客番番实现爆单
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            覆盖工厂、外贸公司与跨境品牌，用真实的 FB/INS 自动化数据说话。
          </p>
        </div>

        {/* Real-time Inquiry Feed Ribbon */}
        <div className="mb-16 bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                客番番用户实时捕获的海外询盘动态 (Live Feed)
              </span>
            </div>
            <span className="text-[11px] text-slate-500 hidden sm:inline">24H 智能推送到 WhatsApp</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {LIVE_INQUIRY_FEED.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 text-xs flex flex-col justify-between hover:border-blue-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="text-base">{item.countryFlag}</span>
                      <span>{item.buyerName}</span>
                      <span className="text-[10px] text-slate-400">({item.country})</span>
                    </span>
                    <span className="text-[10px] bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded-full">
                      {item.platform}
                    </span>
                  </div>
                  <p className="text-slate-600 italic line-clamp-2 mb-2">"{item.messagePreview}"</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200/50 text-[10px] text-slate-500">
                  <span>品类: {item.industry}</span>
                  <span className="font-bold text-emerald-600">预估价值: {item.valueEst}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {item.businessType} · {item.location}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-2">{item.companyName}</h3>
                    <p className="text-xs text-slate-500">{item.industry}</p>
                  </div>
                </div>

                {/* Metrics Highlight Box */}
                <div className="grid grid-cols-2 gap-2 my-5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div>
                    <div className="text-xs text-slate-500">询盘增长量</div>
                    <div className="text-xl font-black text-emerald-600">{item.inquiryGrowth}</div>
                  </div>
                  <div className="border-l border-slate-200">
                    <div className="text-xs text-slate-500">获客成本降低</div>
                    <div className="text-xl font-black text-blue-600">{item.costReduction}</div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative text-sm text-slate-700 italic leading-relaxed mb-6">
                  <Quote className="w-6 h-6 text-blue-200 absolute -top-2 -left-2 -z-10" />
                  "{item.quote}"
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={item.avatarUrl}
                  alt={item.authorTitle}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900">{item.authorTitle}</div>
                  <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
            准备好让属于你的 FB/INS 爆单方案落地了吗？
          </h3>
          <p className="text-blue-100 text-base max-w-2xl mb-8">
            只需 1 分钟填写你的行业与业务痛点，客番番顾问将在 24 小时内联系你并提供针对性外贸获客方案。
          </p>
          <button
            onClick={onOpenModal}
            className="bg-white text-blue-700 hover:bg-slate-100 px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center gap-2"
          >
            <span>免费领取我的外贸方案</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
