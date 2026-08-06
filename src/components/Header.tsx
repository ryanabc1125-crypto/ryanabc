import React from 'react';
import { Sparkles, Lock } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenModal: () => void;
  onOpenLeadsPortal: () => void;
  leadCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenModal,
  onOpenLeadsPortal,
  leadCount,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism px-4 sm:px-8 py-3 flex justify-between items-center transition-all duration-300 shadow-xs">
      <div className="flex items-center gap-8">
        <a href="#" className="flex items-center">
          <Logo variant="light" size="md" showTagline={true} />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition-colors">方案特色</a>
          <a href="#workflow" className="hover:text-blue-600 transition-colors">工作原理</a>
          <a href="#calculator" className="hover:text-blue-600 transition-colors">ROI 估算器</a>
          <a href="#case-studies" className="hover:text-blue-600 transition-colors">客户案例</a>
        </nav>
      </div>

      <div className="flex items-center gap-2.5">
        {/* Subtle discreet admin portal entry (no text, no numbers) */}
        <button
          onClick={onOpenLeadsPortal}
          className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100/80 transition-all cursor-pointer opacity-60 hover:opacity-100"
          title="系统入口"
          aria-label="Admin Portal"
        >
          <Lock className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={onOpenModal}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-semibold px-4 sm:px-5 py-2 rounded-full shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-blue-200 animate-pulse" />
          <span>免费领取方案</span>
        </button>
      </div>
    </header>
  );
};
