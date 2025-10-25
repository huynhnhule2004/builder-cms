"use client";
import { useState } from "react";
import { ChevronLeft, Search, Filter, Grid, List as ListIcon, MoreVertical, Folder } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function VideosPage() {
  const [selectedJob, setSelectedJob] = useState("C 005 - Uniq Nail Lounge & Spa");
  
  const jobs = [
    { id: 1, name: "C 005 - Uniq Nail Lounge & Spa", status: "Open", address: "Jenny Do\n611 Settlers Trace\nLafayette, LA 70508" },
    { id: 2, name: "C 005-0 Uniq Shell Building", status: "Open" },
    { id: 3, name: "C 006 - iNail Supply", status: "Open" },
    { id: 4, name: "N 002 - Mahavairocana", status: "Open" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar - Jobs */}
      <div className="w-64 bg-white border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2 mb-4">
            <button className="text-gray-600 hover:text-gray-900">Jobs</button>
            <span className="text-sm text-gray-500">(1)</span>
            <Filter className="h-4 w-4 ml-auto text-gray-600" />
          </div>
          <div className="relative">
            <Search className="absolute left-2 top-2 h-4 w-4 text-gray-400" />
            <Input className="pl-8 h-8" placeholder="" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {jobs.map((job) => (
            <div
              key={job.id}
              className={`p-4 cursor-pointer border-b ${
                selectedJob === job.name ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-start gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 mt-1"></div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{job.name}</div>
                  {job.status && <div className="text-xs text-blue-600 mt-1">{job.status}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t bg-gray-50">
          <div className="text-blue-600 text-sm cursor-pointer">Global Videos</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b p-4">
          <div className="flex items-center gap-2 mb-2">
            <ChevronLeft className="h-5 w-5 text-gray-600" />
            <div>
              <div className="text-sm text-gray-600">{selectedJob}</div>
              <h1 className="text-2xl font-bold">Videos</h1>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Folders</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort</span>
              <select className="border rounded px-2 py-1 text-sm">
                <option>Sort...</option>
              </select>
              <button className="p-1 hover:bg-gray-100 rounded">
                <Grid className="h-5 w-5" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ListIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-md">
            <div className="relative bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-blue-400 cursor-pointer group">
              <button className="absolute top-2 right-2 p-1 bg-gray-100 rounded opacity-0 group-hover:opacity-100">
                <MoreVertical className="h-4 w-4 text-gray-600" />
              </button>
              
              <div className="flex items-center gap-4">
                <Folder className="h-12 w-12 text-blue-500" />
                <div className="text-sm font-medium text-purple-600">
                  ** Attached Videos **
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Activity */}
      <div className="w-80 bg-white border-l overflow-y-auto">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Activity</h2>
        </div>
        <div className="p-4 text-sm text-gray-500">
          No recent activity
        </div>
      </div>
    </div>
  );
}
