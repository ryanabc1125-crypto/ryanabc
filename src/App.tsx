import React, { useState, useEffect } from 'react';
import { Bell, X, ShieldCheck } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { WorkflowSimulator } from './components/WorkflowSimulator';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudies } from './components/CaseStudies';
import { CompetitorComparison } from './components/CompetitorComparison';
import { AiDiagnosticTool } from './components/AiDiagnosticTool';
import { LeadModal } from './components/LeadModal';
import { LeadsAdminDrawer } from './components/LeadsAdminDrawer';
import { AdminAuthModal } from './components/AdminAuthModal';
import { PrivacyModal } from './components/PrivacyModal';
import { ContactSidebar } from './components/ContactSidebar';
import { Footer } from './components/Footer';
import { INITIAL_LEADS } from './data/mockData';
import { BusinessType, LeadSubmission } from './types';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLeadsPortalOpen, setIsLeadsPortalOpen] = useState(false);
  const [isAdminAuthOpen, setIsAdminAuthOpen] = useState(false);
  const [isAdminAuthed, setIsAdminAuthed] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Prefill state from ROI calculator
  const [prefilledBusinessType, setPrefilledBusinessType] = useState<BusinessType | undefined>(undefined);
  const [prefilledIndustry, setPrefilledIndustry] = useState<string | undefined>(undefined);

  // Leads list stored in localStorage
  const [leads, setLeads] = useState<LeadSubmission[]>(() => {
    try {
      const saved = localStorage.getItem('kefanfan_leads_v1');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // ignore
    }
    return INITIAL_LEADS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('kefanfan_leads_v1', JSON.stringify(leads));
    } catch (e) {
      // ignore
    }
  }, [leads]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenLeadsPortalClick = () => {
    if (isAdminAuthed) {
      setIsLeadsPortalOpen(true);
    } else {
      setIsAdminAuthOpen(true);
    }
  };

  const handleAdminAuthSuccess = () => {
    setIsAdminAuthed(true);
    setIsAdminAuthOpen(false);
    setIsLeadsPortalOpen(true);
  };

  const handleCloseLeadsPortal = () => {
    setIsLeadsPortalOpen(false);
    setIsAdminAuthed(false); // Lock it back immediately!
  };

  const handleApplyRoiPreset = (businessType: BusinessType, industry: string) => {
    setPrefilledBusinessType(businessType);
    setPrefilledIndustry(industry);
    setIsModalOpen(true);
  };

  // Live notification toast state for lead submission linkage
  const [lastSubmittedLead, setLastSubmittedLead] = useState<LeadSubmission | null>(null);
  const [showSyncToast, setShowSyncToast] = useState(false);

  const handleSubmitSuccess = (newLead: LeadSubmission) => {
    setLeads((prev) => [newLead, ...prev]);
    setLastSubmittedLead(newLead);
    setShowSyncToast(true);
  };

  const handleUpdateLead = (updatedLead: LeadSubmission) => {
    setLeads((prev) => prev.map((l) => (l.id === updatedLead.id ? updatedLead : l)));
  };

  const handleClearLeads = () => {
    setLeads([]);
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <Header
        onOpenModal={handleOpenModal}
        onOpenLeadsPortal={handleOpenLeadsPortalClick}
        leadCount={leads.length}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenModal={handleOpenModal}
          onScrollToCalculator={scrollToCalculator}
        />

        {/* Core Features */}
        <Features onOpenModal={handleOpenModal} />

        {/* Workflow Simulator */}
        <WorkflowSimulator />

        {/* Competitor Matrix & Industry Solutions */}
        <CompetitorComparison onOpenModal={handleOpenModal} />

        {/* AI Lead Diagnostic Quiz Tool */}
        <AiDiagnosticTool onOpenModal={handleOpenModal} />

        {/* ROI Calculator */}
        <RoiCalculator onApplyPreset={handleApplyRoiPreset} />

        {/* Case Studies & Live Feed */}
        <CaseStudies onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenModal={handleOpenModal}
        onOpenLeadsPortal={handleOpenLeadsPortalClick}
      />

      {/* Modals & Drawers */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmitSuccess={handleSubmitSuccess}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        prefilledBusinessType={prefilledBusinessType}
        prefilledIndustry={prefilledIndustry}
      />

      <LeadsAdminDrawer
        isOpen={isLeadsPortalOpen && isAdminAuthed}
        onClose={handleCloseLeadsPortal}
        leads={leads}
        onUpdateLead={handleUpdateLead}
        onAddLead={(newLead) => setLeads((prev) => [newLead, ...prev])}
        onClearLeads={handleClearLeads}
      />

      <AdminAuthModal
        isOpen={isAdminAuthOpen}
        onClose={() => setIsAdminAuthOpen(false)}
        onSuccess={handleAdminAuthSuccess}
      />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* Real-time Lead Sync Toast Notification */}
      {showSyncToast && lastSubmittedLead && (
        <div className="fixed bottom-20 left-4 right-4 sm:left-8 sm:right-auto sm:max-w-md z-50 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700 animate-slide-up">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Bell className="w-4 h-4 animate-bounce" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-emerald-400">⚡ 询盘即时联动通知</span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.2 rounded font-mono">Realtime Sync</span>
                </div>
                <p className="text-xs font-semibold text-slate-200 mt-0.5">
                  收到【{lastSubmittedLead.name}】的询盘表单，已即时同步至管理看板！
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowSyncToast(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-[11px] text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              独立加密防护
            </span>
            <button
              onClick={() => {
                setShowSyncToast(false);
                handleOpenLeadsPortalClick();
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg font-bold text-xs transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>进入看板</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Contact Sidebar */}
      <ContactSidebar />
    </div>
  );
}
