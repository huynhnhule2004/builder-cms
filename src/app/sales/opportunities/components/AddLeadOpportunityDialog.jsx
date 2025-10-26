"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Home } from "lucide-react";
import GeneralTab from "./dialog-tabs/GeneralTab";
import ActivitiesTab from "./dialog-tabs/ActivitiesTab";
import ProposalsTab from "./dialog-tabs/ProposalsTab";

export default function AddLeadOpportunityDialog({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("general");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 overflow-y-auto p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl my-8">
        {/* Dialog Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Add Lead Opportunity</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Contact Information Section */}
        <div className="px-6 py-8 border-b bg-gray-50">
          <h3 className="text-lg font-semibold mb-4">Contact information</h3>
          <div className="flex flex-col items-center justify-center py-8">
            <div className="mb-4">
              <Home className="h-16 w-16 text-gray-400" strokeWidth={1.5} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Add a client contact
            </h4>
            <p className="text-gray-600 text-center mb-4 max-w-md">
              Store your client's contact information so you can quickly add them to jobs.
            </p>
            <Button variant="outline">
              Choose from existing contacts
            </Button>
          </div>
        </div>

        {/* Dialog Tabs */}
        <div className="border-b">
          <div className="px-6 flex items-center gap-2">
            {["general", "activities", "proposals"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium capitalize border-b-2 transition ${
                  activeTab === tab
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dialog Content */}
        <div className="px-6 py-6 max-h-[500px] overflow-y-auto">
          {activeTab === "general" && <GeneralTab />}
          {activeTab === "activities" && <ActivitiesTab />}
          {activeTab === "proposals" && <ProposalsTab />}
        </div>

        {/* Dialog Footer */}
        <div className="px-6 py-4 border-t flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
