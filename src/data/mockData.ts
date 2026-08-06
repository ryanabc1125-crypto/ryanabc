import { CaseStudy, LeadSubmission, LiveInquiryFeedItem } from '../types';

export const INITIAL_LEADS: LeadSubmission[] = [
  {
    id: 'lead-001',
    createdAt: '2026-08-06 11:20:15',
    name: '陈建国 (海外事业部)',
    phone: '+86 138-0013-8821 / WA: +86 13800138821',
    businessType: '工厂 / 生产商',
    painPoints: ['广告太贵', '想自动化获客'],
    exportMarket: '欧洲',
    industryCategory: '工业机械与五金设备',
    status: '已成交',
    intentRating: 'A',
    validityCategory: '高价值重客',
    demoRequested: '是',
    isDeleted: false,
    budgetEst: '$120,000 USD',
    notes: ['[2026-08-06 11:20:15] 通过 FB 广告留资', '[2026-08-06 12:00:00] AI 已完成背调，确认德国买家有 CNC 采购需求', '[2026-08-06 13:10:00] 签约客番番专业版套餐']
  },
  {
    id: 'lead-002',
    createdAt: '2026-08-06 10:45:00',
    name: 'Marcus Vance (Vance Trading)',
    phone: '+1 (415) 892-3301',
    businessType: '外贸团队',
    painPoints: ['没客户', 'FB/INS 不会做'],
    exportMarket: '北美',
    industryCategory: 'LED照明与建筑灯饰',
    status: '已预约演示',
    intentRating: 'A',
    validityCategory: '高价值重客',
    demoRequested: '是',
    isDeleted: false,
    budgetEst: '$85,000 USD',
    notes: ['[2026-08-06 10:45:00] 系统自动抓取 Ins 评论区采购意向', '[2026-08-06 11:15:00] 已推送到 WhatsApp 并预约今天下午15:00演示']
  },
  {
    id: 'lead-003',
    createdAt: '2026-08-06 09:30:12',
    name: '张晓琳 (雅美服饰)',
    phone: '+86 159-2018-9932',
    businessType: '跨境卖家',
    painPoints: ['缺人力 / 没时间', '想自动化获客'],
    exportMarket: '东南亚',
    industryCategory: '服装纺织与鞋帽饰品',
    status: 'WA对接中',
    intentRating: 'B',
    validityCategory: '有效线索',
    demoRequested: '是',
    isDeleted: false,
    budgetEst: '$30,000 USD',
    notes: ['[2026-08-06 09:30:12] 官网提交表单咨询独立站引流', '[2026-08-06 10:00:00] 正在通过 WhatsApp 发送产品目录PDF']
  },
  {
    id: 'lead-004',
    createdAt: '2026-08-06 08:15:40',
    name: 'Tariq Al-Maktoum (Gulf Energy Ltd)',
    phone: '+971 50 892 1104',
    businessType: '工厂 / 生产商',
    painPoints: ['没客户', '广告太贵'],
    exportMarket: '中东',
    industryCategory: '新能源与光伏储能',
    status: 'AI已背调',
    intentRating: 'A',
    validityCategory: '高价值重客',
    demoRequested: '是',
    isDeleted: false,
    budgetEst: '$250,000 USD',
    notes: ['[2026-08-06 08:15:40] 指纹真机抓取沙特光伏项目招标询盘', '[2026-08-06 08:40:00] AI背调匹配企业资产超 $500M']
  },
  {
    id: 'lead-005',
    createdAt: '2026-08-06 07:05:18',
    name: '李伟 (鼎盛汽配出口部)',
    phone: '+86 137-9988-1234',
    businessType: '外贸团队',
    painPoints: ['想自动化获客'],
    exportMarket: '拉美',
    industryCategory: '汽配零件与摩托配件',
    status: '新线索',
    intentRating: 'B',
    validityCategory: '有效线索',
    demoRequested: '是',
    isDeleted: false,
    budgetEst: '$45,000 USD',
    notes: ['[2026-08-06 07:05:18] 提交 ROI 估算器后生成方案']
  },
  {
    id: 'lead-006',
    createdAt: '2026-08-05 23:40:10',
    name: 'Sofia Rodriguez (Importaciones MX)',
    phone: '+52 55 4123 9876',
    businessType: '跨境卖家',
    painPoints: ['FB/INS 不会做'],
    exportMarket: '拉美',
    industryCategory: '电子3C与数码配件',
    status: 'WA对接中',
    intentRating: 'B',
    validityCategory: '有效线索',
    demoRequested: '否',
    isDeleted: false,
    budgetEst: '$20,000 USD',
    notes: ['[2026-08-05 23:40:10] FB 帖子留言 "Need wireless earbuds wholesale quote"']
  },
  {
    id: 'lead-007',
    createdAt: '2026-08-05 21:15:00',
    name: '王强 (华美家具实业)',
    phone: '+86 186-0000-5678',
    businessType: '工厂 / 生产商',
    painPoints: ['没客户', '缺人力 / 没时间'],
    exportMarket: '欧洲',
    industryCategory: '家居建材与室内软装',
    status: '已预约演示',
    intentRating: 'A',
    validityCategory: '高价值重客',
    demoRequested: '是',
    isDeleted: false,
    budgetEst: '$180,000 USD',
    notes: ['[2026-08-05 21:15:00] 佛山工厂负责人申请现场演示']
  },
  {
    id: 'lead-008',
    createdAt: '2026-08-05 18:20:30',
    name: 'Nguyen Van Minh (VinaTech)',
    phone: '+84 90 312 4567',
    businessType: '本地商家',
    painPoints: ['广告太贵'],
    exportMarket: '东南亚',
    industryCategory: '安防监控与智能硬件',
    status: 'AI已背调',
    intentRating: 'B',
    validityCategory: '待核实',
    demoRequested: '否',
    isDeleted: false,
    budgetEst: '$15,000 USD',
    notes: ['[2026-08-05 18:20:30] 越南代理商咨询安防摄像头 OEM']
  },
  {
    id: 'lead-009',
    createdAt: '2026-08-05 16:10:45',
    name: ' Dr. Hans Mueller (MedEquip Europe)',
    phone: '+49 89 7654 3210',
    businessType: '工厂 / 生产商',
    painPoints: ['想自动化获客'],
    exportMarket: '欧洲',
    industryCategory: '医疗器械与防护耗材',
    status: '已成交',
    intentRating: 'A',
    validityCategory: '高价值重客',
    demoRequested: '是',
    isDeleted: false,
    budgetEst: '$350,000 USD',
    notes: ['[2026-08-05 16:10:45] 德国医疗设备进口持牌商', '[2026-08-05 17:30:00] 签订独家跟进协议']
  },
  {
    id: 'lead-010',
    createdAt: '2026-08-05 14:05:00',
    name: '周莉 (美尚妆品出海)',
    phone: '+86 135-1234-5678',
    businessType: '跨境卖家',
    painPoints: ['FB/INS 不会做'],
    exportMarket: '全球',
    industryCategory: '美妆护肤与个人护理',
    status: '新线索',
    intentRating: 'C',
    validityCategory: '待核实',
    demoRequested: '否',
    isDeleted: false,
    budgetEst: '$10,000 USD',
    notes: ['[2026-08-05 14:05:00] 提交社媒诊断测试']
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
