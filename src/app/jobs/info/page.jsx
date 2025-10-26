"use client";
import { useState } from "react";
import { ArrowLeft, Info, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function JobInfoPage() {
  const [activeTab, setActiveTab] = useState("job-details");

  // Mock data
  const internalUsers = [
    { id: 1, initials: "JD", name: "Jenny Do", email: "keptmobile@gmail.com", statuses: ["Presale", "Open", "Warranty", "Closed"], notifications: true },
    { id: 2, initials: "KH", name: "Kien Huynh", email: "", statuses: ["Open", "Warranty", "Closed"], notifications: true },
    { id: 3, initials: "KH", name: "Kien2 Huynh", email: "", statuses: ["Presale", "Open", "Warranty", "Closed"], notifications: true },
    { id: 4, initials: "MH", name: "Minh Huynh", email: "", statuses: ["Presale", "Open", "Warranty", "Closed"], notifications: true },
  ];

  const subsVendors = [
    { id: 1, initials: "A", name: "Amazon", color: "bg-green-200" },
    { id: 2, initials: "AC", name: "Amour Construction LLC", color: "bg-purple-200" },
    { id: 3, initials: "AD", name: "Anthony's Drywall", color: "bg-yellow-200" },
    { id: 4, initials: "A", name: "Architecturaldepot.com", color: "bg-orange-200" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-screen-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
                <span className="text-sm font-medium">Back to Summary</span>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Info className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600" />
              <Button variant="outline" size="sm">•••</Button>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              C 005 - Uniq Nail Lounge & Spa
            </h1>
            <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
              Open
            </Badge>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab("job-details")}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition ${
                activeTab === "job-details"
                  ? "border-blue-600 text-blue-600 bg-blue-50"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Job details
            </button>
            <button
              onClick={() => setActiveTab("clients")}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition ${
                activeTab === "clients"
                  ? "border-blue-600 text-blue-600 bg-blue-50"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Clients
            </button>
            <button
              onClick={() => setActiveTab("internal-users")}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition ${
                activeTab === "internal-users"
                  ? "border-blue-600 text-blue-600 bg-blue-50"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Internal users
            </button>
            <button
              onClick={() => setActiveTab("subs-vendors")}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition ${
                activeTab === "subs-vendors"
                  ? "border-blue-600 text-blue-600 bg-blue-50"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Subs/vendors
            </button>
            <button
              onClick={() => setActiveTab("advanced-settings")}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition ${
                activeTab === "advanced-settings"
                  ? "border-blue-600 text-blue-600 bg-blue-50"
                  : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Advanced settings
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        {activeTab === "job-details" && (
          <div className="space-y-8">
            {/* Job Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Job information</h2>
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <div className="text-gray-900">C 005 - Uniq Nail Lounge & Spa</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                    <div className="inline-flex items-center px-3 py-1 rounded-md bg-gray-100 text-gray-800 text-sm">
                      New Construction
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contract type <Info className="inline h-4 w-4 text-gray-400" />
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input type="radio" name="contract-type" className="h-4 w-4" />
                        <div>
                          <div className="font-medium text-gray-900">Fixed price</div>
                          <div className="text-sm text-gray-600">You will set the contract price for the client</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="radio" name="contract-type" defaultChecked className="h-4 w-4" />
                        <div>
                          <div className="font-medium text-gray-900">Open book</div>
                          <div className="text-sm text-gray-600">
                            Price will be determined by your actual costs plus markup/margin (includes Cost Plus and Time & Materials contracts)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job group</label>
                    <div className="text-gray-900">--</div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prefix <Info className="inline h-4 w-4 text-gray-400" />
                    </label>
                    <div className="text-gray-900">--</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contract price</label>
                    <div className="text-gray-900 font-semibold">$1,043,141.99</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project managers</label>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-medium">
                        TD
                      </div>
                      <span className="text-gray-900">Thang Duong</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Square feet</label>
                    <div className="text-gray-900">8,740</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Permit number</label>
                    <div className="text-gray-900">2025-833NAIL 2025-835STUD</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lot info</label>
                    <div className="text-gray-900">--</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Address</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-900">
                  <span>611 Settlers Trace</span>
                  <button className="text-blue-600 hover:text-blue-700">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </div>
                <div className="text-gray-900">Lafayette, LA 70508</div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "clients" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-2xl font-semibold flex-shrink-0">
                  JD
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Jenny Do</h3>
                  <p className="text-gray-600">keptmobile@gmail.com</p>
                  <p className="text-gray-600">(---) --- - ----</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border">
              <div className="border-b px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-900">Client permissions</h2>
              </div>
              <div className="p-6 grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-4">Project management</h3>
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Client can view:</label>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300" />
                      <span className="text-gray-700">Project manager's phone number</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                      <span className="text-gray-700">Locked selections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                      <span className="text-gray-700">Schedule phases</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                      <span className="text-gray-700">Schedule items</span>
                    </div>
                    <label className="block text-sm font-medium text-gray-700 mt-4 mb-2">Client can submit:</label>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                      <span className="text-gray-700">Change Order requests</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-4">Financial</h3>
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Client can view:</label>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300" />
                      <span className="text-gray-700">Job Price Summary</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                      <span className="text-gray-700">Purchase Orders/Bills</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300" />
                      <span className="text-gray-700">Invoices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                      <span className="text-gray-700">Budget</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "internal-users" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg border">
              <div className="border-b px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-900">Internal Users Viewing Access ({internalUsers.length})</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3 text-left">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status Access</th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-purple-600" />
                          <span>Notifications</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {internalUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`h-10 w-10 rounded-full ${
                              user.initials === "JD" ? "bg-purple-200" :
                              user.initials === "MH" ? "bg-green-200" :
                              "bg-blue-200"
                            } text-gray-800 flex items-center justify-center text-sm font-semibold`}>
                              {user.initials}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{user.name}</div>
                              {user.email && <div className="text-sm text-gray-500">{user.email}</div>}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2 flex-wrap">
                            {user.statuses.map((status) => (
                              <span
                                key={status}
                                className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                                  status === "Presale" ? "bg-yellow-100 text-yellow-800" :
                                  status === "Open" ? "bg-blue-100 text-blue-800" :
                                  status === "Warranty" ? "bg-blue-100 text-blue-800" :
                                  "bg-red-100 text-red-800"
                                }`}
                              >
                                {status}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {user.notifications && (
                            <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "subs-vendors" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg border">
              <div className="border-b px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-900">Subs/Vendors Viewing Access ({subsVendors.length})</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3 text-left">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {subsVendors.map((vendor) => (
                      <tr key={vendor.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`h-10 w-10 rounded-full ${vendor.color} text-gray-800 flex items-center justify-center text-sm font-semibold`}>
                              {vendor.initials}
                            </div>
                            <span className="font-medium text-gray-900">{vendor.name}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "advanced-settings" && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Project Management Options</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">Time Clock</h3>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    <span className="text-gray-700">Enable geofencing on Time Clock shifts</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3">Selections</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300" />
                      <span className="text-gray-700">Allow creation of allowances</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300" />
                      <span className="text-gray-700">Update Job Running Total when a selection is approved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Financial Options</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-4">Margin and Markup</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    This percentage below will be applied to all new line items on Estimates and Change Orders. To update existing line items, use checked actions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 max-w-2xl">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Percentage type</label>
                      <Select defaultValue="markup">
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="markup">Markup</SelectItem>
                          <SelectItem value="margin">Margin</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Percentage</label>
                      <div className="flex items-center gap-2">
                        <Input type="number" defaultValue="0.00" className="flex-1" />
                        <span className="text-gray-600">%</span>
                        <Button variant="outline" size="sm">⚙</Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-4">Purchase Orders</h3>
                  <div className="space-y-4 max-w-2xl">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Individual Purchase Order Limit</label>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">$</span>
                        <Input type="text" placeholder="Unlimited" className="flex-1" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Total Job Purchase Order Limit</label>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">$</span>
                        <Input type="text" placeholder="Unlimited" className="flex-1" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-4">Budget</h3>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                    <span className="text-gray-700">Include Time Clock labor in the Job Costing Budget</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Template Options</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                  <span className="text-gray-700">Make this job a working template</span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Template Name</label>
                  <div className="text-gray-500">--</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
