"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Filter, Map, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

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
  const [activeTab, setActiveTab] = useState("map");
  const [clusterMode, setClusterMode] = useState(false);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Lead Opportunities</h1>
        </div>
        
        {/* Tabs Navigation */}
        <div className="px-6 flex items-center gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition ${
                activeTab === tab.id
                  ? "border-purple-600 text-purple-600"
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
        {/* Map View */}
        {activeTab === "map" && (
          <div className="h-full relative">
            {/* Map Controls */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-3">
              <div className="bg-white rounded-lg shadow-sm px-3 py-2 flex items-center gap-2 border">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={clusterMode}
                    onChange={(e) => setClusterMode(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm font-medium text-gray-700">Cluster</span>
                </label>
              </div>
              <Button variant="outline" className="bg-white">
                Map All
              </Button>
              <Button variant="outline" className="bg-white">
                <Filter className="h-4 w-4 mr-2" />
                Filter (1)
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                New Lead Opportunity
              </Button>
            </div>

            {/* Empty State */}
            <div className="h-full flex flex-col items-center justify-center text-center px-4">
              <div className="relative mb-6">
                <MapPin className="h-16 w-16 text-gray-400" strokeWidth={1.5} />
                <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1">
                  <span className="block h-3 w-3"></span>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                No lead opportunities
              </h2>
              <p className="text-gray-600 max-w-md">
                You don't have access to create Lead Opportunities. Contact an administrator of this account for details.
              </p>
            </div>
          </div>
        )}

        {/* List View */}
        {activeTab === "list" && (
          <div className="h-full">
            <div className="p-6 flex justify-end gap-3">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter (1)
              </Button>
              <Button>Learn More</Button>
            </div>
            <div className="h-full flex flex-col items-center justify-center text-center px-4 -mt-24">
              <div className="relative mb-6">
                <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-gray-400" />
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                No lead opportunities
              </h2>
              <p className="text-gray-600 max-w-md">
                You don't have access to create Lead Opportunities. Contact an administrator of this account for details.
              </p>
            </div>
          </div>
        )}

        {/* Activity View */}
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

        {/* Activity Calendar */}
        {activeTab === "calendar" && (
          <div className="h-full bg-white">
            <div className="p-6 flex justify-between items-center border-b">
              <div className="flex items-center gap-3">
                <select className="px-3 py-2 border rounded-lg text-sm">
                  <option>Week</option>
                  <option>Day</option>
                  <option>Month</option>
                </select>
                <Button variant="outline" size="sm">Today</Button>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline">Learn More</Button>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter (1)
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Button variant="ghost" size="sm">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Button>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">Oct 19 - Oct 25, 2025</span>
                  <Button variant="ghost" size="sm">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Button>
                </div>
                <Button variant="ghost" size="sm">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
              
              {/* Calendar Grid */}
              <div className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-7 bg-gray-50 border-b">
                  {["Sun, Oct 19", "Mon, Oct 20", "Tue, Oct 21", "Wed, Oct 22", "Thu, Oct 23", "Fri, Oct 24", "Sat, Oct 25"].map((day) => (
                    <div key={day} className="p-3 text-center border-r last:border-r-0">
                      <div className="text-sm font-medium text-gray-900">{day}</div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 divide-x" style={{ height: "500px" }}>
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="bg-white"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Activity Templates */}
        {activeTab === "templates" && (
          <div className="h-full">
            <div className="p-6 flex justify-end">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
            <div className="h-full flex flex-col items-center justify-center text-center px-4 -mt-24">
              <div className="mb-6">
                <svg className="h-16 w-16 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Save time with lead activity templates
              </h2>
              <p className="text-gray-600 max-w-md">
                You don't have access to create Lead Activity Templates. Contact an administrator of this account for details.
              </p>
            </div>
          </div>
        )}

        {/* Lead Proposals */}
        {activeTab === "proposals" && (
          <div className="h-full">
            <div className="p-6 flex justify-end">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter (1)
              </Button>
            </div>
            <div className="h-full flex flex-col items-center justify-center text-center px-4 -mt-24">
              <div className="mb-6">
                <svg className="h-16 w-16 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Win more clients with lead proposals
              </h2>
              <p className="text-gray-600 max-w-md">
                You don't have access to create lead proposals. Contact an administrator of this account for details.
              </p>
            </div>
          </div>
        )}

        {/* Proposal Templates */}
        {activeTab === "proposal-templates" && (
          <div className="h-full">
            <div className="p-6 flex justify-end">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
            <div className="h-full flex flex-col items-center justify-center text-center px-4 -mt-24">
              <div className="mb-6">
                <svg className="h-16 w-16 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Save time with lead proposal templates
              </h2>
              <p className="text-gray-600 max-w-md">
                You don't have access to create lead proposal templates. Contact an administrator of this account for details.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
