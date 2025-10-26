"use client";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronDown, Search, Filter, Lock, Share2 } from "lucide-react";

export default function EstimatePage() {
  const estimateData = [
    {
      category: "Buildertrend Default",
      items: [
        {
          code: "GC",
          name: "Buildertrend Flat Rate",
          description: "--",
          quantity: "1.0000",
          unit: "--",
          unitCost: "$150,000.00",
          costType: "--"
        }
      ]
    },
    {
      category: "Division 00 - Design",
      items: [
        {
          code: "--",
          name: "00111 Architectural Design",
          description: "--",
          quantity: "1.0000",
          unit: "--",
          unitCost: "$0.00",
          costType: "Other"
        }
      ]
    },
    {
      category: "Division 01 - General Conditions",
      items: [
        {
          code: "",
          name: "01000 Permits",
          description: "$5 per $1,000 of contract",
          quantity: "0.0050",
          unit: "--",
          unitCost: "$1,000,000.00",
          costType: "--"
        },
        {
          code: "--",
          name: "",
          description: "--",
          quantity: "1.0000",
          unit: "--",
          unitCost: "$2,000.00",
          costType: "--"
        }
      ]
    }
  ];

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center gap-3 mb-3">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Estimate</h1>
              <p className="text-sm text-gray-600">JOB: C 005 - UNIQ NAIL LOUNGE & SPA / ESTIMATE</p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="text-right">
                <div className="text-xs text-gray-600 mb-1">Builder Cost</div>
                <div className="text-lg font-semibold">$1,043,141.99</div>
                <div className="text-xs text-gray-500">(100%)</div>
              </div>
              <span className="text-2xl font-light text-gray-400">+</span>
              <div className="text-right">
                <div className="text-xs text-gray-600 mb-1">Profit</div>
                <div className="text-lg font-semibold">$0.00</div>
                <div className="text-xs text-gray-500">(0%)</div>
              </div>
              <span className="text-2xl font-light text-gray-400">=</span>
              <div className="text-right">
                <div className="text-xs text-gray-600 mb-1">Client Price</div>
                <div className="text-lg font-semibold">$1,043,141.99</div>
                <div className="text-xs text-gray-500">(100%)</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Lock className="h-4 w-4 text-blue-600" />
                <span>Locked by Thang Duong on Oct 21, 2025</span>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Proposal dashboard
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <ChevronDown className="h-4 w-4" />
              Collapse all
            </Button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                className="pl-9 w-80 h-9" 
                placeholder="Jump to line items or categories..."
              />
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Filter className="h-4 w-4 text-blue-600" />
          </Button>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto bg-white">
          <table className="w-full">
            <thead className="sticky top-0 bg-gray-50 border-b border-gray-200">
              <tr className="text-left text-sm font-medium text-gray-700">
                <th className="w-8 px-4 py-3">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-4 py-3">Items</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3 text-right">Quantity</th>
                <th className="px-4 py-3 text-right">Unit</th>
                <th className="px-4 py-3 text-right">Unit Cost</th>
                <th className="px-4 py-3 text-right">Cost Type</th>
              </tr>
            </thead>
            <tbody>
              {estimateData.map((section, sectionIdx) => (
                <tr key={sectionIdx}>
                  <td colSpan="7">
                    <div className="bg-gray-100 px-4 py-2 flex items-center gap-2">
                      <ChevronDown className="h-4 w-4" />
                      <span className="font-medium text-gray-900">{section.category}</span>
                    </div>
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center border-b border-gray-100 hover:bg-gray-50">
                        <div className="w-8 px-4 py-3">
                          <input type="checkbox" className="rounded border-gray-300" />
                        </div>
                        <div className="px-4 py-3 flex-1">
                          <div className="text-blue-600 font-medium">{item.code}</div>
                          <div className="text-sm text-blue-600">{item.name}</div>
                        </div>
                        <div className="px-4 py-3 flex-1 text-sm text-gray-600">{item.description}</div>
                        <div className="px-4 py-3 w-32 text-right text-sm">{item.quantity}</div>
                        <div className="px-4 py-3 w-24 text-right text-sm">{item.unit}</div>
                        <div className="px-4 py-3 w-40 text-right text-sm font-medium">{item.unitCost}</div>
                        <div className="px-4 py-3 w-32 text-right text-sm">{item.costType}</div>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="bg-white border-t border-gray-200 px-6 py-3">
          <div className="font-semibold text-gray-900">Totals</div>
        </div>
      </div>
    </div>
  );
}
