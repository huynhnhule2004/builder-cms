'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import BidPackageCard from '@/components/BidPackageCard';
import { ChevronLeft, X, Filter } from 'lucide-react';

export default function BidsPage() {
  const [selectedJob, setSelectedJob] = useState({
    id: 1,
    name: 'C 005 - Uniq Nail Lou...',
    status: 'Open',
    contact: 'Jenny Do',
    address: '611 Settlers Trace',
    city: 'Lafayette, LA 70508'
  });

  const [expandedPackages, setExpandedPackages] = useState([]);
  const [sortBy, setSortBy] = useState('Package Title');

  const jobs = [
    {
      id: 1,
      name: 'C 005 - Uniq Nail Lounge & Spa',
      status: 'Open',
      contact: 'Jenny Do',
      address: '611 Settlers Trace',
      city: 'Lafayette, LA 70508'
    }
  ];

  const bidPackages = [
    {
      id: 1,
      name: 'ELECTRICAL PACKAGE',
      responses: 0,
      approved: 0,
      totalAmount: '0.00',
      hasAttachment: false
    },
    {
      id: 2,
      name: 'HVAC & EXHAUST SYSTEM',
      responses: 0,
      approved: 0,
      totalAmount: '0.00',
      hasAttachment: true
    }
  ];

  const togglePackage = (id) => {
    setExpandedPackages(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <div className="text-sm text-gray-600">{selectedJob.name}</div>
                <h1 className="text-2xl font-bold">Bids</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Collapse All
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Export
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-gray-100 border-b border-gray-200 px-6 py-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold mb-1">Manage your Bids in one place</h3>
              <p className="text-sm text-gray-600">
                You don't have access to create Bid Packages. Contact an administrator of this account for details.
              </p>
            </div>
            <button className="p-1 hover:bg-gray-200 rounded">
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Total Amount */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold">Total Approved Bid Packages Amount: $0.00</h2>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {/* Sort Controls */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="selectAll" />
              <label htmlFor="selectAll" className="text-sm text-gray-700">Select All</label>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Sort</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                <option>Package Title</option>
                <option>Date Created</option>
                <option>Amount</option>
              </select>
            </div>
          </div>

          {/* Bid Packages */}
          {bidPackages.map((pkg) => (
            <BidPackageCard
              key={pkg.id}
              package={pkg}
              isExpanded={expandedPackages.includes(pkg.id)}
              onToggle={togglePackage}
            />
          ))}

          {/* Footer */}
          <div className="text-sm text-gray-600 text-right mt-4">
            1-3 of 3 items
          </div>
        </div>
      </div>
    </div>
  );
}
