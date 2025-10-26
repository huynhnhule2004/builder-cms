"use client";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, MoreHorizontal, ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const purchaseOrders = [
  { job: "C 005 - Uniq Nail Lounge...", po: "020", title: "C 005-Framing Materials", poStatus: "Draft", workStatus: "Not Complete", performedBy: "Doug Ashy Building Mate...", createdDate: "Oct 21, 2025" },
  { job: "C 005 - Uniq Nail Lounge...", po: "0021", title: "Design & Build GC Fee", poStatus: "Draft", workStatus: "Not Complete", performedBy: "Amour Construction LLC", createdDate: "Oct 21, 2025" },
  { job: "C 005 - Uniq Nail Lounge...", po: "0019", title: "Tile Materials Package", poStatus: "Draft", workStatus: "Not Complete", performedBy: "Floor and Decor", createdDate: "Jul 21, 2025" },
  { job: "C 005 - Uniq Nail Lounge...", po: "0018", title: "Plumbing Fixtures & ADA", poStatus: "Draft", workStatus: "Not Complete", performedBy: "Amour Construction LLC", createdDate: "Jul 21, 2025" },
  { job: "C 005 - Uniq Nail Lounge...", po: "0017", title: "Tankless Water Heaters", poStatus: "Draft", workStatus: "Not Complete", performedBy: "Southern Pipe & Supply C...", createdDate: "Jul 21, 2025" },
];

function PurchaseOrdersContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "purchase-orders";

  const handleTabChange = (tab) => {
    if (tab === "bills") {
      router.push("/financial/bills");
    } else {
      router.push("/financial/purchase-orders");
    }
  };

  return (
    <div className="flex h-[calc(100vh-64px)]">
      <Sidebar />
      
      <main className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <h1 className="text-xl font-semibold mb-1">Track and plan job costs with Purchase Orders</h1>
          <p className="text-sm text-gray-600">You don't have access to create bills or purchase orders. Contact an administrator of this account for details.</p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto px-6 py-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Job Title */}
            <div className="px-6 pt-6 pb-4">
              <p className="text-sm text-gray-600 mb-1">C 005 - Uniq Nail Lounge & Spa</p>
              <h2 className="text-2xl font-semibold">Purchase Orders</h2>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 px-6">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <button 
                    onClick={() => handleTabChange("purchase-orders")}
                    className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600"
                  >
                    Purchase Orders
                  </button>
                  <button 
                    onClick={() => handleTabChange("bills")}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    Bills
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-9">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </div>

            {/* Filters and Search */}
            <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200">
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 text-sm font-medium hover:text-gray-700">
                  Jobs <ChevronDown className="h-4 w-4" />
                </button>
                <span className="text-sm text-gray-600">(1)</span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </Button>
              </div>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input className="pl-10 h-9" placeholder="" />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="w-10 px-6 py-3">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Job</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">PO #</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Title</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">PO Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Work Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Performed By</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">
                      <button className="flex items-center gap-1 hover:text-gray-900">
                        Created Date
                        <ChevronDown className="h-3 w-3" />
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {purchaseOrders.map((order, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">{order.job}</td>
                      <td className="px-4 py-4 text-sm text-blue-600 hover:underline cursor-pointer">{order.po}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{order.title}</td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          {order.poStatus}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          {order.workStatus}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">{order.performedBy}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{order.createdDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 text-sm hover:text-gray-700">
                  Standard View <ChevronDown className="h-4 w-4" />
                </button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">1-26 of 26 items</span>
                <button className="flex items-center gap-1 text-sm hover:text-gray-700">
                  50 / page <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function PurchaseOrdersPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PurchaseOrdersContent />
    </Suspense>
  );
}
