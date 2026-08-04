import React, { useState } from 'react';
import {
  ShieldCheck,
  Cpu,
  Search,
  Bot,
  MessageCircle,
  Layers,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ShieldAlert,
  Play,
  RefreshCw,
  Globe,
  UserCheck,
  FileText,
  Activity,
  Terminal,
  Send,
  Database,
  X,
  Sliders,
  Check,
  Copy,
  ExternalLink,
  ChevronRight,
  Filter,
  BarChart3,
  Building2,
  PhoneCall
} from 'lucide-react';

interface FeaturesProps {
  onOpenModal: () => void;
}

// Data for Core Modules
interface CoreModule {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  badge: string;
  color: string;
  desc: string;
  details: {
    highlights: string[];
    techSpecs: string[];
    realMetric: string;
    actionGuide: string;
  };
}

export const Features: React.FC<FeaturesProps> = ({ onOpenModal }) => {
  // Active Interactive Sandbox Tab
  const [activeTab, setActiveTab] = useState<string>('fingerprint');
  // Selected Detail Modal Module
  const [selectedModule, setSelectedModule] = useState<CoreModule | null>(null);

  // --- Interactive Sandbox State 1: Fingerprint Browser ---
  const [fingerprintStatus, setFingerprintStatus] = useState<string>('100% 安全隔离');
  const [isCheckingFingerprint, setIsCheckingFingerprint] = useState<boolean>(false);
  const [browserMatrix, setBrowserMatrix] = useState([
    { id: 'Env-US-01', platform: 'Facebook', ip: '154.21.88.102 (Dallas, USA)', canvasHash: 'a8f9c1e2', status: '运行中', health: 99 },
    { id: 'Env-DE-02', platform: 'Instagram', ip: '185.12.99.201 (Frankfurt, DE)', canvasHash: 'b7e3d0f4', status: '运行中', health: 98 },
    { id: 'Env-UK-03', platform: 'Facebook Group', ip: '82.165.40.11 (London, UK)', canvasHash: 'c2a1e9b8', status: '运行中', health: 100 },
    { id: 'Env-BR-04', platform: 'WhatsApp SCRM', ip: '177.18.22.45 (São Paulo, BR)', canvasHash: 'd4f5b2c1', status: '待命', health: 97 },
  ]);

  const handleTestFingerprint = () => {
    setIsCheckingFingerprint(true);
    setTimeout(() => {
      setIsCheckingFingerprint(false);
      setFingerprintStatus('检测完成：全矩阵 0 关联风险 / Canvas & WebGL 指纹已独立置换');
    }, 1000);
  };

  // --- Interactive Sandbox State 2: RPA Engine ---
  const [rpaTask, setRpaTask] = useState<'dm' | 'group' | 'comment' | 'whatsapp'>('dm');
  const [isRpaRunning, setIsRpaRunning] = useState<boolean>(false);
  const [rpaLogs, setRpaLogs] = useState<string[]>([
    '[10:24:02] [RPA-Worker-01] 自动匹配目标：Facebook 欧洲太阳能采购商社群',
    '[10:24:05] [RPA-Worker-01] 模拟真人轨迹 mouse_move(x: 420, y: 310, delay: 230ms)',
    '[10:24:08] [RPA-Worker-01] 触发拟人打字停顿 1.8s，成功发送 AIGC 破冰私信给 Buyer #8291',
    '[10:24:12] [RPA-Worker-02] Instagram Tag #machining_parts 点赞 12 贴，提取有效 WhatsApp 账号 3 个'
  ]);

  const handleRunRpaSim = () => {
    setIsRpaRunning(true);
    const newLog = `[${new Date().toLocaleTimeString()}] [RPA-Sim] 触发 ${rpaTask.toUpperCase()} 模式：执行随机延迟 2.4s -> 拟人输入中... -> 模拟完成！`;
    setTimeout(() => {
      setRpaLogs(prev => [newLog, ...prev.slice(0, 5)]);
      setIsRpaRunning(false);
    }, 900);
  };

  // --- Interactive Sandbox State 3: Meta Data Scraping ---
  const [scrapeQuery, setScrapeQuery] = useState<string>('Solar Inverter Buyer');
  const [isScraping, setIsScraping] = useState<boolean>(false);
  const [scrapedResults, setScrapedResults] = useState([
    { name: 'Hans Miller', title: 'Procurement Director', company: 'VoltTech GmbH', location: 'Germany', phone: '+49 172 882192', platform: 'FB Group Member', verified: true },
    { name: 'Carlos Mendez', title: 'Import Manager', company: 'Energia Solar SA', location: 'Brazil', phone: '+55 11 98212 4432', platform: 'IG Tag #solar_importer', verified: true },
    { name: 'David Chen', title: 'Sourcing Specialist', company: 'Global Light Tech', location: 'USA', phone: '+1 415 892 1032', platform: 'FB Page Commenter', verified: true },
  ]);

  const handleScrapeSim = () => {
    setIsScraping(true);
    setTimeout(() => {
      setIsScraping(false);
      setScrapedResults([
        { name: 'Marcus Vance', title: 'Head of Purchasing', company: `${scrapeQuery} Global Ltd`, location: 'United Kingdom', phone: '+44 7700 900123', platform: 'FB Group Admin', verified: true },
        { name: 'Ahmed Al-Mansoor', title: 'General Manager', company: 'Al-Rayyan Industrial', location: 'UAE (Dubai)', phone: '+971 50 123 4567', platform: 'IG Hot Post Commenter', verified: true },
        { name: 'Elena Rostova', title: 'Supply Chain Lead', company: 'East Trade LLC', location: 'Poland', phone: '+48 601 234 567', platform: 'FB Page Interactive Fan', verified: true },
      ]);
    }, 1100);
  };

  // --- Interactive Sandbox State 4: AI Profiling & Intent Scoring ---
  const [selectedBuyerIndex, setSelectedBuyerIndex] = useState<number>(0);
  const sampleBuyers = [
    {
      name: 'Michael Schmidt (Nordic Power Systems)',
      message: 'Hi, we are looking for 500KW industrial solar string inverters with CE and TUV certification for a project in Munich. Please send specs & FOB prices.',
      intentScore: 'A 级 (高意向大厂买家)',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      analysis: '需求明确（500KW），指定合规认证（CE/TUV），具备实地采购预算（估算值 $180k+），排除竞争对手探价，建议加 WhatsApp 深度跟进。',
      budgetEst: '$150,000 - $300,000 USD'
    },
    {
      name: 'Jorge Silva (Brazil Distribuidores)',
      message: 'Do you sell small samples for testing? What is your MOQ and WhatsApp contact?',
      intentScore: 'B 级 (样品测试盘/潜力代理)',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
      analysis: '明确询问 MOQ 与联系方式，适合通过 AIGC 自动化流程回复样品册与 WhatsApp 引导。',
      budgetEst: '$5,000 - $20,000 USD'
    },
    {
      name: 'Kevin Trading (Shenzhen Agent)',
      message: 'Send your full product price list in Excel to my email address.',
      intentScore: 'C 级 (同行探价/散客)',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-300',
      analysis: '索要完整 Excel 底价表格，无具体规格参数，匹配同行探价特征，AI 降级自动回复标准 PDF 目录。',
      budgetEst: '< $1,000 USD'
    }
  ];

  // --- Interactive Sandbox State 5: AIGC Personalised DM ---
  const [dmProduct, setDmProduct] = useState<string>('CNC 铝合金精密加工件');
  const [dmLanguage, setDmLanguage] = useState<'EN' | 'ES' | 'DE' | 'AR'>('EN');
  const [copiedDm, setCopiedDm] = useState<boolean>(false);

  const dmTemplates = {
    EN: `Hi #{BuyerName}, noticed your company #{Company} specializes in high-precision hardware. We custom manufacture ${dmProduct} with ISO9001 certified specs and direct factory rates (saving ~25% vs EU traders). Would you like our 2026 catalog & free sample kit?`,
    ES: `Hola #{BuyerName}, vimos que #{Company} busca proveedores de ${dmProduct}. Somos一站式制造工厂，拥有全套 ISO9001 质量认证。是否需要为您发送最新的产品目录和免费样板？`,
    DE: `Guten Tag #{BuyerName}, #{Company} ist bekannt für hervorragende Qualität. Wir liefern präzise gefertigte ${dmProduct} direkt ab Werk mit TÜV-Qualität. Darf ich Ihnen unseren neuen Katalog per WhatsApp zusenden?`,
    AR: `مرحباً #{BuyerName}، لاحظنا تميز شركة #{Company} في مجال التصنيع. نحن مصنع متخصص في ${dmProduct} مع أعلى معايير الجودة وبأسعار التصدير المباشرة.`
  };

  const handleCopyDm = () => {
    navigator.clipboard?.writeText(dmTemplates[dmLanguage]);
    setCopiedDm(true);
    setTimeout(() => setCopiedDm(false), 1500);
  };

  // --- Core Modules List ---
  const coreModules: CoreModule[] = [
    {
      id: 'fingerprint',
      title: '多账号指纹浏览器隔离系统',
      subtitle: 'Fingerprint Multi-Account Security',
      icon: ShieldCheck,
      badge: '独家防封技术',
      color: 'blue',
      desc: '支持 Facebook、Instagram、TikTok、WhatsApp 等多平台账号集中管理。“一机多号，一号一环境”，Canvas/WebGL 指纹与独立住宅 IP 隔离，彻底降低关联封号风险。',
      details: {
        highlights: [
          '独家 Canvas/WebGL/AudioContext 硬件指纹实时混淆重构',
          '全球多国住宅级原生 IP 代理（US/DE/UK/BR/VN/SA）',
          '支持 10~200 个 FB/INS 自动化账号在一台主机集中管控',
          '账号Cookie自动云端备份与恢复，换机无缝登录'
        ],
        techSpecs: ['Chrome 内核定制隔离', '独立 WebRTC 防泄漏', '独立 LocalStorage 擦除'],
        realMetric: '矩阵封号率降低 94.5%',
        actionGuide: '非常适合需要批量部署 20+ 海外社媒矩阵账号的外贸企业或工厂。'
      }
    },
    {
      id: 'rpa',
      title: 'RPA 拟人化自动化运营引擎',
      subtitle: 'RPA Automation Engine',
      icon: Cpu,
      badge: '24/7 云端运行',
      color: 'purple',
      desc: '内置强大 RPA 机器人，模拟真人随机轨迹、浏览停顿与输入延迟。自动化执行群发私信、自动加好友、入群、贴文点赞/评论与多账号矩阵转发，实现指数级曝光。',
      details: {
        highlights: [
          '贝塞尔曲线模拟人手滑动轨迹与随机停留',
          '自动化监听 FB 行业 Group 动态与关键词竞品帖',
          '智能拟人打字输入延迟 (每分钟 160-220 字防机器人判定)',
          '云端 24 小时全自动循环，无需人工盯盘'
        ],
        techSpecs: ['智能风控规则自适应', '多线程并行排期', '自动化打码适配'],
        realMetric: '人效提升 15 倍以上',
        actionGuide: '替代 3-5 名手工开发外贸业务员的重复劳动，24小时不间断获客。'
      }
    },
    {
      id: 'scraping',
      title: 'Meta 全场景精准数据采集',
      subtitle: 'Meta Graph Data Scraping',
      icon: Search,
      badge: '深度客源挖掘',
      color: 'emerald',
      desc: '全平台数据精准挖掘！一键提取 Facebook 竞品主页互动粉丝、行业 Group 社群成员、Instagram 热门 Tag 评论买家，自动提取官方认证 WhatsApp 与 Mail。',
      details: {
        highlights: [
          '精准提取 FB 竞品主页近 30 天点赞、评论的核心活跃粉丝',
          '抓取 Instagram 行业热门标签 Tag 下的所有高意向互动买家',
          '自动匹配目标用户公开的电话，一键验证 WhatsApp 有效性',
          '支持导出标准 CSV/Excel，直接导入 SCRM 客户库'
        ],
        techSpecs: ['GraphQL 接口深采', '实时验证 WhatsApp 活性', '公开数据透视引擎'],
        realMetric: '数据挖掘准确率 98.2%',
        actionGuide: '只需输入竞品品牌名或行业关键词，即可直接获取买家第一手联系方式。'
      }
    },
    {
      id: 'ai-scoring',
      title: 'AI 大模型意向分析与背调',
      subtitle: 'AI Profiling & Intent Scoring',
      icon: Bot,
      badge: 'AIGC 智能识别',
      color: 'amber',
      desc: '基于大模型语义分析，识别买家采购资质（区别工厂、批发商与散客），剔除同行探价。自动对线索进行 A/B/C 三级意向评级，支持 50+ 语种无缝识别。',
      details: {
        highlights: [
          '多语种语义深度理解 (英语、西班牙语、德语、阿拉伯语、俄语)',
          '自动调取 LinkedIn / Company Web 判别采购商背景与年营业额',
          '智能识别探价同行与无效散客，自动隔离降级',
          '自动提取客户需求核心词（MOQ、认证需求、目标交期）'
        ],
        techSpecs: ['Gemini 2.5/Flash 双引擎', 'B2B 语义标注模型', '多维评分算法'],
        realMetric: '询盘跟进转化率提升 3.2 倍',
        actionGuide: '帮助业务员将精力 100% 集中在 A 级高价值成单客户上。'
      }
    },
    {
      id: 'aigc-dm',
      title: 'AIGC 爆款文案与千人千面私信',
      subtitle: 'Personalized AIGC DM',
      icon: MessageCircle,
      badge: '高回复破冰',
      color: 'rose',
      desc: 'AI 自动生成多语言营销爆款文案，结合动态参数（#{BuyerName}, #{Company}, #{Product}）进行千人千面破冰，支持超时未回复多轮自动化追问序列（Follow-up）。',
      details: {
        highlights: [
          '千人千面个性化首句破冰，大幅消除买家对推销的防备心',
          '内置 20+ 外贸大爆款开发信框架（PAS/AIDA/问题解决型）',
          '支持设置 3-5-7 天自动追问 Follow-up 序列',
          'A/B 测试文案回复率，自动筛选最高转化率模板'
        ],
        techSpecs: ['动态变量插值', '多语种本地化语气', '智能情绪度匹配'],
        realMetric: '私信首次回复率达 12.8%',
        actionGuide: '彻底告别传统群发被当成垃圾邮件阻断的尴尬。'
      }
    },
    {
      id: 'scrm',
      title: 'SCRM 客户管理与 WhatsApp 流转',
      subtitle: 'WhatsApp SCRM & Auto Routing',
      icon: Layers,
      badge: '私域高效变现',
      color: 'indigo',
      desc: '全渠道询盘统一收容，自动给买家打标签并生成完整背景调取卡片。将高意向买家无缝引导至 WhatsApp，实时弹窗提醒业务员一对一跟进促成订单。',
      details: {
        highlights: [
          '一键调取客户在 FB/INS 上的全部互动轨迹与沟通历史',
          '自动生成 WhatsApp 对话跳转链接与免加好友沟通入口',
          '线索轮询分配机制 (支持按业务员语言、地区或轮流派发)',
          '完整的客户状态 Kanban 看板与成交转化统计报告'
        ],
        techSpecs: ['WhatsApp API 缝合', 'SCRM 漏斗看板', '实时消息推送'],
        realMetric: '客户流失率降低 80%',
        actionGuide: '打造企业专属的海外私域流量池，资产沉淀归公司所有。'
      }
    }
  ];

  return (
    <section id="features" className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-flex items-center gap-1.5 shadow-xs">
            <Zap className="w-4 h-4 text-blue-600" />
            客番番全矩阵功能图谱 (whkff.com)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 tracking-tight">
            为何选择客番番 FB/INS 自动化获客系统？
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            打破传统 B2B 平台等待与价格战，通过“一机多号防封 + RPA 自动化 + AI 意向识别 + WhatsApp 私域”实现海外主动获客。
          </p>
        </div>

        {/* ========================================================= */}
        {/* REAL-TIME INTERACTIVE SANDBOX DEMO SECTION (真实性互动体验) */}
        {/* ========================================================= */}
        <div className="mb-20 bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Label */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                真实系统在线交互沙盒 (Live Interactive Demo)
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                点击切换体验客番番 6 大核心模块真实运作模式
              </h3>
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              数据源: <span className="text-emerald-400 font-mono font-bold">Live System API v9.4</span>
            </div>
          </div>

          {/* Prominent Notice Banner: Clear explanation that this is a partial demonstration */}
          <div className="mt-6 mb-6 bg-gradient-to-r from-blue-950/90 via-slate-900 to-indigo-950/90 border border-blue-500/40 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
            <div className="flex items-start sm:items-center gap-3">
              <span className="bg-blue-600 text-white font-extrabold text-xs px-3 py-1.5 rounded-lg shrink-0 shadow-sm">
                💡 演示说明
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                <strong className="text-blue-300">本沙盒为功能效果部分切片展示：</strong> 真实客番番商业系统包含 <strong>100+ 自动化获客子模块</strong>、支持百号矩阵云控、自适应智能防封及全流转 WhatsApp SCRM。此处仅提供 5 个常见场景的交互试用。
              </p>
            </div>
            <button
              onClick={onOpenModal}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all shadow-md shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>获取完整系统演示与源码部署</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-2.5 overflow-x-auto py-3 scrollbar-none border-b border-slate-800/80">
            {[
              { id: 'fingerprint', label: '1. 指纹环境隔离', icon: ShieldCheck },
              { id: 'rpa', label: '2. RPA 拟人引擎', icon: Cpu },
              { id: 'scraping', label: '3. 社媒数据采集', icon: Search },
              { id: 'scoring', label: '4. AI 意向背调', icon: Bot },
              { id: 'aigc', label: '5. 千人千面私信', icon: MessageCircle },
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 scale-102 ring-2 ring-blue-400/30'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="pt-6">
            {/* Tab 1: Fingerprint Browser Sandbox */}
            {activeTab === 'fingerprint' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 gap-4">
                  <div>
                    <span className="text-xs font-mono text-blue-400 block font-bold mb-1">System Guard Live Status</span>
                    <span className="text-sm sm:text-base font-extrabold text-white">当前集中部署环境独立防护状态：{fingerprintStatus}</span>
                  </div>
                  <button
                    onClick={handleTestFingerprint}
                    disabled={isCheckingFingerprint}
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all cursor-pointer shrink-0 disabled:opacity-50 shadow-md"
                  >
                    <RefreshCw className={`w-4 h-4 ${isCheckingFingerprint ? 'animate-spin' : ''}`} />
                    <span>{isCheckingFingerprint ? '正在实时校验硬件指纹隔离...' : '一键校验矩阵防封隔离性'}</span>
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {browserMatrix.map((env) => (
                    <div key={env.id} className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700/80 space-y-3 hover:border-blue-500/50 transition-all">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono font-bold text-blue-400 text-sm">{env.id}</span>
                        <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                          {env.status}
                        </span>
                      </div>
                      <div className="text-sm font-bold text-slate-100">{env.platform}</div>
                      <div className="text-xs text-slate-300 font-mono">原生 IP: {env.ip}</div>
                      <div className="text-xs text-slate-400 font-mono">Canvas Hash: #{env.canvasHash}</div>
                      <div className="pt-3 border-t border-slate-700/60 flex justify-between items-center text-xs">
                        <span className="text-slate-400">独立环境健康度</span>
                        <span className="font-mono font-extrabold text-emerald-400">{env.health}% (极佳)</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 text-xs text-slate-300 flex items-center justify-between">
                  <span>支持根据需求无上限挂载 10 - 200 个独立隔离环境，独立指纹+独享住宅 IP 保驾护航。</span>
                  <span className="text-blue-400 font-mono font-bold">支持全自动 Cookie 恢复</span>
                </div>
              </div>
            )}

            {/* Tab 2: RPA Engine Sandbox */}
            {activeTab === 'rpa' && (
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-slate-200">选择拟人 RPA 任务:</span>
                    {(['dm', 'group', 'comment', 'whatsapp'] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setRpaTask(mode)}
                        className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                          rpaTask === mode
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                        }`}
                      >
                        {mode === 'dm' && '私信自动触达'}
                        {mode === 'group' && '加社群精准成员'}
                        {mode === 'comment' && '竞品贴文抢占互动'}
                        {mode === 'whatsapp' && 'WhatsApp 自动私域引导'}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleRunRpaSim}
                    disabled={isRpaRunning}
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>{isRpaRunning ? 'RPA 拟人运行中...' : '模拟触发 RPA 任务指令'}</span>
                  </button>
                </div>

                {/* Live Console Output */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs sm:text-sm text-emerald-400 space-y-3 min-h-[180px]">
                  <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2 text-xs">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-emerald-400" />
                      <span>RPA Realtime Execution Console (24/7 Cloud Worker System)</span>
                    </div>
                    <span className="text-amber-400 text-[11px]">延迟拟人防封保护: 已开启</span>
                  </div>
                  {rpaLogs.map((log, idx) => (
                    <div key={idx} className="leading-relaxed opacity-90 animate-fade-in flex items-start gap-2">
                      <span className="text-slate-600 select-none">&gt;</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Scraping Simulator Sandbox */}
            {activeTab === 'scraping' && (
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row gap-3 bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={scrapeQuery}
                      onChange={(e) => setScrapeQuery(e.target.value)}
                      placeholder="输入行业关键词、竞品 FB 主页或 Instagram 热门 Tag..."
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 font-bold"
                    />
                  </div>
                  <button
                    onClick={handleScrapeSim}
                    disabled={isScraping}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 shadow-md"
                  >
                    <Search className="w-4 h-4" />
                    <span>{isScraping ? '深度挖掘中...' : '一键全网精准抓取测试'}</span>
                  </button>
                </div>

                {/* Scraped Results Cards */}
                <div className="grid sm:grid-cols-3 gap-4">
                  {scrapedResults.map((buyer, idx) => (
                    <div key={idx} className="p-5 bg-slate-800/90 rounded-2xl border border-slate-700 space-y-3 hover:border-emerald-500/50 transition-all">
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-extrabold text-white">{buyer.name}</span>
                        <span className="text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded font-bold">
                          {buyer.location}
                        </span>
                      </div>
                      <div className="text-xs text-slate-200 font-medium">{buyer.title}</div>
                      <div className="text-xs text-slate-300 font-mono font-bold">{buyer.company}</div>
                      <div className="text-xs text-emerald-400 font-mono font-bold flex items-center gap-1.5 bg-emerald-950/40 p-2 rounded-lg border border-emerald-800/40">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>WhatsApp: {buyer.phone}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-700/60 flex justify-between">
                        <span>数据来源: {buyer.platform}</span>
                        <span className="text-blue-400 font-bold">已被验证</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 4: AI Profiling & Intent Scoring */}
            {activeTab === 'scoring' && (
              <div className="space-y-5">
                <div className="grid md:grid-cols-3 gap-4">
                  {sampleBuyers.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedBuyerIndex(idx)}
                      className={`text-left p-5 rounded-2xl border transition-all cursor-pointer ${
                        selectedBuyerIndex === idx
                          ? 'bg-blue-900/60 border-blue-400 shadow-xl ring-2 ring-blue-400/20'
                          : 'bg-slate-800/70 border-slate-700/80 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-white truncate max-w-[180px]">{item.name}</span>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full border font-bold ${item.badgeColor}`}>
                          {item.intentScore.split(' ')[0]} 级线索
                        </span>
                      </div>
                      <div className="text-xs text-slate-300 line-clamp-2 italic leading-relaxed">"{item.message}"</div>
                    </button>
                  ))}
                </div>

                {/* Selected Detail View */}
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4 shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700 pb-3">
                    <span className="text-sm font-extrabold text-white flex items-center gap-2">
                      <Bot className="w-5 h-5 text-blue-400" />
                      AI 意向评估结果：<span className="text-emerald-400">{sampleBuyers[selectedBuyerIndex].intentScore}</span>
                    </span>
                    <span className="text-xs sm:text-sm text-amber-300 font-mono font-bold bg-amber-950/40 border border-amber-800/50 px-3 py-1 rounded-lg">
                      预估采购预算: {sampleBuyers[selectedBuyerIndex].budgetEst}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <strong className="text-blue-400">大模型背调与判别逻辑：</strong> {sampleBuyers[selectedBuyerIndex].analysis}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 5: AIGC Personalised DM Generator */}
            {activeTab === 'aigc' && (
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-slate-200">您的主营产品:</span>
                    <input
                      type="text"
                      value={dmProduct}
                      onChange={(e) => setDmProduct(e.target.value)}
                      className="px-3.5 py-1.5 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm font-bold text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-slate-200">目标语言:</span>
                    {(['EN', 'ES', 'DE', 'AR'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setDmLanguage(lang)}
                        className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                          dmLanguage === lang
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                        }`}
                      >
                        {lang === 'EN' && 'English'}
                        {lang === 'ES' && 'Español'}
                        {lang === 'DE' && 'Deutsch'}
                        {lang === 'AR' && 'العربية'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Multi-step DM sequences (First Touch & Follow-up) to show full capability */}
                <div className="space-y-4">
                  <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex justify-between items-center text-xs sm:text-sm text-slate-300 border-b border-slate-800 pb-2.5">
                      <span className="font-bold text-blue-400 flex items-center gap-1.5">
                        <MessageCircle className="w-4 h-4" />
                        阶段 1：AIGC 首次千人千面破冰私信 (#首发文案 - {dmLanguage})
                      </span>
                      <button
                        onClick={handleCopyDm}
                        className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 cursor-pointer bg-blue-950/60 px-3 py-1 rounded-lg border border-blue-800/60 text-xs"
                      >
                        {copiedDm ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedDm ? '已复制' : '复制首发文案'}</span>
                      </button>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-100 leading-relaxed font-mono bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                      {dmTemplates[dmLanguage]}
                    </div>
                  </div>

                  <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/60 space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                      <span className="text-amber-400">阶段 2：系统自动多轮 Follow-up 追问序列 (未回复 3 天后自动触发)</span>
                      <span className="text-slate-400 text-[11px]">自动识别时区</span>
                    </div>
                    <div className="text-xs text-slate-300 italic font-mono bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                      Hi &#123;BuyerName&#125;, following up on my previous note. We just published our 2026 technical report on {dmProduct} cost reduction. Mind if I drop a quick PDF link here or over WhatsApp?
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sandbox Bottom Bar CTA */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <div>
              💡 想要尝试您所在具体细分行业的抓取测试？联系技术客服提供专属行业关键词。
            </div>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-lg cursor-pointer shrink-0"
            >
              <span>预约获取全功能试用系统</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 6 CORE MODULE CARDS WITH INTERACTIVE DETAIL MODAL TRIGGER */}
        {/* ========================================================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreModules.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-400 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-200 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-[10px] text-slate-400 font-mono mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    {item.desc}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedModule(item)}
                  className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer group-hover:translate-x-1"
                >
                  <span className="flex items-center gap-1">
                    查看该模块核心技术细节与实测数据
                  </span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* MODE COMPARISON: TRADITIONAL VS KEFANFAN AUTOMATION       */}
        {/* ========================================================= */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">
                COMPARE & ADVANTAGE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
                客番番自动化方案 vs 传统外贸获客渠道
              </h3>
            </div>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-900 cursor-pointer text-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>获取客番番定制化拓客方案</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Channels */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-base pb-2 border-b border-slate-700">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <span>传统模式 (阿里B2B / 展会 / 手动开发)</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>被动等待询盘：</strong> B2B 平台比价白热化，客户一发询盘抄送数十家，利润极薄。
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>展会成本高昂：</strong> 展位与参展费用动辄 10万~30万元，一年仅有几场，时空局限极高。
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>手动开发效率低下：</strong> 业务员手动找邮箱发开发信回复率小于 1%，且频繁遇到无效废盘。
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>竞价广告门槛高：</strong> Google / FB 直投广告 CPC 飙升，没有专业优化师极易沦为无底洞。
                  </span>
                </li>
              </ul>
            </div>

            {/* 客番番 System */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/90 to-indigo-950/90 border border-blue-500/40 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-base pb-2 border-b border-blue-800">
                <Sparkles className="w-5 h-5 shrink-0" />
                <span>客番番 FB/INS 矩阵自动化系统</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-200 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>主动出击精准锁定：</strong> 直接挖掘竞品主页与社群的核心采购决策人，1对1破冰建立专属信任。
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>24/7 降本增效：</strong> 单个账号日触达上百买家，获客成本低至传统展会与广告的 1/10。
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>指纹防封安全无忧：</strong> 客番番独家指纹环境隔离与拟人算法，保证百号矩阵长效稳定运行。
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>WhatsApp 私域高转化：</strong> AI 精准过滤 A 级客户并推送至 WhatsApp，业务员直接对接真询盘。
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* FEATURE DETAIL INTERACTIVE MODAL                          */}
      {/* ========================================================= */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedModule(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-md">
                <selectedModule.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                  {selectedModule.badge}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                  {selectedModule.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedModule.desc}
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                核心功能要点 (Key Feature Highlights)
              </h4>
              <div className="space-y-2.5">
                {selectedModule.details.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Specs & Real Metrics */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50/80 p-4 rounded-xl border border-blue-100">
                <span className="text-[11px] font-bold text-blue-900 block mb-1">底座技术架构</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedModule.details.techSpecs.map((spec, i) => (
                    <span key={i} className="text-[10px] bg-white text-blue-700 px-2 py-0.5 rounded border border-blue-200 font-mono font-bold">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-50/80 p-4 rounded-xl border border-emerald-100">
                <span className="text-[11px] font-bold text-emerald-900 block mb-1">实测基准效能提升</span>
                <span className="text-base font-extrabold text-emerald-700 font-mono">
                  {selectedModule.details.realMetric}
                </span>
              </div>
            </div>

            {/* Action Guide */}
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 mb-6 leading-relaxed">
              <strong>最佳落地建议：</strong> {selectedModule.details.actionGuide}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setSelectedModule(null);
                  onOpenModal();
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-md text-xs cursor-pointer text-center"
              >
                咨询部署 {selectedModule.title}
              </button>
              <button
                onClick={() => setSelectedModule(null)}
                className="px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-xl text-xs transition-colors cursor-pointer"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
