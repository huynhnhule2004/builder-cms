"use client";
import { useState } from "react";
import { ChevronLeft, Printer, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

export default function JobPriceSummaryPage() {
  const [selectedJob, setSelectedJob] = useState({
    id: "C 005",
    name: "Uniq Nail Lounge & Spa",
    status: "Open",
    client: "Jenny Do",
    address: "611 Settlers Trace",
    city: "Lafayette, LA 70508",
    clientAddress: "310 Alexander Palm, Broussard, LA",
    clientPhone: "+19858559658",
    jobAddress: "611 Settlers Trace, Lafayette, LA 70508",
  });

  const [showPrintDialog, setShowPrintDialog] = useState(false);
  const [printOptions, setPrintOptions] = useState({
    showSelections: true,
    showAllowance: true,
    showChangeOrders: true,
    showInvoices: true,
    sortBy: "date",
  });

  const jobs = [
    { id: "C 005", name: "Uniq Nail Lounge & Spa", status: "QB" },
    { id: "C 005-0", name: "Uniq Shell Building", status: "" },
    { id: "C 006", name: "iNail Supply", status: "" },
    { id: "N 002", name: "Mahavairoocana", status: "" },
    { id: "R 003", name: "Jenny Do", status: "QB" },
  ];

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Jobs</span>
              <Badge variant="secondary" className="h-5 px-1.5 text-xs">
                (1)
              </Badge>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>
          </div>
          <Input
            type="search"
            placeholder="Search..."
            className="h-8 text-sm"
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          {jobs.map((job) => (
            <div
              key={job.id}
              onClick={() => setSelectedJob({ ...selectedJob, id: job.id, name: job.name })}
              className={`p-3 cursor-pointer border-b hover:bg-gray-50 ${
                selectedJob.id === job.id ? "bg-blue-50 border-l-4 border-l-blue-600" : ""
              }`}
            >
              <div className="flex items-start gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 mt-1 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{job.id} - {job.name.substring(0, 15)}...</div>
                  <div className="flex items-center gap-2 mt-1">
                    {job.status && (
                      <Badge variant="secondary" className="h-5 px-2 text-xs">
                        {job.status}
                      </Badge>
                    )}
                  </div>
                </div>
                <button className="p-1 hover:bg-gray-200 rounded">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
              <div className="mt-2 text-xs text-gray-600">
                <div>{selectedJob.client}</div>
                <div>{selectedJob.address}</div>
                <div>{selectedJob.city}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="bg-white">
          {/* Header */}
          <div className="px-8 py-6 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div>
                  <div className="text-sm text-gray-600">{selectedJob.id} - {selectedJob.name}</div>
                  <h1 className="text-3xl font-bold text-gray-900 mt-1">Job Price Summary</h1>
                </div>
              </div>
              <Button
                onClick={() => setShowPrintDialog(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6"
              >
                Print
              </Button>
            </div>

            <div className="mt-4 text-sm text-gray-700">
              <div>{selectedJob.clientAddress}</div>
              <div>Cell: {selectedJob.clientPhone}</div>
              <div className="mt-2">
                <span className="font-semibold">Job Address</span> {selectedJob.jobAddress}
              </div>
            </div>
          </div>

          {/* Contract Price */}
          <div className="px-8 py-4 border-b bg-gray-50">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">CONTRACT PRICE SUBTOTAL:</span>
              <span className="text-lg font-bold">$1,043,141.99</span>
            </div>
          </div>

          {/* Approved Selections */}
          <div className="px-8 py-6 border-b">
            <h2 className="text-xl font-bold mb-4">Approved Selections</h2>
            <div className="flex items-center justify-between py-3 bg-gray-50 px-4 rounded">
              <span className="font-semibold">Approved Selection Difference Subtotal:</span>
              <span className="font-bold">$0.00</span>
            </div>
          </div>

          {/* Approved Change Orders */}
          <div className="px-8 py-6 border-b">
            <h2 className="text-xl font-bold mb-4">Approved Change Orders</h2>
            <table className="w-full">
              <thead className="border-b">
                <tr className="text-left text-sm text-gray-600">
                  <th className="pb-3 font-semibold">Title</th>
                  <th className="pb-3 font-semibold">Date</th>
                  <th className="pb-3 font-semibold text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3} className="py-4 text-sm text-gray-500 text-center">
                    No approved change orders
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex items-center justify-between py-3 bg-gray-50 px-4 rounded mt-4">
              <span className="font-semibold">Approved Change Orders Subtotal:</span>
              <span className="font-bold">$0.00</span>
            </div>
          </div>

          {/* Payments Received */}
          <div className="px-8 py-6">
            <h2 className="text-xl font-bold mb-4">Payments Received</h2>
            <table className="w-full">
              <thead className="border-b">
                <tr className="text-left text-sm text-gray-600">
                  <th className="pb-3 font-semibold">Title</th>
                  <th className="pb-3 font-semibold">Date</th>
                  <th className="pb-3 font-semibold text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3} className="py-4 text-sm text-gray-500 text-center">
                    No payments received
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex items-center justify-between py-3 bg-gray-50 px-4 rounded mt-4">
              <span className="font-semibold">Payments Received Subtotal:</span>
              <span className="font-bold">$0.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Print Dialog */}
      <Dialog open={showPrintDialog} onOpenChange={setShowPrintDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Display on printout</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-center space-x-3">
              <Checkbox
                id="selections"
                checked={printOptions.showSelections}
                onCheckedChange={(checked) =>
                  setPrintOptions({ ...printOptions, showSelections: checked })
                }
              />
              <label htmlFor="selections" className="text-sm font-medium cursor-pointer">
                Show approved Selections
              </label>
            </div>
            <div className="flex items-center space-x-3 ml-6">
              <Checkbox
                id="allowance"
                checked={printOptions.showAllowance}
                onCheckedChange={(checked) =>
                  setPrintOptions({ ...printOptions, showAllowance: checked })
                }
              />
              <label htmlFor="allowance" className="text-sm font-medium cursor-pointer">
                Show remaining from allowance
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox
                id="changeOrders"
                checked={printOptions.showChangeOrders}
                onCheckedChange={(checked) =>
                  setPrintOptions({ ...printOptions, showChangeOrders: checked })
                }
              />
              <label htmlFor="changeOrders" className="text-sm font-medium cursor-pointer">
                Show approved Change Orders
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox
                id="invoices"
                checked={printOptions.showInvoices}
                onCheckedChange={(checked) =>
                  setPrintOptions({ ...printOptions, showInvoices: checked })
                }
              />
              <label htmlFor="invoices" className="text-sm font-medium cursor-pointer">
                Show Invoices
              </label>
            </div>
            <div className="pt-4">
              <label className="text-sm font-semibold block mb-2">Sort Selection(s) by</label>
              <select
                className="w-full px-3 py-2 border rounded-lg text-sm"
                value={printOptions.sortBy}
                onChange={(e) => setPrintOptions({ ...printOptions, sortBy: e.target.value })}
              >
                <option value="date">Date</option>
                <option value="title">Title</option>
                <option value="price">Price</option>
              </select>
            </div>
            <Button
              onClick={() => {
                window.print();
                setShowPrintDialog(false);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Update printout
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
