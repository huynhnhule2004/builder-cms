"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import AddLeadOpportunityDialog from "./components/AddLeadOpportunityDialog";
import MapView from "./components/MapView";
import ListView from "./components/ListView";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const tabs = [
  { id: "list", label: "List View", href: "/sales/opportunities" },
  { id: "activity", label: "Activity View", href: "/sales/opportunities/activity" },
  { id: "calendar", label: "Activity Calendar", href: "/sales/opportunities/calendar" },
  { id: "templates", label: "Activity Templates", href: "/sales/opportunities/templates" },
  { id: "proposals", label: "Lead Proposals", href: "/sales/opportunities/proposals" },
  { id: "proposal-templates", label: "Proposal Templates", href: "/sales/opportunities/proposal-templates" },
  { id: "map", label: "Map", href: "/sales/opportunities/map" },
];

export default function LeadOpportunitiesPage() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || "list");
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  // Get active tab label
  const activeTabLabel = tabs.find(tab => tab.id === activeTab)?.label || "List View";

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">{activeTabLabel}</h1>
        </div>
        
        {/* Tabs Navigation */}
        <div className="px-6 flex items-center gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto">
        {activeTab === "map" && <MapView onNewOpportunity={() => setShowDialog(true)} />}
        {activeTab === "list" && <ListView />}
        {activeTab === "activity" && (
          <div className="h-full">
            <div className="p-6 flex justify-end gap-3">
              <Button variant="outline">Learn More</Button>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter (1)
              </Button>
            </div>
            <div className="h-full flex flex-col items-center justify-center text-center px-4 -mt-24">
              <div className="relative mb-6">
                <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                No results
              </h2>
              <p className="text-gray-600 max-w-md">
                Adjust or clear your filters to find the Lead Activities you're looking for.
              </p>
            </div>
          </div>
        )}
        {/* ...existing code for other tabs... */}
      </div>

      {/* Add Lead Opportunity Dialog */}
      <AddLeadOpportunityDialog 
        isOpen={showDialog} 
        onClose={() => setShowDialog(false)} 
      />
    </div>
  );
}
