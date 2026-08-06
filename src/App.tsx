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
import { AdminPortal } from './components/AdminPortal';
import { PrivacyModal } from './components/PrivacyModal';
import { ContactSidebar } from './components/ContactSidebar';
import { Footer } from './components/Footer';
import { INITIAL_LEADS } from './data/mockData';
import { BusinessType, LeadSubmission } from './types';

export default function App() {
  // Page view routing state: 'landing' or 'admin'
  const [currentView, setCurrentView] = useState<'landing' | 'admin'>(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.get('view') === 'admin' || window.location.hash === '#admin') {
        return 'admin';
      }
    }
    return 'landing';
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Prefill state from ROI calculator
  const [prefilledBusinessType, setPrefilledBusinessType] = useState<BusinessType | undefined>(undefined);
  const [prefilledIndustry, setPrefilledIndustry] = useState<string | undefined>(undefined);

  // Leads list stored in localStorage
  const [leads, setLeads] = useState<LeadSubmission[]>(() => {
    try {
      const saved = localStorage.getItem('kefanfan_leads_v2');
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
      localStorage.setItem('kefanfan_leads_v2', JSON.stringify(leads));
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

  const handleNavigateToAdmin = () => {
    setCurrentView('admin');
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '?view=admin');
    }
  };

  const handleNavigateToLanding = () => {
    setCurrentView('landing');
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', window.location.pathname);
    }
  };

  const handleApplyRoiPreset = (businessType: BusinessType, industry: string) => {
    setPrefilledBusinessType(businessType);
    setPrefilledIndustry(industry);
    setIsModalOpen(true);
  };

  const handleSubmitSuccess = (newLead: LeadSubmission) => {
    setLeads((prev) => [newLead, ...prev]);
  };

  const handleUpdateLead = (updatedLead: LeadSubmission) => {
    setLeads((prev) => prev.map((l) => (l.id === updatedLead.id ? updatedLead : l)));
  };

  const handleBatchUpdateLeads = (updatedLeads: LeadSubmission[]) => {
    const updateMap = new Map(updatedLeads.map((l) => [l.id, l]));
    setLeads((prev) => prev.map((l) => updateMap.get(l.id) || l));
  };

  const handleBatchDeleteLeads = (idsToDelete: string[]) => {
    const deleteSet = new Set(idsToDelete);
    setLeads((prev) => prev.filter((l) => !deleteSet.has(l.id)));
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

  // If in full-screen Admin Portal View
  if (currentView === 'admin') {
    return (
      <AdminPortal
        onReturnToLanding={handleNavigateToLanding}
        leads={leads}
        onUpdateLead={handleUpdateLead}
        onBatchUpdateLeads={handleBatchUpdateLeads}
        onBatchDeleteLeads={handleBatchDeleteLeads}
        onAddLead={(newLead) => setLeads((prev) => [newLead, ...prev])}
        onClearLeads={handleClearLeads}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <Header
        onOpenModal={handleOpenModal}
        onOpenLeadsPortal={handleNavigateToAdmin}
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
        onOpenLeadsPortal={handleNavigateToAdmin}
      />

      {/* Modals */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmitSuccess={handleSubmitSuccess}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        prefilledBusinessType={prefilledBusinessType}
        prefilledIndustry={prefilledIndustry}
      />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* Floating Contact Sidebar */}
      <ContactSidebar />
    </div>
  );
}

