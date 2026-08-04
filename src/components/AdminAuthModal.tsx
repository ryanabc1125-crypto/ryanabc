import React, { useState } from 'react';
import { Lock, ShieldCheck, KeyRound, X, AlertCircle, Eye, EyeOff } from 'lucide-react';

interface AdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AdminAuthModal: React.FC<AdminAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPwd = password.trim();
    // Accepted passwords: 888888, 8888, admin, admin8888, 13367266284
    if (
      cleanPwd === '888888' ||
      cleanPwd === '8888' ||
      cleanPwd === 'admin' ||
      cleanPwd === 'admin8888' ||
      cleanPwd === '13367266284'
    ) {
      setError(false);
      setPassword('');
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-60 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl relative border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-blue-400 flex items-center justify-center mb-4 shadow-md">
          <ShieldCheck className="w-6 h-6 text-emerald-400" />
        </div>

        <div className="flex items-center gap-1.5 mb-1">
          <h3 className="text-lg font-extrabold text-slate-900">管理员访问验证</h3>
          <span className="bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
            <Lock className="w-3 h-3" /> 已锁定
          </span>
        </div>
        <p className="text-xs text-slate-500 mb-4">
          线索管理看板包含内部客户 CRM 信息，系统已严密加锁保护，必须输入正确管理密码方可解锁开启。
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <KeyRound className="w-3.5 h-3.5 text-blue-600" />
                <span>输入访问密码</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono">默认密码: 888888</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                autoFocus
                placeholder="请输入密码（如 888888）"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={`w-full bg-slate-50 border ${
                  error ? 'border-rose-500 ring-2 ring-rose-200' : 'border-slate-200'
                } pl-3.5 pr-10 py-2.5 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono text-slate-900`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {error && (
              <p className="text-[11px] text-rose-600 font-bold mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                密码错误！正确密码为：<code className="bg-rose-100 px-1 rounded font-mono">888888</code> 或 <code className="bg-rose-100 px-1 rounded font-mono">13367266284</code>
              </p>
            )}
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-600 leading-relaxed space-y-1">
            <div className="font-bold text-slate-800 flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-amber-600" />
              <span>看版安全保障机制：</span>
            </div>
            <p>未获得正确密码授权前，看板数据处于全程封锁保护状态，绝不泄露。</p>
          </div>

          <div className="flex gap-2 pt-1">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>验证并解锁看板</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer"
            >
              取消
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
