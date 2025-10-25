"use client";
import { useState } from "react";
import { ChevronLeft, Search, Filter, Grid, List as ListIcon, MoreVertical, Folder, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PhotosPage() {
  const [selectedJob, setSelectedJob] = useState("C 005 - Uniq Nail Lounge & Spa");
  
  const jobs = [
    { id: 1, name: "C 005 - Uniq Nail Lounge & Spa", status: "Open", address: "Jenny Do\n611 Settlers Trace\nLafayette, LA 70508" },
    { id: 2, name: "C 005-0 Uniq Shell Building", status: "Open" },
    { id: 3, name: "C 006 - iNail Supply", status: "Open" },
    { id: 4, name: "N 002 - Mahavairocana", status: "Open" },
  ];

  const folders = [
    { id: 1, name: "** Attached Photos **", color: "blue", hasHome: false },
    { id: 2, name: "Owner Added Photos", color: "yellow", hasHome: true },
  ];

  const activities = [
    { date: "Oct 8, 2025", user: "Thang Duong", action: "added a new document to a folder", folder: "Equipments", file: "flo-60v-contempo-tech.pdf", time: "Oct 8, 2025, 2:46 PM" },
    { date: "Oct 4, 2025", user: "Thang Duong", action: "added a new document to a folder", folder: "Design & Selections", time: "Oct 4, 2025, 9:09 PM" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar - Jobs (same as Documents) */}
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
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b p-4">
          <div className="flex items-center gap-2 mb-2">
            <ChevronLeft className="h-5 w-5 text-gray-600" />
            <div>
              <div className="text-sm text-gray-600">{selectedJob}</div>
              <h1 className="text-2xl font-bold">Photos</h1>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm">Select All</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort</span>
              <select className="border rounded px-2 py-1 text-sm">
                <option>Sort...</option>
              </select>
            </div>
          </div>

          <h2 className="text-lg font-semibold mb-4">Folders</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {folders.map((folder) => (
              <div
                key={folder.id}
                className="relative bg-white rounded-lg border-2 border-gray-200 p-6 hover:border-blue-400 cursor-pointer group"
              >
                <div className="absolute top-2 right-2 flex gap-1">
                  {folder.hasHome && (
                    <div className="p-1 bg-gray-100 rounded">
                      <Home className="h-4 w-4 text-gray-600" />
                    </div>
                  )}
                  <button className="p-1 bg-gray-100 rounded opacity-0 group-hover:opacity-100">
                    <MoreVertical className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <Folder className={`h-16 w-16 mb-3 ${folder.color === 'blue' ? 'text-blue-500' : 'text-yellow-500'}`} />
                  <div className="text-sm font-medium text-center text-purple-600">
                    {folder.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar - Activity (same as Documents) */}
      <div className="w-80 bg-white border-l overflow-y-auto">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Activity</h2>
        </div>
        
        <div className="p-4">
          {activities.map((activity, idx) => (
            <div key={idx} className="mb-6">
              <div className="text-lg font-semibold mb-3">{activity.date}</div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-semibold">
                  T
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">{selectedJob}</div>
                  <div className="text-sm mb-1">
                    <span className="font-semibold">{activity.user}</span> {activity.action}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Folder className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium">{activity.folder}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
