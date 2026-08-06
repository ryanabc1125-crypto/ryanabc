import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenModal: () => void;
  onOpenLeadsPortal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenModal, onOpenLeadsPortal }) => {
  return (
    <footer className="py-12 bg-slate-900 text-white border-t border-slate-800 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 mb-8">
          <div className="flex justify-center mb-2">
            <Logo variant="dark" size="lg" showTagline={true} />
          </div>
          <p className="text-slate-400 text-sm max-w-md font-normal leading-relaxed">
            AI 驱动的外贸拓客引擎 · FB/INS 自动化询盘解决方案 · 助推中国制造通达全球
          </p>

          {/* Contact Details Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono bg-slate-800/80 border border-slate-700/60 px-5 py-2.5 rounded-2xl text-slate-300">
            <span>📞 热线: <strong className="text-white">13367266284</strong></span>
            <span className="text-slate-600">|</span>
            <span>💬 WA: <strong className="text-emerald-400">13367266284</strong></span>
            <span className="text-slate-600">|</span>
            <span>✈️ TG: <strong className="text-sky-400">@dzt251204</strong></span>
            <span className="text-slate-600">|</span>
            <span>微信: <strong className="text-purple-300">心想柿橙 🍊</strong></span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400 font-medium pt-2">
            <a href="#features" className="hover:text-white transition-colors">方案特色</a>
            <a href="#workflow" className="hover:text-white transition-colors">获客原理</a>
            <a href="#calculator" className="hover:text-white transition-colors">ROI 测算</a>
            <button onClick={onOpenModal} className="hover:text-white transition-colors cursor-pointer">
              免费方案领取
            </button>
            <button onClick={onOpenPrivacy} className="hover:text-white transition-colors cursor-pointer underline">
              隐私政策
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 space-y-2">
          <p className="text-slate-500 text-xs italic tracking-widest leading-none">
            Meta Ads Authorized Solution Partner (Concept)
          </p>
          <p className="text-slate-500 text-xs tracking-tight flex items-center justify-center gap-1.5">
            <span>Copyright © 2026 whkff.com. All Rights Reserved.</span>
            {onOpenLeadsPortal && (
              <button
                onClick={onOpenLeadsPortal}
                className="text-slate-700 hover:text-slate-500 transition-colors cursor-pointer p-0.5 rounded"
                title="管理员入口"
                aria-label="Admin Access"
              >
                🔒
              </button>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};
