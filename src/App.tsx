import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { WorkflowSimulator } from './components/WorkflowSimulator';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudies } from './components/CaseStudies';
import { LeadModal } from './components/LeadModal';
import { LeadsAdminDrawer } from './components/LeadsAdminDrawer';
import { AdminAuthModal } from './components/AdminAuthModal';
import { PrivacyModal } from './components/PrivacyModal';
import { Footer } from './components/Footer';
import { INITIAL_LEADS } from './data/mockData';
import { BusinessType, LeadSubmission } from './types';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLeadsPortalOpen, setIsLeadsPortalOpen] = useState(false);
  const [isAdminAuthOpen, setIsAdminAuthOpen] = useState(false);
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
    const isAuthed = sessionStorage.getItem('kefanfan_admin_authed') === 'true';
    if (isAuthed) {
      setIsLeadsPortalOpen(true);
    } else {
      setIsAdminAuthOpen(true);
    }
  };

  const handleAdminAuthSuccess = () => {
    setIsAdminAuthOpen(false);
    setIsLeadsPortalOpen(true);
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

        {/* ROI Calculator */}
        <RoiCalculator onApplyPreset={handleApplyRoiPreset} />

        {/* Case Studies & Live Feed */}
        <CaseStudies onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenModal={handleOpenModal}
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
        isOpen={isLeadsPortalOpen}
        onClose={() => setIsLeadsPortalOpen(false)}
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
    </div>
  );
}
