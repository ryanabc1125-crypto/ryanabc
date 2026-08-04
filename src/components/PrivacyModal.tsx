import React from 'react';
import { X, ShieldCheck, Lock, FileText } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden relative border border-slate-100 my-8 p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">客番番 (whkff.com) 隐私与数据安全政策</h3>
            <p className="text-xs text-slate-500">保密承诺与用户数据保护规范</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-h-96 overflow-y-auto pr-2">
          <section className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
            <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-blue-600" />
              1. 信息收集与用途
            </h4>
            <p>
              客番番仅收集您主动填写的联系方式（姓名、手机号/WhatsApp、社交账号、行业品类等），所有数据仅用于根据您的外贸行业定制 FB/INS 获客与询盘转化方案，绝不向任何第三方转售或披露。
            </p>
          </section>

          <section className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
            <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              2. 账户与数据隔离
            </h4>
            <p>
              在您使用客番番系统进行海外买家抓取与社交私信自动化时，所有采集的海外买家名单与商业线索均专属于您的企业账户，云端隔离保护，确保商业机密不外泄。
            </p>
          </section>

          <section className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
            <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              3. 合规性与安全加密
            </h4>
            <p>
              我们的拓客方案严格遵循 Meta 开发规范与 GDPR 隐私法案，采用金融级 256-bit SSL 通信加密，保障您的企业外贸资产安全。
            </p>
          </section>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md transition-colors cursor-pointer"
          >
            我已知晓
          </button>
        </div>
      </div>
    </div>
  );
};
