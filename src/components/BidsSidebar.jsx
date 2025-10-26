'use client';

import { useState } from 'react';
import { Search, Filter, ChevronDown, Mail, Info } from 'lucide-react';

export default function BidsSidebar({ jobs, selectedJob, onSelectJob }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-center">
          <div className="text-blue-600">
            <svg width="120" height="50" viewBox="0 0 120 50">
              <path d="M20 40 L30 10 L40 40 M25 28 L35 28" stroke="currentColor" strokeWidth="3" fill="none"/>
              <path d="M30 40 L40 10 L50 40 M35 28 L45 28" stroke="currentColor" strokeWidth="3" fill="none"/>
              <path d="M40 40 L50 10 L60 40 M45 28 L55 28" stroke="currentColor" strokeWidth="3" fill="none"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Jobs Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Jobs</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">(1)</span>
          <Filter className="w-4 h-4 text-gray-600" />
        </div>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Jobs List */}
      <div className="flex-1 overflow-y-auto">
        {jobs.map((job) => (
          <div
            key={job.id}
            className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
              selectedJob?.id === job.id ? 'bg-blue-50' : ''
            }`}
            onClick={() => onSelectJob(job)}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${job.status === 'Open' ? 'bg-red-500' : 'bg-gray-400'}`} />
                <span className="font-semibold text-sm">{job.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Info className="w-4 h-4 text-gray-400" />
                <Mail className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <div className={`text-xs font-semibold mb-2 ${job.status === 'Open' ? 'text-blue-600' : 'text-gray-600'}`}>
              {job.status}
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <div>{job.contact}</div>
              <div>{job.address}</div>
              <div>{job.city}</div>
            </div>
          </div>
        ))}
        
        {/* All Open Jobs Link */}
        <div className="p-4">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            All 9 Open Jobs
          </a>
        </div>
      </div>
    </div>
  );
}
