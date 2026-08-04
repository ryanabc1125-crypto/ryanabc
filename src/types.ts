export type BusinessType = '工厂' | '外贸团队' | '跨境卖家' | '本地商家';

export type PainPoint = 
  | '没客户' 
  | '广告太贵' 
  | '想自动化获客' 
  | '缺少外贸运营经验' 
  | '询盘转化率低' 
  | '人工回复不及时';

export type ExportMarket = '欧洲' | '北美' | '东南亚' | '中东' | '拉美' | '全球';

export type LeadStatus = '新线索' | 'AI已背调' | 'WA对接中' | '已预约演示' | '已成交';
export type LeadIntentRating = 'A' | 'B' | 'C';

export interface LeadSubmission {
  id: string;
  createdAt: string;
  businessType: BusinessType;
  painPoints: PainPoint[];
  exportMarket?: ExportMarket;
  name: string;
  phone: string;
  demoRequested: '是' | '否';
  socialAccount?: string;
  industryCategory?: string;
  status?: LeadStatus;
  intentRating?: LeadIntentRating;
  budgetEst?: string;
  notes?: string[];
  assignedAgent?: string;
  aiSolutionSummary?: {
    metaInterests: string[];
    suggestedPlatforms: string[];
    monthlyEstimatedInquiries: number;
    recommendedStrategy: string;
  };
}

export interface IndustryRoiInput {
  industry: string;
  businessType: BusinessType;
  teamSize: number;
  monthlyAdBudget: number;
  currentInquiries: number;
}

export interface LiveInquiryFeedItem {
  id: string;
  country: string;
  countryFlag: string;
  buyerName: string;
  platform: 'Facebook' | 'Instagram' | 'WhatsApp';
  industry: string;
  messagePreview: string;
  timeAgo: string;
  valueEst: string;
}

export interface CaseStudy {
  id: string;
  companyName: string;
  industry: string;
  location: string;
  businessType: BusinessType;
  beforeStatus: string;
  afterResult: string;
  inquiryGrowth: string;
  costReduction: string;
  quote: string;
  authorTitle: string;
  avatarUrl: string;
}
