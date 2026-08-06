import React, { useState } from 'react';
import {
  X,
  Download,
  Database,
  Phone,
  CheckCircle2,
  UserCheck,
  Search,
  Trash2,
  LayoutGrid,
  ListFilter,
  Plus,
  MessageCircle,
  Bot,
  Sparkles,
  ChevronRight,
  Calendar,
  User,
  ArrowRight,
  Tag,
  AlertCircle,
  FileText,
  Send,
  Clock,
  ShieldCheck,
  TrendingUp,
  SlidersHorizontal,
  ExternalLink,
  Edit3
} from 'lucide-react';
import { LeadSubmission, LeadStatus, LeadIntentRating, BusinessType } from '../types';
import { Logo } from './Logo';

interface LeadsAdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  leads: LeadSubmission[];
  onUpdateLead: (lead: LeadSubmission) => void;
  onAddLead: (lead: LeadSubmission) => void;
  onClearLeads: () => void;
}

const PIPELINE_STAGES: { key: LeadStatus; label: string; icon: any; color: string; badgeBg: string }[] = [
  { key: '新线索', label: '1. 📥 新线索入口', icon: Database, color: 'border-slate-300 bg-slate-50/50', badgeBg: 'bg-slate-200 text-slate-800' },
  { key: 'AI已背调', label: '2. 🔍 AI智能背调', icon: Bot, color: 'border-blue-300 bg-blue-50/30', badgeBg: 'bg-blue-100 text-blue-800' },
  { key: 'WA对接中', label: '3. 💬 WA私域对接', icon: MessageCircle, color: 'border-purple-300 bg-purple-50/30', badgeBg: 'bg-purple-100 text-purple-800' },
  { key: '已预约演示', label: '4. 🤝 预约系统演示', icon: Calendar, color: 'border-amber-300 bg-amber-50/30', badgeBg: 'bg-amber-100 text-amber-800' },
  { key: '已成交', label: '5. 🎉 已成功成交', icon: CheckCircle2, color: 'border-emerald-300 bg-emerald-50/30', badgeBg: 'bg-emerald-100 text-emerald-800' }
];

export const LeadsAdminDrawer: React.FC<LeadsAdminDrawerProps> = ({
  isOpen,
  onClose,
  leads,
  onUpdateLead,
  onAddLead,
  onClearLeads,
}) => {
  const [viewMode, setViewMode] = useState<'kanban' | 'list'>('kanban');
  const [filterType, setFilterType] = useState<string>('全部');
  const [filterRating, setFilterRating] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Lead Detail Modal
  const [activeLead, setActiveLead] = useState<LeadSubmission | null>(null);
  const [newNoteInput, setNewNoteInput] = useState<string>('');

  // Manual Add Lead Modal
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [addForm, setAddForm] = useState({
    name: '',
    phone: '',
    businessType: '工厂 / 生产商' as BusinessType,
    industryCategory: '工业机械与自动化设备',
    exportMarket: '欧洲',
    intentRating: 'A' as LeadIntentRating,
    budgetEst: '$100,000 USD'
  });

  if (!isOpen) return null;

  // Filter logic
  const filteredLeads = leads.filter((item) => {
    const matchesType = filterType === '全部' || item.businessType === filterType;
    const matchesRating = filterRating === '全部' || (item.intentRating || 'B') === filterRating;
    const matchesQuery =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone.includes(searchQuery) ||
      (item.industryCategory && item.industryCategory.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.exportMarket && item.exportMarket.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesRating && matchesQuery;
  });

  // Calculate stats metrics
  const totalLeadsCount = leads.length;
  const aGradeCount = leads.filter(l => (l.intentRating || 'B') === 'A').length;
  const demoScheduledCount = leads.filter(l => l.status === '已预约演示' || l.status === '已成交').length;
  const closedCount = leads.filter(l => l.status === '已成交').length;

  const exportToCSV = () => {
    if (leads.length === 0) return;
    const headers = ['ID', '提交时间', '客户姓名', '联系电话/WhatsApp', '状态', 'AI评级', '预估预算', '业务类型', '品类行业', '目标市场', '跟进人员', '痛点问题'];
    const rows = leads.map((l) => [
      l.id,
      l.createdAt,
      `"${l.name}"`,
      `"${l.phone}"`,
      l.status || '新线索',
      l.intentRating || 'B',
      `"${l.budgetEst || '未标注'}"`,
      l.businessType,
      l.industryCategory || '未指定',
      l.exportMarket || '未指定',
      l.assignedAgent || '未分配',
      `"${l.painPoints.join(', ')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `kefanfan_leads_kanban_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUpdateStatus = (lead: LeadSubmission, newStatus: LeadStatus) => {
    const updated: LeadSubmission = {
      ...lead,
      status: newStatus,
      notes: [
        `[${new Date().toLocaleString()}] 状态变更为：${newStatus}`,
        ...(lead.notes || [])
      ]
    };
    onUpdateLead(updated);
    if (activeLead && activeLead.id === lead.id) {
      setActiveLead(updated);
    }
  };

  const handleAddNote = () => {
    if (!activeLead || !newNoteInput.trim()) return;
    const timeStr = new Date().toLocaleString();
    const updated: LeadSubmission = {
      ...activeLead,
      notes: [`[${timeStr}] ${newNoteInput.trim()}`, ...(activeLead.notes || [])]
    };
    onUpdateLead(updated);
    setActiveLead(updated);
    setNewNoteInput('');
  };

  const handleOpenWhatsApp = (phone: string, name: string) => {
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    const msg = encodeURIComponent(`Hi ${name}, 您好！我是客番番海外获客系统的技术顾问。注意到您在关注海外 FB/INS 自动化询盘获取与 WhatsApp SCRM，请问方便为您提供系统试用或案例参数吗？`);
    window.open(`https://wa.me/${cleanPhone}?text=${msg}`, '_blank');
  };

  const handleCreateNewLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!addForm.name || !addForm.phone) return;
    const newLead: LeadSubmission = {
      id: `lead-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toLocaleString('zh-CN', { hour12: false }),
      name: addForm.name,
      phone: addForm.phone,
      businessType: addForm.businessType,
      industryCategory: addForm.industryCategory,
      exportMarket: addForm.exportMarket as any,
      demoRequested: '是',
      status: '新线索',
      intentRating: addForm.intentRating,
      budgetEst: addForm.budgetEst,
      assignedAgent: 'AI业务助理 #01',
      painPoints: ['想自动化获客', 'FB/INS 不会做'],
      notes: [`[${new Date().toLocaleString()}] 后台管理员手动录入新增线索`],
      aiSolutionSummary: {
        metaInterests: [addForm.industryCategory, 'B2B Procurement', 'Importers'],
        suggestedPlatforms: ['Facebook Page Group Scraping', 'WhatsApp Funnel'],
        monthlyEstimatedInquiries: 50,
        recommendedStrategy: `针对 ${addForm.exportMarket} 市场的 ${addForm.industryCategory} 买家，进行全网矩阵精准全抓取。`
      }
    };
    onAddLead(newLead);
    setIsAddModalOpen(false);
    setAddForm({
      name: '',
      phone: '',
      businessType: '工厂 / 生产商',
      industryCategory: '工业机械与自动化设备',
      exportMarket: '欧洲',
      intentRating: 'A',
      budgetEst: '$100,000 USD'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white w-full max-w-6xl h-full shadow-2xl flex flex-col border-l border-slate-200 overflow-hidden">
        {/* ================= HEADER ================= */}
        <div className="p-5 border-b border-slate-200 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo variant="dark" size="sm" showTagline={false} />
            <div className="h-6 w-[1px] bg-slate-700 hidden sm:block" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-white text-lg">客番番 CRM 智能获客看板</h3>
                <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  表单实时联动 (0.1s)
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                  🔒 专属管理员通道
                </span>
              </div>
              <p className="text-xs text-slate-400">客户前台提交表单后立即全自动更新，有且仅有授权管理员可以访问</p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>+ 手动录入线索</span>
            </button>

            <button
              onClick={exportToCSV}
              disabled={leads.length === 0}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>导出全量 CSV</span>
            </button>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= METRICS STATS BAR ================= */}
        <div className="bg-slate-800 border-b border-slate-700 px-6 py-3.5 text-white grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="flex items-center gap-3 border-r border-slate-700/80 pr-2">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">总收集线索</span>
              <span className="text-lg font-extrabold text-white font-mono">{totalLeadsCount} 条</span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-r border-slate-700/80 pr-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">A 级高意向买家</span>
              <span className="text-lg font-extrabold text-emerald-400 font-mono">
                {aGradeCount} 条 ({totalLeadsCount ? Math.round((aGradeCount / totalLeadsCount) * 100) : 0}%)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-r border-slate-700/80 pr-2">
            <div className="w-9 h-9 rounded-xl bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">演示预约/深度意向</span>
              <span className="text-lg font-extrabold text-amber-300 font-mono">{demoScheduledCount} 家</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">成功签约/部署</span>
              <span className="text-lg font-extrabold text-purple-300 font-mono">{closedCount} 家</span>
            </div>
          </div>
        </div>

        {/* ================= FILTER & VIEW TOGGLE BAR ================= */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
            {/* View Mode Toggle */}
            <div className="bg-white border border-slate-200 rounded-xl p-1 flex items-center gap-1">
              <button
                onClick={() => setViewMode('kanban')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'kanban' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>看板阶段视图</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'list' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span>明细列表视图</span>
              </button>
            </div>

            <div className="h-5 w-[1px] bg-slate-300 hidden md:block" />

            {/* Business Type Filter */}
            <div className="flex items-center gap-1 overflow-x-auto">
              {['全部', '工厂', '外贸团队', '跨境卖家', '本地商家'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    filterType === type
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Rating Filter */}
            <div className="flex items-center gap-1">
              <span className="text-xs text-slate-400 font-medium ml-1">评级:</span>
              {['全部', 'A', 'B', 'C'].map((r) => (
                <button
                  key={r}
                  onClick={() => setFilterRating(r)}
                  className={`px-2 py-0.5 rounded text-xs font-bold cursor-pointer border ${
                    filterRating === r
                      ? 'bg-blue-100 text-blue-800 border-blue-300'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {r === '全部' ? '全部评级' : `${r}级`}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full md:w-56">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="搜索姓名 / 电话 / 行业..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 pl-8 pr-3 py-1.5 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            />
          </div>
        </div>

        {/* ================= MAIN CONTENT: KANBAN vs LIST ================= */}
        <div className="flex-1 overflow-x-auto overflow-y-auto p-4 bg-slate-100/70">
          {viewMode === 'kanban' ? (
            /* KANBAN BOARD COLUMNS */
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 min-w-[1000px] h-full items-start">
              {PIPELINE_STAGES.map((stage) => {
                const stageLeads = filteredLeads.filter((l) => (l.status || '新线索') === stage.key);
                const StageIcon = stage.icon;

                return (
                  <div
                    key={stage.key}
                    className={`rounded-2xl border ${stage.color} p-3 flex flex-col max-h-full bg-white shadow-xs`}
                  >
                    {/* Stage Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                      <div className="flex items-center gap-1.5 font-extrabold text-xs text-slate-900">
                        <StageIcon className="w-4 h-4 text-blue-600" />
                        <span>{stage.label}</span>
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${stage.badgeBg}`}>
                        {stageLeads.length}
                      </span>
                    </div>

                    {/* Cards Scrollable Container */}
                    <div className="space-y-3 overflow-y-auto flex-1 pr-1 scrollbar-thin">
                      {stageLeads.length === 0 ? (
                        <div className="text-center py-8 text-slate-400 text-xs border border-dashed border-slate-200 rounded-xl bg-slate-50/50">
                          暂无{stage.key}客户
                        </div>
                      ) : (
                        stageLeads.map((item) => (
                          <div
                            key={item.id}
                            className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all space-y-2.5 relative group cursor-pointer"
                            onClick={() => setActiveLead(item)}
                          >
                            {/* Card Top */}
                            <div className="flex items-center justify-between">
                              <span className="font-extrabold text-slate-900 text-xs hover:text-blue-600">
                                {item.name}
                              </span>
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                                  item.intentRating === 'A'
                                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                    : item.intentRating === 'C'
                                    ? 'bg-slate-100 text-slate-600 border-slate-200'
                                    : 'bg-blue-50 text-blue-800 border-blue-200'
                                }`}
                              >
                                {item.intentRating || 'B'}级线索
                              </span>
                            </div>

                            {/* Details */}
                            <div className="text-[11px] text-slate-600 space-y-1">
                              <div className="flex items-center gap-1 font-mono">
                                <Phone className="w-3 h-3 text-blue-600 shrink-0" />
                                <span>{item.phone}</span>
                              </div>
                              <div className="text-slate-500 font-medium truncate">
                                行业: {item.industryCategory || '未指定'}
                              </div>
                              {item.budgetEst && (
                                <div className="text-[10px] text-amber-700 font-mono font-bold">
                                  预算: {item.budgetEst}
                                </div>
                              )}
                            </div>

                            {/* Strategic Match Note */}
                            {item.aiSolutionSummary && (
                              <div className="p-2 bg-slate-50 rounded-lg text-[10px] text-slate-600 line-clamp-2">
                                🎯 {item.aiSolutionSummary.recommendedStrategy}
                              </div>
                            )}

                            {/* Quick Action Buttons */}
                            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-1 text-[10px]">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleOpenWhatsApp(item.phone, item.name);
                                }}
                                className="flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-bold bg-emerald-50 hover:bg-emerald-100 px-2 py-1 rounded transition-colors"
                              >
                                <MessageCircle className="w-3 h-3 text-emerald-600" />
                                <span>WA 沟通</span>
                              </button>

                              {/* Advance Stage Selector */}
                              <select
                                value={item.status || '新线索'}
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e) => {
                                  e.stopPropagation();
                                  handleUpdateStatus(item, e.target.value as LeadStatus);
                                }}
                                className="bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 text-[10px] font-bold text-slate-700 focus:outline-none"
                              >
                                {PIPELINE_STAGES.map((st) => (
                                  <option key={st.key} value={st.key}>
                                    {st.key}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* LIST VIEW */
            <div className="space-y-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-bold bg-slate-50">
                      <th className="p-3">线索 ID / 提交时间</th>
                      <th className="p-3">客户名称</th>
                      <th className="p-3">联系电话 / WA</th>
                      <th className="p-3">状态 / 评级</th>
                      <th className="p-3">类型 & 行业</th>
                      <th className="p-3">目标市场</th>
                      <th className="p-3 text-right">跟进操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {filteredLeads.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-mono text-[11px]">
                          <div className="font-bold text-slate-900">{item.id}</div>
                          <div className="text-slate-400">{item.createdAt}</div>
                        </td>
                        <td className="p-3 font-bold text-slate-900">{item.name}</td>
                        <td className="p-3 font-mono text-blue-600">{item.phone}</td>
                        <td className="p-3">
                          <div className="flex items-center gap-1.5">
                            <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full text-[10px]">
                              {item.status || '新线索'}
                            </span>
                            <span className="bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded text-[10px]">
                              {item.intentRating || 'B'}级
                            </span>
                          </div>
                        </td>
                        <td className="p-3">
                          <span className="font-bold text-slate-800">{item.businessType}</span> - {item.industryCategory || '未指定'}
                        </td>
                        <td className="p-3">
                          <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-bold text-[10px]">
                            {item.exportMarket || '全球'}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleOpenWhatsApp(item.phone, item.name)}
                              className="text-emerald-600 font-bold hover:underline flex items-center gap-1"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span>WA</span>
                            </button>
                            <button
                              onClick={() => setActiveLead(item)}
                              className="text-blue-600 font-bold hover:underline flex items-center gap-1"
                            >
                              <span>详尽背调</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* ================= FOOTER RESET & INFO ================= */}
        <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span>当前筛选显示 <strong>{filteredLeads.length}</strong> / 总共 <strong>{leads.length}</strong> 条分析记录</span>
            <span className="text-slate-300">|</span>
            <span className="text-emerald-600 font-bold">已启用自动云端同步与指纹关联防泄露</span>
          </div>

          {leads.length > 0 && (
            <button
              onClick={onClearLeads}
              className="text-rose-600 hover:text-rose-700 hover:underline flex items-center gap-1 cursor-pointer font-bold"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>清空所有测试记录</span>
            </button>
          )}
        </div>
      </div>

      {/* ================= LEAD DETAIL & AI AUDIT MODAL ================= */}
      {activeLead && (
        <div className="fixed inset-0 z-60 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setActiveLead(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shrink-0">
                {activeLead.name.slice(0, 1)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-extrabold text-slate-900">{activeLead.name}</h3>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full border border-emerald-300">
                    {activeLead.intentRating || 'A'} 级高意向
                  </span>
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-3 mt-1">
                  <span>电话: <strong className="font-mono text-slate-800">{activeLead.phone}</strong></span>
                  <span>提交时间: {activeLead.createdAt}</span>
                </div>
              </div>
            </div>

            {/* Status Change Selector */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
              <div>
                <span className="text-xs text-slate-500 block font-medium">当前线索阶段：</span>
                <span className="text-sm font-extrabold text-blue-600">{activeLead.status || '新线索'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-bold">变更阶段:</span>
                <select
                  value={activeLead.status || '新线索'}
                  onChange={(e) => handleUpdateStatus(activeLead, e.target.value as LeadStatus)}
                  className="bg-white border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {PIPELINE_STAGES.map((s) => (
                    <option key={s.key} value={s.key}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* AI Background Profile Audit */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
                <Bot className="w-4 h-4" />
                <span>AI 大模型买家背调与策略匹配</span>
              </div>
              <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 text-xs space-y-2 text-blue-950">
                <div>
                  <strong>意向背调逻辑：</strong> 匹配目标 {activeLead.exportMarket || '海外'} 市场，经营品类为【{activeLead.industryCategory || '未指定'}】，预估采购年预算大约为 <strong className="text-amber-800">{activeLead.budgetEst || '$100,000 USD'}</strong>。
                </div>
                {activeLead.aiSolutionSummary && (
                  <div className="pt-2 border-t border-blue-200/60 space-y-1">
                    <div><strong>推荐 Meta 触达标签：</strong> {activeLead.aiSolutionSummary.metaInterests.join(', ')}</div>
                    <div><strong>打法策略：</strong> {activeLead.aiSolutionSummary.recommendedStrategy}</div>
                  </div>
                )}
              </div>
            </div>

            {/* WhatsApp Direct Action Bar */}
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 flex items-center justify-between gap-3">
              <div className="text-xs text-emerald-900">
                <span className="font-bold block">一键发起 WhatsApp 沟通</span>
                <span className="text-[11px] text-emerald-700">自动带入适配买家的语言及产品破冰话术</span>
              </div>
              <button
                onClick={() => handleOpenWhatsApp(activeLead.phone, activeLead.name)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>拉起 WhatsApp</span>
              </button>
            </div>

            {/* Follow-up Notes Timeline */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                <span>跟进日志与备注历史</span>
                <span className="text-[10px] text-slate-400">({activeLead.notes?.length || 0} 条)</span>
              </h4>

              {/* Add Note Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="添加一条跟进备注（如：已电联、周三送样、发送英文 Catalog）..."
                  value={newNoteInput}
                  onChange={(e) => setNewNoteInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddNote()}
                  className="flex-1 bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleAddNote}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-all cursor-pointer"
                >
                  添加备注
                </button>
              </div>

              {/* Notes List */}
              <div className="space-y-2 max-h-40 overflow-y-auto pt-1">
                {(!activeLead.notes || activeLead.notes.length === 0) ? (
                  <div className="text-xs text-slate-400 py-3 text-center bg-slate-50 rounded-xl">
                    暂无跟进日志
                  </div>
                ) : (
                  activeLead.notes.map((note, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-50 rounded-xl text-xs text-slate-700 border border-slate-100 font-medium">
                      {note}
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveLead(null)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-2.5 rounded-xl cursor-pointer"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MANUAL ADD LEAD MODAL ================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-60 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-slate-200">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-lg font-extrabold text-slate-900 mb-1">手动录入咨询线索</h3>
            <p className="text-xs text-slate-500 mb-5">用于录入线上/线下获取的外贸潜在买家信息</p>

            <form onSubmit={handleCreateNewLeadSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-bold mb-1">客户姓名 / 公司名 *</label>
                <input
                  type="text"
                  required
                  placeholder="如：David (德国工业采买部)"
                  value={addForm.name}
                  onChange={(e) => setAddForm({ ...addForm, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">联系电话 / WhatsApp *</label>
                <input
                  type="text"
                  required
                  placeholder="如：+49 172 882192"
                  value={addForm.phone}
                  onChange={(e) => setAddForm({ ...addForm, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">业务类型</label>
                  <select
                    value={addForm.businessType}
                    onChange={(e) => setAddForm({ ...addForm, businessType: e.target.value as BusinessType })}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                  >
                    <option value="工厂 / 生产商">工厂 / 生产商</option>
                    <option value="外贸团队">外贸团队</option>
                    <option value="跨境卖家">跨境卖家</option>
                    <option value="本地商家">本地商家</option>
                    <option value="其他">其他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">意向评级</label>
                  <select
                    value={addForm.intentRating}
                    onChange={(e) => setAddForm({ ...addForm, intentRating: e.target.value as LeadIntentRating })}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none font-bold"
                  >
                    <option value="A">A 级 (高意向/大额采购)</option>
                    <option value="B">B 级 (中意向/需要跟进)</option>
                    <option value="C">C 级 (低意向/散客)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">品类行业</label>
                <input
                  type="text"
                  placeholder="如：工业机械与五金设备"
                  value={addForm.industryCategory}
                  onChange={(e) => setAddForm({ ...addForm, industryCategory: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl cursor-pointer shadow-md text-xs"
                >
                  确认保存录入
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl text-xs cursor-pointer"
                >
                  取消
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
