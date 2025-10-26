"use client";
import { Suspense } from "react";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, MoreHorizontal, ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const bills = [
  { job: "C 005 - Uniq Nail Lounge...", bill: "B-001", title: "Framing Labor", billStatus: "Pending", workStatus: "Complete", vendor: "Doug Ashy Building Mate...", dueDate: "Nov 15, 2025" },
  { job: "C 005 - Uniq Nail Lounge...", bill: "B-002", title: "Electrical Work", billStatus: "Paid", workStatus: "Complete", vendor: "ABC Electrical", dueDate: "Nov 10, 2025" },
  { job: "C 005 - Uniq Nail Lounge...", bill: "B-003", title: "Plumbing Installation", billStatus: "Pending", workStatus: "Complete", vendor: "Amour Construction LLC", dueDate: "Nov 20, 2025" },
];

function BillsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "bills";

  const handleTabChange = (tab) => {
    if (tab === "purchase-orders") {
      router.push("/financial/purchase-orders");
    } else {
      router.push("/financial/bills");
    }
  };

  return (
    <div className="flex h-[calc(100vh-64px)]">
      <Sidebar />
      
      <main className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <h1 className="text-xl font-semibold mb-1">Never lose a payment with Bills</h1>
          <p className="text-sm text-gray-600">You don't have access to create bills or purchase orders. Contact an administrator of this account for details.</p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto px-6 py-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Job Title */}
            <div className="px-6 pt-6 pb-4">
              <p className="text-sm text-gray-600 mb-1">C 005 - Uniq Nail Lounge & Spa</p>
              <h2 className="text-2xl font-semibold">Bills</h2>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 px-6">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <button 
                    onClick={() => handleTabChange("purchase-orders")}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    Purchase Orders
                  </button>
                  <button 
                    onClick={() => handleTabChange("bills")}
                    className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600"
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
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Bill #</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Title</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Bill Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Work Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">Vendor</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">
                      <button className="flex items-center gap-1 hover:text-gray-900">
                        Due Date
                        <ChevronDown className="h-3 w-3" />
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {bills.map((bill, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">{bill.job}</td>
                      <td className="px-4 py-4 text-sm text-blue-600 hover:underline cursor-pointer">{bill.bill}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{bill.title}</td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                          bill.billStatus === "Paid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}>
                          {bill.billStatus}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          {bill.workStatus}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">{bill.vendor}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{bill.dueDate}</td>
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
                <span className="text-sm text-gray-600">1-3 of 3 items</span>
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

export default function BillsPage() {
  return (
    <Suspense fallback={<div className="flex h-[calc(100vh-64px)] items-center justify-center">Loading...</div>}>
      <BillsContent />
    </Suspense>
  );
}
