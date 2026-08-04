import React, { useState, useEffect } from 'react';
import { X, ChevronRight, Check, Sparkles, AlertCircle, PhoneCall, ShieldCheck, ArrowRight } from 'lucide-react';
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
  const [businessType, setBusinessType] = useState<BusinessType>(prefilledBusinessType || '工厂');
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
      setErrorMsg('请选择您的业务类型');
      return;
    }
    if (painPoints.length === 0) {
      setErrorMsg('请至少选择一个您遇到的问题');
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
      setErrorMsg('请填写您的 Phone Number / WhatsApp');
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
      recommendedStrategy: `针对【${businessType}】在【${exportMarket}】市场的【${industryCategory}】业务，系统将启用核心 Meta 兴趣标签与精准社群提取模型，全自动触达潜在买家，并将高意向询盘直接推送到您的 WhatsApp。`
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
        particleCount: 80,
        spread: 70,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative border border-slate-100 my-8">
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
              <div className="flex items-center justify-between mb-4">
                <Logo variant="light" size="sm" showTagline={false} />
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>步骤 {step} / 2</span>
                </div>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                领取你的外贸自动获客方案
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
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
            {/* Step 1: Industry & Business Profile */}
            {step === 1 && (
              <div className="space-y-5 animate-fade-in">
                {/* Industry Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    主营外贸品类行业
                  </label>
                  <select
                    value={industryCategory}
                    onChange={(e) => setIndustryCategory(e.target.value)}
                    className="w-full border border-slate-200 p-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 font-medium"
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

                {/* Business Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    你目前的业务类型是？（必填）
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { label: '工厂 / 生产商', value: '工厂' },
                      { label: '外贸团队', value: '外贸团队' },
                      { label: '跨境卖家', value: '跨境卖家' },
                      { label: '本地商家', value: '本地商家' },
                    ].map((item) => (
                      <label
                        key={item.value}
                        className={`border p-3 rounded-xl cursor-pointer flex items-center gap-2.5 transition-all ${
                          businessType === item.value
                            ? 'bg-blue-50 border-blue-500 text-blue-900 font-bold shadow-xs'
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

                {/* Pain Points */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    你目前最需要解决的问题是？（多选）
                  </label>
                  <div className="space-y-2">
                    {[
                      { label: '没客户', value: '没客户' as PainPoint },
                      { label: '广告太贵', value: '广告太贵' as PainPoint },
                      { label: '想自动化获客', value: '想自动化获客' as PainPoint },
                      { label: '缺少外贸运营经验', value: '缺少外贸运营经验' as PainPoint },
                      { label: '询盘转化率低', value: '询盘转化率低' as PainPoint },
                    ].map((item) => {
                      const checked = painPoints.includes(item.value);
                      return (
                        <label
                          key={item.value}
                          className={`flex items-center gap-2.5 p-2.5 border rounded-xl hover:bg-slate-50 cursor-pointer transition-colors ${
                            checked
                              ? 'bg-blue-50/60 border-blue-300 text-blue-900 font-medium'
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
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    主要目标出口市场
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['欧洲', '北美', '东南亚', '中东', '拉美', '全球'] as ExportMarket[]).map((m) => (
                      <button
                        type="button"
                        key={m}
                        onClick={() => setExportMarket(m)}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                          exportMarket === m
                            ? 'bg-blue-600 text-white border-blue-600'
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

            {/* Step 2: Contact Info */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <div className="p-3.5 bg-blue-50 text-blue-800 text-xs rounded-xl border border-blue-100 flex items-start gap-2 leading-relaxed">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>请留下你的姓名和 WhatsApp/手机号，我们会根据你的行业为你准备专属方案。</span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    姓名 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="您的称呼（如：张经理 / 李总）"
                    required
                    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Phone Number / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="手机号 / WhatsApp (用于接收方案)"
                    required
                    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    是否愿意安排一次免费的产品演示？
                  </label>
                  <div className="flex gap-6 text-sm">
                    <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-800">
                      <input
                        type="radio"
                        name="demo"
                        value="是"
                        checked={demoRequested === '是'}
                        onChange={() => setDemoRequested('是')}
                        className="accent-blue-600"
                      />
                      <span>是</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-800">
                      <input
                        type="radio"
                        name="demo"
                        value="否"
                        checked={demoRequested === '否'}
                        onChange={() => setDemoRequested('否')}
                        className="accent-blue-600"
                      />
                      <span>否</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    您的微信/WS/TG？ (选填)
                  </label>
                  <input
                    type="text"
                    name="social"
                    value={socialAccount}
                    onChange={(e) => setSocialAccount(e.target.value)}
                    placeholder="方便专业外贸顾问进一步沟通"
                    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-xs text-slate-900 bg-slate-50"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 border border-slate-200 text-slate-700 py-3.5 rounded-xl font-semibold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    返回上一步
                  </button>

                  <button
                    type="submit"
                    className="w-2/3 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all cursor-pointer text-sm flex items-center justify-center gap-2"
                  >
                    <span>立即提交并领取方案</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={onOpenPrivacy}
                    className="text-[11px] text-slate-400 hover:text-blue-600 hover:underline cursor-pointer"
                  >
                    查看客番番的隐私政策
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Success Step & AI Tailored Strategy */}
            {step === 3 && (
              <div className="text-center py-4 space-y-6 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>

                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-2">
                    提交成功，我们会尽快联系你！
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
                    我们已收到你的信息，将在 24 小时内与您联系，为你准备适合你行业的 FB/INS 自动获客方案。
                  </p>
                </div>

                {/* AI Tailored Strategy Report Card */}
                {aiReport && (
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="text-xs font-bold text-blue-600 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        客番番 AI 自动为你匹配的初步拓客规划
                      </span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                        适合 {businessType}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {aiReport.recommendedStrategy}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                      <div className="p-2 bg-white rounded-lg border border-slate-200">
                        <span className="text-slate-400 block text-[10px]">定向 Meta 兴趣词</span>
                        <span className="font-bold text-slate-800">{aiReport.metaInterests[0]}</span>
                      </div>
                      <div className="p-2 bg-white rounded-lg border border-slate-200">
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
                    再次填写新咨询
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
