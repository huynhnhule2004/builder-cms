'use client';

import { ChevronDown, Paperclip } from 'lucide-react';

export default function BidPackageCard({ package: pkg, isExpanded, onToggle }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-4">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <input type="checkbox" className="mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">{pkg.name}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>Responses: <span className="font-semibold">{pkg.responses}</span></span>
                <span>Approved: <span className="font-semibold">{pkg.approved}</span></span>
                <span>Total Approved Bid Amount: <span className="font-semibold">${pkg.totalAmount}</span></span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {pkg.hasAttachment && (
              <div className="flex items-center gap-1 text-blue-600">
                <Paperclip className="w-5 h-5" />
                <span className="text-sm">1</span>
              </div>
            )}
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
              BIDDING OPEN
            </span>
            <span className="text-sm text-gray-600">Released: --</span>
            <button onClick={() => onToggle(pkg.id)} className="p-1">
              <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gray-200 pt-4">
          <p className="text-gray-600">No bid requests sent.</p>
        </div>
      )}
    </div>
  );
}
