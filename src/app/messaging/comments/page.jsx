"use client";
import { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";

export default function CommentsPage() {
  const [viewType, setViewType] = useState("conversation");

  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <div className="flex-1 overflow-auto bg-gray-50">
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-600">C 005 - Uniq Nail Lounge & Spa</div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
            <h1 className="text-3xl font-bold">Comments</h1>
          </div>

          {/* Tabs */}
          <div className="mb-6 flex gap-3">
            <Button
              variant={viewType === "conversation" ? "default" : "outline"}
              onClick={() => setViewType("conversation")}
              className={viewType === "conversation" ? "bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200" : ""}
            >
              View By Conversation
            </Button>
            <Button
              variant={viewType === "comment" ? "default" : "outline"}
              onClick={() => setViewType("comment")}
              className={viewType === "comment" ? "bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200" : ""}
            >
              View By Comment
            </Button>
          </div>

          {/* Comments List */}
          <div className="space-y-4">
            {/* Oct 8, 2025 Section */}
            <div className="bg-white rounded-lg border border-gray-200">
              <button className="w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-gray-50">
                <ChevronDown className="h-4 w-4 text-gray-500" />
                <span className="font-semibold text-gray-900">Oct 8, 2025</span>
              </button>
              
              <div className="px-4 pb-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-sm font-semibold text-gray-900">
                      Bill • 0012 - 0005 - Framing Labor -2
                    </div>
                    <div className="text-sm text-gray-600">C 005 - Uniq Nail Lounge & Spa</div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        TD
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-sm text-gray-900">Thang Duong</span>
                          <span className="text-xs text-gray-500">Oct 8, 2025, 11:04 AM</span>
                        </div>
                        <p className="text-sm text-gray-800 mb-3">Paid with check</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <a href="#" className="text-sm text-blue-600 hover:underline font-medium">
                      Open conversation
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Aug 8, 2025 Section */}
            <div className="bg-white rounded-lg border border-gray-200">
              <button className="w-full flex items-center gap-2 px-4 py-3 text-left hover:bg-gray-50">
                <ChevronDown className="h-4 w-4 text-gray-500" />
                <span className="font-semibold text-gray-900">Aug 8, 2025</span>
              </button>
              
              <div className="px-4 pb-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-sm font-semibold text-gray-900">
                      Purchase Order • 0005-02 - Awning Bracket Material TD
                    </div>
                    <div className="text-sm text-gray-600">C 005 - Uniq Nail Lounge & Spa</div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        TD
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-sm text-gray-900">Thang Duong</span>
                          <span className="text-xs text-gray-500">Aug 8, 2025, 10:29 AM</span>
                        </div>
                        <p className="text-sm text-gray-800">THANG PAID WITH CREDIT CARD.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-6 text-right text-sm text-gray-600">
            1-4 of 4 items
          </div>
        </div>
      </div>
    </div>
  );
}
