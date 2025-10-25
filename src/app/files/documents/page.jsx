"use client";
import { useState } from "react";
import { ChevronLeft, Search, Filter, Grid, List as ListIcon, MoreVertical, Folder, Home, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DocumentsPage() {
  const [selectedJob, setSelectedJob] = useState("C 005 - Uniq Nail Lounge & Spa");
  
  const jobs = [
    { id: 1, name: "C 005 - Uniq Nail Lounge & Spa", status: "Open", address: "Jenny Do\n611 Settlers Trace\nLafayette, LA 70508" },
    { id: 2, name: "C 005-0 Uniq Shell Building", status: "Open" },
    { id: 3, name: "C 006 - iNail Supply", status: "Open" },
    { id: 4, name: "N 002 - Mahavairocana", status: "Open" },
  ];

  const folders = [
    { id: 1, name: "** Attached Documents **", viewableBy: "", modified: "Oct 21, 2025, 7:09 PM", added: "Jun 12, 2024, 8:41 AM", icon: Folder, pinned: true },
    { id: 2, name: "ADA Vanity Sink Recommendations", viewableBy: "", modified: "Sep 29, 2025, 11:47 AM", added: "Aug 5, 2025, 2:39 PM", icon: Folder, hasEdit: true, hasHome: true },
    { id: 3, name: "Archived Documents", viewableBy: "", modified: "May 6, 2024, 4:00 PM", added: "May 6, 2024, 4:00 PM", icon: Folder },
    { id: 4, name: "Blueprints and Engineering...", viewableBy: "", modified: "Apr 4, 2025, 6:23 PM", added: "May 6, 2024, 4:00 PM", icon: Folder, hasEdit: true },
    { id: 5, name: "Client Checklist", viewableBy: "", modified: "May 6, 2024, 4:00 PM", added: "May 6, 2024, 4:00 PM", icon: Folder, hasHome: true },
    { id: 6, name: "Contracts", viewableBy: "", modified: "May 6, 2024, 4:00 PM", added: "May 6, 2024, 4:00 PM", icon: Folder, hasHome: true },
  ];

  const activities = [
    { date: "Oct 8, 2025", user: "Thang Duong", action: "added a new document to a folder", folder: "Equipments", file: "flo-60v-contempo-tech.pdf", time: "Oct 8, 2025, 2:46 PM" },
    { date: "Oct 4, 2025", user: "Thang Duong", action: "added a new document to a folder", folder: "Design & Selections", time: "Oct 4, 2025, 9:09 PM" },
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
            <button className="text-gray-600">↕</button>
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
              onClick={() => setSelectedJob(job.name)}
            >
              <div className="flex items-start gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 mt-1"></div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{job.name}</div>
                  {job.status && (
                    <div className="text-xs text-blue-600 mt-1">{job.status}</div>
                  )}
                  {job.address && (
                    <div className="text-xs text-gray-600 mt-1 whitespace-pre-line">{job.address}</div>
                  )}
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t bg-gray-50">
          <div className="text-blue-600 text-sm">Global Documents</div>
          {jobs.slice(0, 3).map((job) => (
            <div key={job.id} className="text-sm text-gray-600 py-1 hover:text-gray-900 cursor-pointer">
              {job.name}
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
              <h1 className="text-2xl font-bold">Documents</h1>
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

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-3 text-sm font-semibold text-gray-700">
                    <input type="checkbox" className="mr-2" />
                    Name
                  </th>
                  <th className="text-left p-3 text-sm font-semibold text-gray-700">Viewable By</th>
                  <th className="text-left p-3 text-sm font-semibold text-gray-700">Modified</th>
                  <th className="text-left p-3 text-sm font-semibold text-gray-700">Added</th>
                  <th className="text-left p-3 text-sm font-semibold text-gray-700">Contents</th>
                </tr>
              </thead>
              <tbody>
                {folders.map((folder) => (
                  <tr key={folder.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" />
                        <Folder className={`h-5 w-5 ${folder.pinned ? 'text-blue-500' : 'text-yellow-500'}`} />
                        <span className={`text-sm ${folder.pinned ? 'text-purple-600 font-medium' : 'text-purple-600'}`}>
                          {folder.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        {folder.hasEdit && <Edit className="h-4 w-4 text-gray-400" />}
                        {folder.hasHome && <Home className="h-4 w-4 text-gray-400" />}
                      </div>
                    </td>
                    <td className="p-3 text-sm text-gray-600">{folder.modified}</td>
                    <td className="p-3 text-sm text-gray-600">{folder.added}</td>
                    <td className="p-3">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="text-sm text-gray-500 mt-4 text-right">1-16 of 16 items</div>
        </div>
      </div>

      {/* Right Sidebar - Activity */}
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
                  {activity.file && (
                    <div className="text-sm text-red-600 mt-1">{activity.file}</div>
                  )}
                  <div className="text-xs text-gray-500 mt-2">{activity.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
