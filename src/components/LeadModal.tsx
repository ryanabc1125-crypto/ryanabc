import React, { useState, useEffect } from 'react';
import { X, ChevronRight, Check, Sparkles, AlertCircle, ShieldCheck, UserCheck, MessageSquare, Phone, Globe, Layers, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BusinessType, ExportMarket, LeadSubmission, PainPoint } from '../types';
import { Logo } from './Logo';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (lead: LeadSubmission) => void;
  onOpenPrivacy: () => void;
  prefilledBusinessType?: BusinessType;
  prefilledIndustry?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess,
  onOpenPrivacy,
  prefilledBusinessType,
  prefilledIndustry,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Step 1 Form Data
  const [businessType, setBusinessType] = useState<BusinessType>(prefilledBusinessType || '工厂 / 生产商');
  const [painPoints, setPainPoints] = useState<PainPoint[]>(['没客户', '想自动化获客']);
  const [exportMarket, setExportMarket] = useState<ExportMarket>('欧洲');
  const [industryCategory, setIndustryCategory] = useState<string>(prefilledIndustry || '工业机械与五金设备');

  // Step 2 Form Data
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [demoRequested, setDemoRequested] = useState<'是' | '否'>('是');
  const [socialAccount, setSocialAccount] = useState('');

  // Validation errors
  const [errorMsg, setErrorMsg] = useState('');

  // Generated AI Solution Report for Step 3
  const [aiReport, setAiReport] = useState<LeadSubmission['aiSolutionSummary'] | null>(null);

  useEffect(() => {
    if (prefilledBusinessType) {
      setBusinessType(prefilledBusinessType);
    }
    if (prefilledIndustry) {
      setIndustryCategory(prefilledIndustry);
    }
  }, [prefilledBusinessType, prefilledIndustry]);

  if (!isOpen) return null;

  const handleTogglePainPoint = (point: PainPoint) => {
    if (painPoints.includes(point)) {
      setPainPoints(painPoints.filter((p) => p !== point));
    } else {
      setPainPoints([...painPoints, point]);
    }
  };

  const handleNextStep = () => {
    if (!businessType) {
      setErrorMsg('请选择您目前的业务类型');
      return;
    }
    if (painPoints.length === 0) {
      setErrorMsg('请至少选择一个您目前最需要解决的问题');
      return;
    }
    setErrorMsg('');
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('请填写您的姓名');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('请填写您的 Phone number / WhatsApp（必填）');
      return;
    }

    setErrorMsg('');

    // Generate custom AI Strategy
    const generatedReport = {
      metaInterests: [
        `${industryCategory} Key Importers`,
        `${exportMarket} B2B Trade Buyers`,
        `${businessType} Sourcing Directors`
      ],
      suggestedPlatforms: [
        'Facebook Messenger Lead Bot',
        'Instagram DM Automation',
        'WhatsApp Business Cloud Funnel'
      ],
      monthlyEstimatedInquiries: Math.floor(Math.random() * 45) + 35,
      recommendedStrategy: `针对【${businessType}】在【${exportMarket}】市场的【${industryCategory}】业务，客番番 AI 系统将自动激活 Meta 核心目标人群画像与精准社群提炼模型，把高意向询盘直接推送至您的 WhatsApp。`
    };

    setAiReport(generatedReport);

    const newLead: LeadSubmission = {
      id: `lead-${Date.now()}`,
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      businessType,
      painPoints,
      exportMarket,
      name,
      phone,
      demoRequested,
      socialAccount,
      industryCategory,
      aiSolutionSummary: generatedReport
    };

    onSubmitSuccess(newLead);
    setStep(3);

    // Fire Confetti animation
    try {
      confetti({
        particleCount: 85,
        spread: 75,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }
  };

  const handleReset = () => {
    setStep(1);
    setName('');
    setPhone('');
    setSocialAccount('');
    setErrorMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative border border-slate-100 my-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Step Header */}
          {step !== 3 && (
            <div id="step-header" className="mb-6">
              {/* Active Greeting Badge */}
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-bold px-3 py-1 rounded-full shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span>您好！欢迎使用客番番外贸获客助手</span>
                </div>
                <div className="text-xs font-bold font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                  步骤 {step} / 2
                </div>
              </div>

              {/* Form Main Title (<=60 chars) */}
              <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-snug">
                领取你的外贸自动获客方案
              </h2>

              {/* Form Intro Text */}
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100">
                我们将根据你的行业，为你准备一份最适合的 FB/INS 自动获客方案，帮助你更快获得真实客户。填写信息后，我们会在 24 小时内联系你。
              </p>
            </div>
          )}

          {errorMsg && (
            <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Form Content */}
          <form onSubmit={handleSubmit}>
            {/* Step 1: Industry & Quality Filter Questions */}
            {step === 1 && (
              <div className="space-y-5 animate-fade-in">
                
                {/* Industry Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    <span>主营外贸品类行业</span>
                  </label>
                  <select
                    value={industryCategory}
                    onChange={(e) => setIndustryCategory(e.target.value)}
                    className="w-full border border-slate-200 p-3 rounded-xl text-xs sm:text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/80 font-medium text-slate-900"
                  >
                    <option value="工业机械与五金设备">工业机械与五金设备</option>
                    <option value="服装纺织与鞋帽饰品">服装纺织与鞋帽饰品</option>
                    <option value="电子3C与数码配件">电子3C与数码配件</option>
                    <option value="家居建材与室内软装">家居建材与室内软装</option>
                    <option value="新能源与光伏储能">新能源与光伏储能</option>
                    <option value="美妆护肤与个人护理">美妆护肤与个人护理</option>
                    <option value="汽配零件与摩托配件">汽配零件与摩托配件</option>
                    <option value="其它综合外贸品类">其它综合外贸品类</option>
                  </select>
                </div>

                {/* Question 1: Business Type (Single Choice, Mandatory) */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    你目前的业务类型是？ <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { label: '工厂 / 生产商', value: '工厂 / 生产商' },
                      { label: '外贸团队', value: '外贸团队' },
                      { label: '跨境卖家', value: '跨境卖家' },
                      { label: '本地商家', value: '本地商家' },
                      { label: '其他', value: '其他' },
                    ].map((item) => (
                      <label
                        key={item.value}
                        className={`border p-2.5 rounded-xl cursor-pointer flex items-center gap-2 transition-all ${
                          businessType === item.value
                            ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold shadow-2xs'
                            : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="business_type"
                          value={item.value}
                          checked={businessType === item.value}
                          onChange={() => setBusinessType(item.value as BusinessType)}
                          className="accent-blue-600"
                        />
                        <span className="text-xs">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Question 2: Pain Points (Multiple Choice, Mandatory) */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    你目前最需要解决的问题是？（多选） <span className="text-rose-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {[
                      { label: '没客户', value: '没客户' as PainPoint },
                      { label: '广告太贵', value: '广告太贵' as PainPoint },
                      { label: '缺人力 / 没时间', value: '缺人力 / 没时间' as PainPoint },
                      { label: 'FB/INS 不会做', value: 'FB/INS 不会做' as PainPoint },
                      { label: '想自动化获客', value: '想自动化获客' as PainPoint },
                    ].map((item) => {
                      const checked = painPoints.includes(item.value);
                      return (
                        <label
                          key={item.value}
                          className={`flex items-center gap-2.5 p-2.5 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors ${
                            checked
                              ? 'bg-blue-50/70 border-blue-300 text-blue-900 font-bold'
                              : 'border-slate-200 text-slate-700'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => handleTogglePainPoint(item.value)}
                            className="accent-blue-600 rounded"
                          />
                          <span className="text-xs">{item.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Primary Export Market */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-blue-600" />
                    <span>主要目标出口市场</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['欧洲', '北美', '东南亚', '中东', '拉美', '全球'] as ExportMarket[]).map((m) => (
                      <button
                        type="button"
                        key={m}
                        onClick={() => setExportMarket(m)}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                          exportMarket === m
                            ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 shadow-lg shadow-blue-200 transition-all cursor-pointer text-sm"
                >
                  <span>下一步</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step 2: Contact Info (WhatsApp/Phone Only, NO Email) */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                {/* Specific Notice Box */}
                <div className="p-3.5 bg-blue-50/90 text-blue-900 text-xs rounded-xl border border-blue-200 flex items-start gap-2.5 leading-relaxed">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-medium">请留下你的姓名和 WhatsApp/手机号，我们会根据你的行业为你准备专属方案。</span>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>姓名（Full Name）</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="您的称呼（如：张经理 / 李总）"
                    required
                    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900 bg-slate-50/80 font-medium"
                  />
                </div>

                {/* Phone Number / WhatsApp (Mandatory) */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Phone number / WhatsApp</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="手机号 / WhatsApp (必填，用于推送专属方案)"
                    required
                    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900 bg-slate-50/80 font-medium"
                  />
                </div>

                {/* Question 3: Free Demo (Single Choice, Mandatory) */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    你是否愿意安排一次免费的产品演示？ <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex gap-6 text-sm">
                    <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 hover:bg-blue-50">
                      <input
                        type="radio"
                        name="demo"
                        value="是"
                        checked={demoRequested === '是'}
                        onChange={() => setDemoRequested('是')}
                        className="accent-blue-600"
                      />
                      <span>是（优先安排）</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer font-bold text-slate-800 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 hover:bg-blue-50">
                      <input
                        type="radio"
                        name="demo"
                        value="否"
                        checked={demoRequested === '否'}
                        onChange={() => setDemoRequested('否')}
                        className="accent-blue-600"
                      />
                      <span>否（仅发资料）</span>
                    </label>
                  </div>
                </div>

                {/* Question 4: Social Account (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                    <span>您的微信/WS/TG？（选填）</span>
                  </label>
                  <input
                    type="text"
                    name="social"
                    value={socialAccount}
                    onChange={(e) => setSocialAccount(e.target.value)}
                    placeholder="可填写微信号 / WhatsApp / Telegram"
                    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-xs text-slate-900 bg-slate-50/80"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 border border-slate-200 text-slate-700 py-3.5 rounded-xl font-semibold text-xs hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>上一步</span>
                  </button>

                  <button
                    type="submit"
                    className="w-2/3 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all cursor-pointer text-sm flex items-center justify-center gap-2"
                  >
                    <span>提交并领取方案</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>

                {/* Privacy Policy Link */}
                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={onOpenPrivacy}
                    className="text-[11px] text-slate-500 hover:text-blue-600 hover:underline cursor-pointer font-medium"
                  >
                    查看客番番的隐私政策
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Success Completion Screen */}
            {step === 3 && (
              <div className="text-center py-4 space-y-5 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>

                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-2">
                    提交成功，我们会尽快联系你！
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    我们已收到你的信息，将在 24 小时内与您联系，为你准备适合你行业的自动获客方案。
                  </p>
                </div>

                {/* AI Tailored Strategy Report Card */}
                {aiReport && (
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        客番番 AI 为您自动匹配的专属获客策略
                      </span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                        {businessType}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {aiReport.recommendedStrategy}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                        <span className="text-slate-400 block text-[10px]">Meta 核心属性标签</span>
                        <span className="font-bold text-slate-800">{aiReport.metaInterests[0]}</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                        <span className="text-slate-400 block text-[10px]">预估月询盘增量</span>
                        <span className="font-extrabold text-emerald-600">
                          +{aiReport.monthlyEstimatedInquiries} 条/月
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md text-sm cursor-pointer"
                  >
                    完成并返回首页
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full border border-slate-200 text-slate-600 py-3.5 rounded-xl font-semibold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    再次提交新咨询
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
