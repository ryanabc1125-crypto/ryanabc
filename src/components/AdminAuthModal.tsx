import React, { useState } from 'react';
import { Lock, ShieldCheck, KeyRound, X, AlertCircle } from 'lucide-react';

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
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default admin PIN is 8888 or admin8888
    if (password.trim() === '8888' || password.trim() === 'admin8888' || password.trim() === '888888') {
      setError(false);
      setPassword('');
      sessionStorage.setItem('kefanfan_admin_authed', 'true');
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-60 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl relative border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-blue-400 flex items-center justify-center mb-4 shadow-md">
          <ShieldCheck className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-extrabold text-slate-900 mb-1">管理员身份验证</h3>
        <p className="text-xs text-slate-500 mb-4">
          线索看板包含企业潜在买家脱敏数据及 CRM 关联信息，非管理员及外部访客无法开启。
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
              <KeyRound className="w-3.5 h-3.5 text-blue-600" />
              <span>请输入管理秘钥 / 访问密码</span>
            </label>
            <input
              type="password"
              autoFocus
              placeholder="请输入管理员访问密码"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className={`w-full bg-slate-50 border ${
                error ? 'border-rose-500 ring-2 ring-rose-200' : 'border-slate-200'
              } px-3.5 py-2.5 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 transition-all font-mono`}
            />
            {error && (
              <p className="text-[11px] text-rose-600 font-bold mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                密码错误，请重新输入
              </p>
            )}
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 leading-relaxed">
            🔒 提示：线索看板涉及内部客户管理，仅限系统管理员凭访问密码登录，外部访客无法越权查看。
          </div>

          <div className="flex gap-2 pt-1">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
            >
              验证登录
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
