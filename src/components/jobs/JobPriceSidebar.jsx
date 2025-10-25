"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const jobsData = [
  { id: 1, name: "C 005 - Uniq Nail Lounge & Spa", badge: "QB" },
  { id: 2, name: "C 005-0 Uniq Shell Building", badge: null },
  { id: 3, name: "C 006 - iNail Supply", badge: null },
  { id: 4, name: "N 002 - Mahavairocana", badge: null },
  { id: 5, name: "R 003 - Jenny Do", badge: "QB" },
  { id: 6, name: "R 004 - Thang Duong", badge: null },
];

export default function JobPriceSidebar({ onSelectJob }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedJobId, setSelectedJobId] = useState(null);

  const handleJobSelect = (job) => {
    setSelectedJobId(job.id);
    onSelectJob?.(job);
  };

  return (
    <div className="w-64 bg-white border-r flex flex-col h-screen">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,10 90,90 10,90" fill="none" stroke="#0B5393" strokeWidth="8"/>
              <polygon points="50,25 75,75 25,75" fill="none" stroke="#0B5393" strokeWidth="8"/>
              <polygon points="50,40 60,60 40,60" fill="none" stroke="#0B5393" strokeWidth="8"/>
            </svg>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">Jobs</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">(1)</span>
            <button className="p-1 hover:bg-gray-100 rounded">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <ArrowUpDown className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder=""
            className="pl-9 h-9 text-sm"
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition bg-blue-50 border-b"
        >
          <div className="flex items-center gap-2">
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            <span className="text-sm font-medium">Pick a Job</span>
          </div>
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>
        
        {isExpanded && (
          <div className="border-b">
            <div className="px-4 py-2 text-xs text-gray-500 font-medium">
              All 9 Open Jobs
            </div>
            {jobsData.map((job) => (
              <button
                key={job.id}
                onClick={() => handleJobSelect(job)}
                className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition flex items-center justify-between ${
                  selectedJobId === job.id ? "bg-blue-50 border-l-4 border-blue-600" : ""
                }`}
              >
                <span className="truncate">{job.name}</span>
                {job.badge && (
                  <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                    {job.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
