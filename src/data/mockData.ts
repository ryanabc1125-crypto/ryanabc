import { CaseStudy, LeadSubmission, LiveInquiryFeedItem } from '../types';

export const INITIAL_LEADS: LeadSubmission[] = [
  {
    id: 'lead-1001',
    createdAt: '2026-08-03 14:22',
    businessType: '工厂 / 生产商',
    painPoints: ['没客户', '想自动化获客'],
    exportMarket: '欧洲',
    name: '张总 (宁波数控机床)',
    phone: '13812349201',
    demoRequested: '是',
    socialAccount: 'WX: cnc_machining_export',
    industryCategory: '工业机械与自动化设备',
    status: 'AI已背调',
    intentRating: 'A',
    budgetEst: '$150,000 - $300,000 USD',
    assignedAgent: 'AI业务助理 #01',
    notes: [
      '2026-08-03 14:30: AI完成大模型背调：工厂具备 500KW 生产线，采购预算高',
      '2026-08-03 15:10: 客户在系统领取了《欧洲数控获客蓝皮书》'
    ],
    aiSolutionSummary: {
      metaInterests: ['Industrial Automation', 'CNC Machining', 'Metalworking'],
      suggestedPlatforms: ['Facebook Page Group Scraping', 'Instagram Reel Product Showcase'],
      monthlyEstimatedInquiries: 45,
      recommendedStrategy: '聚焦欧洲精密制造买家，通过 FB 行业社群自动化爬取+AI智能私信开场，匹配多语种 Catalog 自动发送。'
    }
  },
  {
    id: 'lead-1002',
    createdAt: '2026-08-03 10:15',
    businessType: '外贸团队',
    painPoints: ['广告太贵', '缺人力 / 没时间'],
    exportMarket: '北美',
    name: '陈经理 (深圳时尚女装)',
    phone: '13988775823',
    demoRequested: '是',
    socialAccount: 'WA: +86 13988775823',
    industryCategory: '服装纺织与鞋帽',
    status: 'WA对接中',
    intentRating: 'A',
    budgetEst: '$50,000 - $100,000 USD',
    assignedAgent: '王牌外贸顾问 艾米莉',
    notes: [
      '2026-08-03 10:20: 已通过系统一键拉起 WhatsApp 沟通',
      '2026-08-03 11:05: 客户希望本周三演示全自动 IG 抓取及自动私信流程'
    ],
    aiSolutionSummary: {
      metaInterests: ['Fashion Boutique Owner', 'Clothing Wholesale', 'Apparel Importers'],
      suggestedPlatforms: ['Instagram Direct Automated Outreach', 'FB Reel Short Videos'],
      monthlyEstimatedInquiries: 80,
      recommendedStrategy: '利用 Instagram 精准获客组件，自动触达北美独立站精品店与批发商，自动化表单捕获线索。'
    }
  },
  {
    id: 'lead-1003',
    createdAt: '2026-08-02 18:40',
    businessType: '跨境卖家',
    painPoints: ['没客户', '广告太贵', 'FB/INS 不会做'],
    exportMarket: '东南亚',
    name: '李先生 (义乌家居用品)',
    phone: '13799881190',
    demoRequested: '否',
    socialAccount: 'TG: @yiwu_decor_global',
    industryCategory: '家居建材与日常用品',
    status: '新线索',
    intentRating: 'B',
    budgetEst: '$10,000 - $30,000 USD',
    assignedAgent: '智能系统待派发',
    notes: [
      '2026-08-02 18:40: 客户提交需求，关注东南亚 FB Marketplace 自动铺货与跟进'
    ],
    aiSolutionSummary: {
      metaInterests: ['Home Decor Wholesale', 'Retail Store Buyers'],
      suggestedPlatforms: ['FB Marketplace Mass Auto Post', 'WhatsApp Automated Funnel'],
      monthlyEstimatedInquiries: 60,
      recommendedStrategy: '东南亚区域多渠道矩阵获客，自动筛选出具备采购意向的买家并推送到 WhatsApp 客服对接。'
    }
  },
  {
    id: 'lead-1004',
    createdAt: '2026-08-02 12:10',
    businessType: '工厂 / 生产商',
    painPoints: ['想自动化获客', 'FB/INS 不会做'],
    exportMarket: '中东',
    name: '穆经理 (佛山 LED 户外照明)',
    phone: '13655443322',
    demoRequested: '是',
    socialAccount: 'WA: +86 13655443322',
    industryCategory: 'LED照明与建筑灯饰',
    status: '已预约演示',
    intentRating: 'A',
    budgetEst: '$200,000 - $500,000 USD',
    assignedAgent: '资深方案架构师',
    notes: [
      '2026-08-02 13:00: 确认沙特 Riyadh 商业街照明项目需求',
      '2026-08-03 09:30: 已锁定 8月5日 上午10点 远程演示系统实时抓取中东工程商数据'
    ],
    aiSolutionSummary: {
      metaInterests: ['Solar Street Light', 'Lighting Contractor', 'Architectural Lighting'],
      suggestedPlatforms: ['FB Group Member Extraction', 'WhatsApp SCRM Auto Nurture'],
      monthlyEstimatedInquiries: 75,
      recommendedStrategy: '抓取中东各建筑与工程 Group 社群成员，结合阿拉伯语 AIGC 破冰文案进行爆破。'
    }
  },
  {
    id: 'lead-1005',
    createdAt: '2026-08-01 16:50',
    businessType: '本地商家',
    painPoints: ['没客户', '广告太贵'],
    exportMarket: '拉美',
    name: 'Sofia (墨西哥光伏逆变器代理)',
    phone: '+52 55 1234 5678',
    demoRequested: '是',
    socialAccount: 'WA: +52 55 1234 5678',
    industryCategory: '新能源与光伏储能',
    status: '已成交',
    intentRating: 'A',
    budgetEst: '$350,000 USD (年采购)',
    assignedAgent: '海外事业部 托马斯',
    notes: [
      '2026-08-01 17:00: 客户首批订购客番番 50 账号指纹隔离及 RPA 云控版本',
      '2026-08-02 11:00: 系统部署完毕，已上线运作'
    ],
    aiSolutionSummary: {
      metaInterests: ['Solar Inverter Wholesale', 'Energy Storage System'],
      suggestedPlatforms: ['Meta Full Graph Scraping', 'RPA Automated Messaging'],
      monthlyEstimatedInquiries: 110,
      recommendedStrategy: '全渠道自动化抓取拉美新能源分销商，无缝对接 WhatsApp 客服组。'
    }
  }
];

export const LIVE_INQUIRY_FEED: LiveInquiryFeedItem[] = [
  {
    id: 'feed-1',
    country: '德国',
    countryFlag: '🇩🇪',
    buyerName: 'Klaus M.',
    platform: 'Facebook',
    industry: '工业精密设备',
    messagePreview: 'We need 50 units of CNC parts. Please send product specs & FOB quote.',
    timeAgo: '2分钟前',
    valueEst: '$45,000'
  },
  {
    id: 'feed-2',
    country: '美国',
    countryFlag: '🇺🇸',
    buyerName: 'Sarah Jenkins',
    platform: 'Instagram',
    industry: '时尚女装批发',
    messagePreview: 'Hi! Do you support OEM/ODM for custom apparel design in small MOQs?',
    timeAgo: '5分钟前',
    valueEst: '$18,000'
  },
  {
    id: 'feed-3',
    country: '墨西哥',
    countryFlag: '🇲🇽',
    buyerName: 'Carlos R.',
    platform: 'WhatsApp',
    industry: '新能源储能电池',
    messagePreview: 'Looking for distributor partnership in LATAM. Are certificates available?',
    timeAgo: '12分钟前',
    valueEst: '$80,000'
  },
  {
    id: 'feed-4',
    country: '沙特阿拉伯',
    countryFlag: '🇸🇦',
    buyerName: 'Tariq A.',
    platform: 'Facebook',
    industry: '建材与户外照明',
    messagePreview: 'Require solar street light samples for commercial project in Riyadh.',
    timeAgo: '18分钟前',
    valueEst: '$120,000'
  },
  {
    id: 'feed-5',
    country: '越南',
    countryFlag: '🇻🇳',
    buyerName: 'Nguyen Van B.',
    platform: 'Instagram',
    industry: '电子3C配件',
    messagePreview: 'Please share your wholesale catalog & MOQ list for Wireless Earbuds.',
    timeAgo: '25分钟前',
    valueEst: '$12,000'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    companyName: '佛山豪迈灯饰照明',
    industry: 'LED照明与建材',
    location: '广东佛山',
    businessType: '工厂 / 生产商',
    beforeStatus: '依赖传统展会与B2B平台公海抢单，获客成本高且有效询盘连年缩减。',
    afterResult: '部署客番番 FB/INS 自动化获客系统，24小时自动化挖掘海外工程商与灯饰买家。',
    inquiryGrowth: '+320%',
    costReduction: '-68%',
    quote: '客番番的精准竞品粉丝挖掘和自动私信触达功能太惊艳了！上线第一个月就拿到了 42 个来自中东和欧美的真实工程订单询盘。',
    authorTitle: '林总 · 海外外贸总监',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'case-2',
    companyName: '苏州鼎泰数控科技',
    industry: '工业机械设备',
    location: '江苏苏州',
    businessType: '外贸团队',
    beforeStatus: 'Google 竞价广告费用高昂，单条询盘成本超 $120，且大量假线索充斥。',
    afterResult: '配置客番番 Meta 行为标签深度获客方案，实现精准买家定向与自动化 WhatsApp 引导。',
    inquiryGrowth: '+210%',
    costReduction: '-55%',
    quote: '通过客番番获取的询盘意向极其明确，买家直接附带了图纸和采购预算，成交周期缩短了一半！',
    authorTitle: '王经理 · 外贸业务主管',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'case-3',
    companyName: '杭州雅姿服饰饰品',
    industry: '服装饰品与美妆',
    location: '浙江杭州',
    businessType: '跨境卖家',
    beforeStatus: '人工在 Instagram 手动发私信效率低下，账号容易封禁且回复跟不上。',
    afterResult: '使用客番番智能视觉矩阵与云端防封营销闭环，批量自动化触达海外 Buy-side 机构。',
    inquiryGrowth: '+450%',
    costReduction: '-75%',
    quote: '以前3个人每天只能触达50个客户，现在系统每天全自动私信 800+ 目标买家，客服只需要负责收询盘收钱！',
    authorTitle: 'Sophie · 品牌创始人',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  }
];

export interface ExtendedIndustryTemplate {
  label: string;
  value: string;
  avgDealSize: number; // USD
  avgInquiryMultiplier: number;
  traditionalCPL: number; // USD
  kefanfanCPL: number; // USD
  conversionRate: number; // %
  dailyScrapeCapacity: number;
  aiIntentAccuracy: number; // %
  sampleKeywords: string[];
  sampleBuyerType: string;
}

export const INDUSTRY_TEMPLATES: ExtendedIndustryTemplate[] = [
  {
    label: '工业机械与五金设备',
    value: '工业机械与五金设备',
    avgDealSize: 28000,
    avgInquiryMultiplier: 4.2,
    traditionalCPL: 135,
    kefanfanCPL: 11.2,
    conversionRate: 2.8,
    dailyScrapeCapacity: 1450,
    aiIntentAccuracy: 95.1,
    sampleKeywords: ['CNC Machine', 'Laser Cutter', 'Hydraulic Press', 'Machinery Importer'],
    sampleBuyerType: '机械设备进口商 / 工业制造厂 / 区域总代理'
  },
  {
    label: 'LED照明与建筑灯饰',
    value: 'LED照明与建筑灯饰',
    avgDealSize: 12500,
    avgInquiryMultiplier: 4.8,
    traditionalCPL: 85,
    kefanfanCPL: 7.8,
    conversionRate: 3.6,
    dailyScrapeCapacity: 1800,
    aiIntentAccuracy: 94.2,
    sampleKeywords: ['Solar Street Light', 'Architectural Lighting', 'LED Strip Wholesale', 'Lighting Contractor'],
    sampleBuyerType: '照明工程商 / 建材批发商 / 项目承包商'
  },
  {
    label: '汽配零件与摩托配件',
    value: '汽配零件与摩托配件',
    avgDealSize: 16800,
    avgInquiryMultiplier: 4.1,
    traditionalCPL: 95,
    kefanfanCPL: 8.9,
    conversionRate: 3.2,
    dailyScrapeCapacity: 1600,
    aiIntentAccuracy: 93.8,
    sampleKeywords: ['Auto Spare Parts', 'Brake Pads Manufacturer', 'Alloy Wheels Wholesale', 'Motorcycle Accessories'],
    sampleBuyerType: '汽配连锁分销商 / 修理厂采买部 / 跨境B2B卖家'
  },
  {
    label: '家居建材与室内软装',
    value: '家居建材与室内软装',
    avgDealSize: 18500,
    avgInquiryMultiplier: 4.0,
    traditionalCPL: 105,
    kefanfanCPL: 9.4,
    conversionRate: 3.0,
    dailyScrapeCapacity: 1520,
    aiIntentAccuracy: 92.9,
    sampleKeywords: ['Sanitary Ware', 'Ceramic Tiles Wholesale', 'Custom Furniture OEM', 'Building Material Importer'],
    sampleBuyerType: '建材超市采购经理 / 室内设计事务所 / 房地产开发商'
  },
  {
    label: '电子3C与数码配件',
    value: '电子3C与数码配件',
    avgDealSize: 8500,
    avgInquiryMultiplier: 5.2,
    traditionalCPL: 65,
    kefanfanCPL: 5.8,
    conversionRate: 4.5,
    dailyScrapeCapacity: 2200,
    aiIntentAccuracy: 91.5,
    sampleKeywords: ['Wireless Earbuds OEM', 'GaN Fast Charger', 'Smart Watch Wholesale', 'Consumer Electronics'],
    sampleBuyerType: '数码连锁品牌商 / 亚马逊3C卖家 / 地方零售渠道商'
  },
  {
    label: '服装纺织与鞋帽饰品',
    value: '服装纺织与鞋帽饰品',
    avgDealSize: 9200,
    avgInquiryMultiplier: 5.0,
    traditionalCPL: 70,
    kefanfanCPL: 6.2,
    conversionRate: 4.2,
    dailyScrapeCapacity: 2100,
    aiIntentAccuracy: 93.1,
    sampleKeywords: ['Apparel Manufacturer OEM', 'Fabric Supplier', 'Custom Activewear', 'Boutique Wholesale'],
    sampleBuyerType: '海外独立站品牌主 / 服装批发档口 / 时尚买手'
  },
  {
    label: '新能源与光伏储能',
    value: '新能源与光伏储能',
    avgDealSize: 45000,
    avgInquiryMultiplier: 3.6,
    traditionalCPL: 160,
    kefanfanCPL: 14.5,
    conversionRate: 2.1,
    dailyScrapeCapacity: 1100,
    aiIntentAccuracy: 96.4,
    sampleKeywords: ['Solar Inverter Supplier', 'LiFePO4 Lithium Battery', 'Off Grid Solar Kit', 'Energy Storage System'],
    sampleBuyerType: '新能源项目安装商 / 电力系统集成商 / 区域独家代理'
  },
  {
    label: '美妆护肤与个人护理',
    value: '美妆护肤与个人护理',
    avgDealSize: 7800,
    avgInquiryMultiplier: 4.6,
    traditionalCPL: 60,
    kefanfanCPL: 5.5,
    conversionRate: 4.8,
    dailyScrapeCapacity: 1950,
    aiIntentAccuracy: 92.4,
    sampleKeywords: ['Skincare OEM Private Label', 'Cosmetics Packaging', 'Beauty Tools Wholesale', 'Hair Care Supplier'],
    sampleBuyerType: '美妆品牌创办人 / 连锁美容院采买 / 美妆带货网红机构'
  },
  {
    label: '医疗器械与防护耗材',
    value: '医疗器械与防护耗材',
    avgDealSize: 32000,
    avgInquiryMultiplier: 3.4,
    traditionalCPL: 150,
    kefanfanCPL: 13.8,
    conversionRate: 2.4,
    dailyScrapeCapacity: 1050,
    aiIntentAccuracy: 95.8,
    sampleKeywords: ['Medical Equipment Distributor', 'Dental Unit Wholesale', 'Surgical Supplies', 'Hospital Furniture'],
    sampleBuyerType: '医疗器械进口持牌商 / 医院采购代理 / 连锁诊所采购主管'
  },
  {
    label: '安防监控与智能硬件',
    value: '安防监控与智能硬件',
    avgDealSize: 14200,
    avgInquiryMultiplier: 4.3,
    traditionalCPL: 90,
    kefanfanCPL: 8.2,
    conversionRate: 3.4,
    dailyScrapeCapacity: 1680,
    aiIntentAccuracy: 94.0,
    sampleKeywords: ['CCTV Security Camera OEM', 'Access Control System', 'Smart Lock Supplier', 'Security Solution'],
    sampleBuyerType: '安防工程商 / 系统集成商 / 智慧社区承包商'
  }
];
