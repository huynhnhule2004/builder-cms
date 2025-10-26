"use client";
import Sidebar from "@/components/layout/Sidebar";
import { ChevronLeft, MoreVertical, Filter, Heart, MessageCircle, Paperclip, CloudRain, X } from "lucide-react";

export default function DailyLogsPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b px-6 py-4 flex items-center gap-4">
          <ChevronLeft className="h-6 w-6 cursor-pointer" />
          <div className="flex-1">
            <p className="text-sm text-gray-500">C 005 - Uniq Nail Lounge & Spa</p>
            <h1 className="text-2xl font-bold">Daily Logs</h1>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded">
            <MoreVertical className="h-5 w-5" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            <span>Filter (1)</span>
          </button>
        </div>

        {/* Banner */}
        <div className="bg-blue-50 border-b border-blue-100 px-6 py-4 flex items-start gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="bg-white p-2 rounded-lg">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7v10c0 5.5 3.8 9.7 9 11 5.2-1.3 9-5.5 9-11V7l-9-5z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Track project progress with daily logs</h3>
              <p className="text-sm text-gray-600">You don't have access to create Daily Logs. Contact an administrator of this account for details.</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl">
            {/* Daily Log Item */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
              {/* Video/Image */}
              <div className="relative bg-black rounded-lg overflow-hidden mb-4" style={{maxWidth: '400px'}}>
                <div className="aspect-[9/16] flex items-center justify-center">
                  <img 
                    src="/placeholder-construction.jpg" 
                    alt="Construction site" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                    00:00:32
                  </div>
                </div>
              </div>

              {/* Interactions */}
              <div className="flex items-center gap-6 text-gray-600">
                <button className="flex items-center gap-2 hover:text-red-500">
                  <Heart className="h-5 w-5" />
                  <span>0</span>
                </button>
                <button className="flex items-center gap-2 hover:text-blue-500">
                  <MessageCircle className="h-5 w-5" />
                  <span>0</span>
                </button>
                <button className="flex items-center gap-2 hover:text-gray-900">
                  <Paperclip className="h-5 w-5" />
                  <span>0</span>
                </button>
                <div className="ml-auto flex items-center gap-2 text-blue-500">
                  <CloudRain className="h-5 w-5" />
                  <span>77°F ↑</span>
                  <span className="text-gray-400">62°F ↓</span>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="text-center text-sm text-gray-500 mt-4">
              1-5 of 5 items
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
