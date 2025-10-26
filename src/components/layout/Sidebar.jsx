"use client";
import { useMemo, useState } from "react";
import { Search, ChevronDown, Filter, ArrowUpDown, ChevronLeft } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const jobsMock = [
  { name: "C 005 - Uniq Nail Lounge & Spa", hasQB: true },
  { name: "C 005-0 Uniq Shell Building", hasQB: false },
  { name: "C 006 - iNail Supply", hasQB: false },
  { name: "N 002 - Mahavairocana", hasQB: false },
  { name: "R 003 - Jenny Do", hasQB: true },
  { name: "R 004 - Thang Duong", hasQB: false },
  { name: "R 005 - Thuy Le", hasQB: false },
];

export default function Sidebar() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => jobsMock.filter(j => j.name.toLowerCase().includes(q.toLowerCase())), [q]);

  return (
    <aside className="w-80 shrink-0 bg-white flex flex-col h-[calc(100vh-64px)] border-r border-gray-200 relative overflow-auto">
      {/* Close Button */}
      <Button 
        variant="outline" 
        size="icon" 
        className="absolute right-4 top-4 z-10 rounded-md border-gray-300 h-9 w-9"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Header with logo */}
      <div className="h-60 flex items-center justify-center bg-white">
        <svg viewBox="0 0 100 100" className="w-36 h-36">
          <path d="M30 90 L50 20 L62 55 L50 55 L38 85 Z" fill="#3B4BA0" />
          <path d="M50 20 L70 90 L58 90 L50 60 Z" fill="#3B4BA0" />
          <path d="M38 85 L50 60 L62 85 Z" fill="#3B4BA0" />
        </svg>
      </div>

      {/* Jobs dropdown and filters */}
      <div className="flex items-center justify-between px-5 py-3">
        <button className="text-lg font-normal flex items-center hover:text-gray-700">
          Jobs <ChevronDown className="ml-1 h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-sm">(1)</span>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="px-5 pb-3">
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            className="pr-10 h-10 rounded border-gray-300" 
            placeholder="" 
            value={q} 
            onChange={e => setQ(e.target.value)} 
          />
        </div>
      </div>

      {/* Job List Header */}
      <div className="px-5 py-2 bg-blue-50 shrink-0">
        <span className="text-sm text-gray-700">All {jobsMock.length} Open Jobs</span>
      </div>

      {/* Job List - scrollable with internal scrollbar */}
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="px-5">
          {filtered.map((job, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-3 text-sm hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0"
            >
              <span className="text-gray-900">{job.name}</span>
              {job.hasQB && (
                <span className="shrink-0 rounded-full bg-teal-100 px-2.5 py-1 text-[11px] font-semibold text-teal-700">
                  QB
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
