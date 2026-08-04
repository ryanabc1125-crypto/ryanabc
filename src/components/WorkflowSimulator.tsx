import React, { useState, useEffect } from 'react';
import {
  Search,
  Filter,
  Send,
  MessageCircle,
  Play,
  CheckCircle2,
  RefreshCw,
  ArrowRight,
  ShieldCheck,
  Globe,
  Bot,
  Zap,
  Sliders,
  Terminal,
  Building2,
  Phone,
  Tag,
  BarChart3,
  Sparkles,
  Users
} from 'lucide-react';
import { INDUSTRY_TEMPLATES, ExtendedIndustryTemplate } from '../data/mockData';

export const WorkflowSimulator: React.FC = () => {
  const [selectedIndustryVal, setSelectedIndustryVal] = useState<string>(INDUSTRY_TEMPLATES[0].value);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulatedCount, setSimulatedCount] = useState<number>(1420);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [accountsActive] = useState<number>(120);

  const matchedIndustry: ExtendedIndustryTemplate =
    INDUSTRY_TEMPLATES.find((i) => i.value === selectedIndustryVal) || INDUSTRY_TEMPLATES[0];

  const steps = [
    {
      id: 1,
      title: '1. 全网社群与竞品数据采集',
      subTitle: 'Meta Graph & Social Mining',
      icon: Search,
      badge: '深度数据层',
      desc: `精准采集 Facebook 行业 Group (${matchedIndustry.sampleKeywords[0]}) 成员、同行 Page 互动粉丝以及 Instagram 热帖买家。`,
      details: [
        `基于关键词 [${matchedIndustry.sampleKeywords.join(', ')}] 爬取全球买家`,
        `智能过滤个人与低劣账号，聚焦 ${matchedIndustry.sampleBuyerType}`,
        '全网匹配并提取真实 WhatsApp 号码、企业 Mail 及 LinkedIn 主页'
      ],
      kpis: {
        capacity: `每日精准挖掘 ${matchedIndustry.dailyScrapeCapacity.toLocaleString()} 名行业决策人`,
        accuracy: '买家真实身份匹配率 98.6%'
      }
    },
    {
      id: 2,
      title: '2. 指纹浏览器 & RPA 拟人矩阵',
      subTitle: 'Fingerprint & Anti-Detection RPA',
      icon: ShieldCheck,
      badge: '防封环境层',
      desc: '客番番独家指纹浏览器隔离技术，单台电脑安全并发 100+ 海外社媒账号，拟人行为曲线防封。',
      details: [
        '独立纯净住宅 IP 与 Canvas/WebGL 指纹环境隔离，实现一号一机',
        '模拟真人随机点击、阅读停顿（15-45s 延迟），规避平台风控算法',
        '自动执行多账号定时群发、贴文点赞与私信交互'
      ],
      kpis: {
        capacity: `并发运行 ${accountsActive} 个全功能独立矩阵账号`,
        accuracy: '账号健康度 99.8% (0风控触发)'
      }
    },
    {
      id: 3,
      title: '3. AI 画像打分与 AICG 千人千面',
      subTitle: 'AI Intent Scoring & AIGC DM',
      icon: Bot,
      badge: 'AI 智能层',
      desc: '大模型深度解析买家背景与采购能力，自动排除同行探价，AIGC 多语种个性化私信破冰。',
      details: [
        `AI 意向度分级（A级急需 / B级潜客 / C级无效/同行侦察，精准度 ${matchedIndustry.aiIntentAccuracy}%）`,
        '自动识别 50+ 海外语种（英语/德语/西班牙语/阿拉伯语等）',
        '千人千面动态变量破冰 (#{BuyerName}, #{Company}, #{ProductInterest})'
      ],
      kpis: {
        capacity: '私信触达打开率 68.5%',
        accuracy: `AI 意向精准鉴别率 ${matchedIndustry.aiIntentAccuracy}%`
      }
    },
    {
      id: 4,
      title: '4. WhatsApp SCRM 私域询盘收容',
      subTitle: 'WhatsApp SCRM & Auto Routing',
      icon: MessageCircle,
      badge: '高转化私域',
      desc: '无缝将高意向买家引导至 WhatsApp 或企业微信，携带完整背调卡片并实时派发业务员跟进。',
      details: [
        '自动同步买家采购意向、公司规模、联系电话至 SCRM 系统',
        'WhatsApp 自动化跟进序列与超时未回复智能追问',
        '线索全流程追溯与团队业绩流转看板'
      ],
      kpis: {
        capacity: '平均单业务员日收高品质询盘 3-8 条',
        accuracy: '客户询盘转化成单率提升 2.8 倍'
      }
    }
  ];

  // Update logs when industry or step changes
  useEffect(() => {
    generateInitialLogs(activeStep, matchedIndustry);
  }, [activeStep, selectedIndustryVal]);

  const generateInitialLogs = (step: number, ind: ExtendedIndustryTemplate) => {
    const timestamp = new Date().toLocaleTimeString('zh-CN', { hour12: false });
    if (step === 1) {
      setConsoleLogs([
        `[${timestamp}] [KEFANFAN-ENGINE] Initiating Meta Graph Scrape node...`,
        `[${timestamp}] [QUERY] Keywords: "${ind.sampleKeywords[0]}", Target Region: Global B2B`,
        `[${timestamp}] [FILTER] Applying business profile filter rules for: ${ind.sampleBuyerType}`,
        `[${timestamp}] [SUCCESS] Extracted 142 new target buyer profiles with WhatsApp signatures.`,
        `[${timestamp}] [STATUS] Raw candidate pool updated. Ready for AI intent evaluation.`
      ]);
    } else if (step === 2) {
      setConsoleLogs([
        `[${timestamp}] [FINGERPRINT-ENGINE] Checking 120 isolated browser instances...`,
        `[${timestamp}] [PROXY-CHECK] Residential IP node US-EAST-04 (104.28.19.82) - Latency: 42ms (Clean)`,
        `[${timestamp}] [RPA-ACTION] Humanoid delay algorithm active (Random sleep: 28.4s)`,
        `[${timestamp}] [SECURITY] Canvas fingerprint hash verified: 0x9f8a3d (Risk Score: 0.01%)`,
        `[${timestamp}] [STATUS] Matrix outreach queue running safely.`
      ]);
    } else if (step === 3) {
      setConsoleLogs([
        `[${timestamp}] [AI-INTENT] Processing buyer: "Karlsson Engineering GmbH" (Germany)`,
        `[${timestamp}] [LLM-EVAL] Semantic analysis: High intent for ${ind.sampleKeywords[0]} OEM/ODM`,
        `[${timestamp}] [SCORE] Assigned INTENT_GRADE: A (Confidence: 96.4%)`,
        `[${timestamp}] [AIGC-GEN] Generated personalized English outreach script with Catalog link.`,
        `[${timestamp}] [STATUS] Message dispatched via isolated FB Messenger channel.`
      ]);
    } else if (step === 4) {
      setConsoleLogs([
        `[${timestamp}] [SCRM-HUB] Buyer replied on WhatsApp: "+49 171 8921****"`,
        `[${timestamp}] [MESSAGE] "Hello, please send FOB price for 500 units of ${ind.sampleKeywords[0]}."`,
        `[${timestamp}] [ROUTING] Auto-assigned to Sales Representative #3 (Jack Zhou)`,
        `[${timestamp}] [NOTIFICATION] Real-time desktop & WeChat push notification triggered.`,
        `[${timestamp}] [STATUS] Lead status set to: INQUIRY_ACTIVE`
      ]);
    }
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    let count = simulatedCount;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 8) + 2;
      setSimulatedCount(count);
      const timestamp = new Date().toLocaleTimeString('zh-CN', { hour12: false });
      setConsoleLogs((prev) => [
        `[${timestamp}] [LIVE-SIMULATION] Captured live buyer: ${matchedIndustry.sampleKeywords[Math.floor(Math.random() * matchedIndustry.sampleKeywords.length)]} Importer (+${Math.floor(Math.random() * 90) + 10} Score)`,
        ...prev.slice(0, 4)
      ]);
    }, 400);

    setTimeout(() => {
      clearInterval(interval);
      setIsSimulating(false);
    }, 2800);
  };

  return (
    <section id="workflow" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100 inline-flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-purple-600" />
            客番番自动化获客引擎
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 tracking-tight">
            全链路自动化询盘是如何产生的？
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            基于多账号指纹浏览器、RPA 拟人化脚本与 AI 大模型意向分析，完成从海外社交公海到 WhatsApp 私域订单的自动闭环。
          </p>
        </div>

        {/* Industry Selector Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-blue-600" />
            <span className="text-xs sm:text-sm font-bold text-slate-800">
              切换行业演练场景：
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {INDUSTRY_TEMPLATES.slice(0, 6).map((item) => (
              <button
                key={item.value}
                onClick={() => setSelectedIndustryVal(item.value)}
                className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                  selectedIndustryVal === item.value
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {item.label.split('与')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step) => {
              const IconComponent = step.icon;
              const isActive = activeStep === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                    isActive
                      ? 'bg-white border-blue-500 shadow-md ring-2 ring-blue-500/10'
                      : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">{step.title}</h4>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {step.subTitle}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {step.badge}
                    </span>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed ml-12">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Console / Live Dashboard */}
          <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-slate-800 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
            {/* Console Header */}
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    kefanfan_matrix_v4.8.0 --{matchedIndustry.value}
                  </span>
                </div>

                <button
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all cursor-pointer disabled:opacity-50 shadow-md shadow-blue-900"
                >
                  {isSimulating ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current" />
                  )}
                  <span>{isSimulating ? '模拟并发挖掘中...' : '启动客番番挖掘'}</span>
                </button>
              </div>

              {/* Dynamic Content Display per Step */}
              {steps.map((step) => {
                if (step.id !== activeStep) return null;
                const IconComponent = step.icon;
                return (
                  <div key={step.id} className="space-y-6">
                    {/* Header info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{step.title}</h3>
                          <p className="text-xs text-slate-400">
                            当前品类: <span className="text-blue-300 font-semibold">{matchedIndustry.label}</span>
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-black text-emerald-400 font-mono">
                          {simulatedCount.toLocaleString()}
                        </div>
                        <div className="text-[10px] text-slate-400">实时可用买家数据</div>
                      </div>
                    </div>

                    {/* Feature Details List */}
                    <div className="bg-slate-950/90 rounded-2xl p-4 border border-slate-800 space-y-2.5 font-mono text-xs">
                      <div className="text-slate-400 flex items-center justify-between border-b border-slate-800/80 pb-2 mb-2">
                        <span className="flex items-center gap-1 text-blue-400 font-bold">
                          <Terminal className="w-3.5 h-3.5" />
                          系统执行特征 (Feature Checklist)
                        </span>
                        <span className="text-[10px] bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-800">
                          安全闭环引擎
                        </span>
                      </div>

                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Live System Terminal Logs */}
                    <div className="bg-black/60 rounded-xl p-3 border border-slate-800 font-mono text-[11px] space-y-1 text-slate-300">
                      <div className="text-[10px] text-slate-500 mb-1 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        实时日志数据流 (Live Telemetry Log Stream):
                      </div>
                      {consoleLogs.map((log, i) => (
                        <div key={i} className="truncate text-slate-300 font-mono">
                          {log}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Real Metrics Footer */}
            <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                <div className="text-[10px] text-slate-400">特定品类预期处理量</div>
                <div className="text-xs font-bold text-white mt-0.5">
                  {steps[activeStep - 1].kpis.capacity}
                </div>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                <div className="text-[10px] text-slate-400">系统核心能力标准</div>
                <div className="text-xs font-bold text-emerald-400 mt-0.5">
                  {steps[activeStep - 1].kpis.accuracy}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
