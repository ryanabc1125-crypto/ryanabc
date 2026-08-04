import React, { useState, useRef } from 'react';
import {
  Phone,
  MessageCircle,
  Send,
  QrCode,
  ChevronRight,
  ChevronLeft,
  Copy,
  Check,
  X,
  Headphones,
  Sparkles,
  ExternalLink,
  UserCheck,
  Info,
  Upload,
  RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ContactSidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showWechatQr, setShowWechatQr] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Custom QR Code uploaded by user or default
  const [qrImage, setQrImage] = useState<string>(() => {
    return localStorage.getItem('kefanfan_user_wechat_qr') || '/wechat_qr.jpg';
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setQrImage(result);
          try {
            localStorage.setItem('kefanfan_user_wechat_qr', result);
          } catch (err) {
            console.error('Failed to save QR to localStorage', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetQr = () => {
    localStorage.removeItem('kefanfan_user_wechat_qr');
    setQrImage('/wechat_qr.jpg');
  };

  const phoneNum = '13367266284';
  const whatsappNum = '13367266284';
  const tgAccount = '@dzt251204';
  const tgHandle = 'dzt251204';

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <>
      {/* Floating Right Dock */}
      <div className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 flex items-center">
        {/* Toggle Collapse/Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-8 h-12 bg-slate-900 hover:bg-slate-800 text-blue-400 border border-slate-700/80 rounded-l-xl flex items-center justify-center shadow-lg cursor-pointer transition-colors shrink-0"
          title={isExpanded ? '折叠联系方式侧栏' : '展开官方联系方式'}
        >
          {isExpanded ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        {/* Collapsed Compact Floating Icon Bar */}
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-900/95 text-white border border-slate-800 rounded-r-2xl p-2 shadow-2xl backdrop-blur-md flex flex-col gap-3"
          >
            <button
              onClick={() => setIsExpanded(true)}
              className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer relative group"
              title="电话热线: 13367266284"
            >
              <Phone className="w-4 h-4" />
              <span className="absolute right-12 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                电话: 13367266284
              </span>
            </button>

            <a
              href={`https://wa.me/86${whatsappNum}`}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all cursor-pointer relative group"
              title="WhatsApp: 13367266284"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="absolute right-12 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                WhatsApp: 13367266284
              </span>
            </a>

            <a
              href={`https://t.me/${tgHandle}`}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-sky-600/20 text-sky-400 border border-sky-500/30 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all cursor-pointer relative group"
              title="TG: @dzt251204"
            >
              <Send className="w-4 h-4" />
              <span className="absolute right-12 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                TG: @dzt251204
              </span>
            </a>

            <button
              onClick={() => setShowWechatQr(true)}
              className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all cursor-pointer relative group"
              title="微信客服 (心想柿橙 🍊)"
            >
              <QrCode className="w-4 h-4" />
              <span className="absolute right-12 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                微信二维码
              </span>
            </button>
          </motion.div>
        )}

        {/* Expanded Rich Panel */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 30 }}
            className="w-72 bg-slate-900/95 text-white border border-slate-700/80 rounded-r-3xl p-4 shadow-2xl backdrop-blur-xl space-y-3.5"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center border border-blue-500/40">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-white flex items-center gap-1.5">
                    客番番 官方直连
                  </h4>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>咨询专家在线 (9:00-22:00)</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsExpanded(false)}
                className="text-slate-400 hover:text-white text-xs cursor-pointer"
                title="最小化"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Item 1: Phone */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-2.5 space-y-1.5 hover:border-blue-500/50 transition-all">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 font-bold text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  电话热线
                </span>
                <button
                  onClick={() => copyToClipboard(phoneNum, 'phone')}
                  className="text-[10px] text-blue-400 hover:text-blue-300 flex items-center gap-1 font-bold cursor-pointer"
                >
                  {copiedKey === 'phone' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">已复制</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>复制</span>
                    </>
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between pt-0.5">
                <a
                  href={`tel:${phoneNum}`}
                  className="font-mono text-sm font-extrabold text-white hover:text-blue-400 transition-colors"
                >
                  {phoneNum}
                </a>
                <a
                  href={`tel:${phoneNum}`}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1"
                >
                  <span>直拨</span>
                </a>
              </div>
            </div>

            {/* Item 2: WhatsApp */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-2.5 space-y-1.5 hover:border-emerald-500/50 transition-all">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 font-bold text-emerald-400">
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp 咨询
                </span>
                <button
                  onClick={() => copyToClipboard(whatsappNum, 'wa')}
                  className="text-[10px] text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-bold cursor-pointer"
                >
                  {copiedKey === 'wa' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">已复制</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>复制</span>
                    </>
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between pt-0.5">
                <span className="font-mono text-sm font-extrabold text-white">
                  {whatsappNum}
                </span>
                <a
                  href={`https://wa.me/86${whatsappNum}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1"
                >
                  <span>WA 聊天</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Item 3: Telegram */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-2.5 space-y-1.5 hover:border-sky-500/50 transition-all">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 font-bold text-sky-400">
                  <Send className="w-3.5 h-3.5" />
                  Telegram (TG)
                </span>
                <button
                  onClick={() => copyToClipboard(tgAccount, 'tg')}
                  className="text-[10px] text-sky-400 hover:text-sky-300 flex items-center gap-1 font-bold cursor-pointer"
                >
                  {copiedKey === 'tg' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">已复制</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>复制</span>
                    </>
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between pt-0.5">
                <span className="font-mono text-sm font-extrabold text-white">
                  {tgAccount}
                </span>
                <a
                  href={`https://t.me/${tgHandle}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-sky-600 hover:bg-sky-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1"
                >
                  <span>跳转 TG</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Item 4: WeChat Card */}
            <div className="bg-purple-950/40 border border-purple-500/30 rounded-2xl p-2.5 space-y-2 hover:border-purple-400 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    微
                  </span>
                  <div>
                    <span className="text-xs font-bold text-white block">微信客服 (心想柿橙 🍊)</span>
                    <span className="text-[10px] text-slate-400">扫码或搜索手机号加好友</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowWechatQr(true)}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold py-2 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>扫码添加微信好友</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* WECHAT QR CODE MODAL */}
      <AnimatePresence>
        {showWechatQr && (
          <div className="fixed inset-0 z-60 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl relative border border-slate-200 text-slate-900 overflow-hidden"
            >
              <button
                onClick={() => setShowWechatQr(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Avatar Header */}
              <div className="flex items-center gap-3 mb-4 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-400 text-white flex items-center justify-center font-bold text-xl shadow-md shrink-0">
                  🍊
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-base font-extrabold text-slate-900">心想柿橙 🍊</h3>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      官方客服
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono">微信号 / 手机: {phoneNum}</p>
                </div>
              </div>

              {/* Real User Image QR Code Display */}
              <div className="bg-slate-50 p-2.5 rounded-2xl border border-slate-200 shadow-inner mb-3 flex flex-col items-center justify-center relative">
                <img
                  src={qrImage}
                  alt="心想柿橙 微信名片二维码"
                  className="w-full max-w-[280px] h-auto rounded-xl object-contain shadow-md border border-slate-200"
                  referrerPolicy="no-referrer"
                />
                <p className="text-[11px] text-slate-500 font-medium mt-2 flex items-center gap-1">
                  <QrCode className="w-3.5 h-3.5 text-emerald-600" />
                  微信扫一扫添加「心想柿橙 🍊」
                </p>

                {/* Direct Upload QR Code Button */}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  className="hidden"
                />

                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-200/80 w-full justify-center">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-[11px] bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5 text-blue-600" />
                    <span>上传我的个人真实二维码图片</span>
                  </button>
                  {qrImage !== '/wechat_qr.jpg' && (
                    <button
                      onClick={handleResetQr}
                      title="重置"
                      className="text-[11px] text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-200/60 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Important WeChat Search Guide */}
              <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 mb-4 text-[11px] text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1 text-amber-800">
                  <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>添加微信提示：</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  若扫码受微信机制限制，请直接点击下方按钮<strong className="text-amber-900">【复制手机号】</strong>，在微信搜索框粘贴 <code className="bg-amber-100 text-amber-900 font-mono font-bold px-1 py-0.5 rounded">{phoneNum}</code> 即可快速找到「心想柿橙 🍊」。
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => copyToClipboard(phoneNum, 'wechat_phone')}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-extrabold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copiedKey === 'wechat_phone' ? (
                    <>
                      <Check className="w-4 h-4 text-white animate-bounce" />
                      <span>已复制手机号 {phoneNum} ！请打开微信粘贴搜索</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>一键复制微信号/手机号 ({phoneNum})</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setShowWechatQr(false)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2 rounded-xl transition-colors cursor-pointer"
                >
                  关闭
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
