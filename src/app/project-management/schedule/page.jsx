"use client";
import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import { ChevronLeft, Search, Calendar as CalendarIcon, List, LayoutGrid, Filter, Download, MoreHorizontal, Info, Mail, ChevronDown, RotateCcw } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SchedulePage() {
  const [selectedJob, setSelectedJob] = useState("C 005 - Uniq Nail Lounge & Spa");
  const [scheduleOffline, setScheduleOffline] = useState(true);
  const [activeView, setActiveView] = useState("list");
  const [activeTab, setActiveTab] = useState("schedule");

  const jobs = [
    { id: 1, name: "C 005 - Uniq Nail Lounge & Spa", status: "open", address: "611 Settlers Trace", city: "Lafayette, LA 70508", owner: "Jenny Do", openJobs: 9 },
    { id: 2, name: "C 005 - Uniq Nail Lounge & Spa", status: "active" },
    { id: 3, name: "C 005-0 Uniq Shell Building", status: "active" },
    { id: 4, name: "C 006 - iNail Supply", status: "active" },
    { id: 5, name: "N 002 - Mahavairoana", status: "active" },
    { id: 6, name: "R 003 - Jenny Do", status: "active" },
  ];

  const scheduleItems = [
    { id: 1, title: "Planning Phase", complete: false, phase: "Planning and P...", duration: "22 days", start: "Dec 1, 2023", end: "Jan 1, 2024" },
    { id: 2, title: "Selections - Phase 1 Deadline", complete: false, phase: "--", duration: "1 day", start: "Jan 1, 2024", end: "Jan 1, 2024" },
    { id: 3, title: "Pre-Construction Phase", complete: false, phase: "Pre-Constructi...", duration: "10 days", start: "Jan 2, 2024", end: "Jan 15, 2024" },
    { id: 4, title: "Foundation Phase", complete: false, phase: "Foundation", duration: "12 days", start: "Jan 16, 2024", end: "Jan 31, 2024" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white border-b px-6 py-4 flex items-center gap-4">
          <div>
            <div className="text-sm text-gray-500">{selectedJob}</div>
            <h1 className="text-2xl font-bold">Schedule</h1>
          </div>
        </div>
        
        <div className="flex-1 flex overflow-hidden">

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
              <TabsList className="mx-6 mt-6">
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="baseline">Baseline</TabsTrigger>
                <TabsTrigger value="workday">Workday Exceptions</TabsTrigger>
              </TabsList>

              {/* Warning Banner */}
              <div className="mx-6 mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center gap-3">
                <Info className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                <p className="text-sm text-yellow-800">Your schedule is offline and is unavailable to subs and clients. Notifications will not be sent.</p>
              </div>

              {/* Action Bar */}
              <div className="mx-6 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {activeTab === "schedule" && (
                    <>
                      <Button variant="outline" className={activeView === "calendar" ? "bg-gray-100" : ""} onClick={() => setActiveView("calendar")}>
                        Calendar
                      </Button>
                      <Button variant="outline" className={activeView === "list" ? "bg-gray-100" : ""} onClick={() => setActiveView("list")}>
                        List
                      </Button>
                      <Button variant="outline" className={activeView === "gantt" ? "bg-gray-100" : ""} onClick={() => setActiveView("gantt")}>
                        Gantt
                      </Button>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {activeTab === "schedule" && activeView !== "calendar" && <RotateCcw className="h-5 w-5 text-gray-600 cursor-pointer" />}
                  {activeTab === "schedule" && activeView === "list" && (
                    <label className="flex items-center gap-2 text-sm">
                      <span>Phases</span>
                      <input type="checkbox" className="toggle" />
                    </label>
                  )}
                  <label className="flex items-center gap-2 text-sm">
                    <span>Schedule Offline</span>
                    <input type="checkbox" checked={scheduleOffline} onChange={(e) => setScheduleOffline(e.target.checked)} className="toggle" />
                  </label>
                  <Button variant="outline">
                    More Actions <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    Export <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" /> Filter
                  </Button>
                </div>
              </div>

              <TabsContent value="schedule" className="flex-1 overflow-auto mx-6 mt-6">
                {activeView === "list" && (
                  <div className="bg-white rounded-lg border">
                    {/* Info Banner */}
                    <div className="p-4 border-b bg-gray-50 flex items-start gap-3">
                      <div className="text-2xl">🎓</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">Balance multiple projects with Schedule</h3>
                        <p className="text-sm text-gray-600">You don't have access to create Schedules. Contact an administrator of this account for details.</p>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">×</button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                          <tr>
                            <th className="px-6 py-3 text-left"><input type="checkbox" /></th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">ID #</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Title</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Complete</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Phase</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Duration</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Start</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">End</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold">Assigned To</th>
                          </tr>
                        </thead>
                        <tbody>
                          {scheduleItems.map((item) => (
                            <tr key={item.id} className="border-b hover:bg-gray-50">
                              <td className="px-6 py-4"><input type="checkbox" /></td>
                              <td className="px-6 py-4 text-sm">{item.id}</td>
                              <td className="px-6 py-4 text-sm text-blue-600 font-medium">{item.title}</td>
                              <td className="px-6 py-4 text-sm">{item.complete ? "Yes" : "--"}</td>
                              <td className="px-6 py-4 text-sm">{item.phase}</td>
                              <td className="px-6 py-4 text-sm">{item.duration}</td>
                              <td className="px-6 py-4 text-sm">{item.start}</td>
                              <td className="px-6 py-4 text-sm">{item.end}</td>
                              <td className="px-6 py-4 text-sm"></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-6 py-4 border-t flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span>Standard View</span>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm">1-50 of 58 items</span>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">←</Button>
                          <span className="text-sm">1 / 2</span>
                          <Button variant="outline" size="sm">→</Button>
                        </div>
                        <select className="border rounded px-2 py-1 text-sm">
                          <option>50 / page</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {activeView === "calendar" && (
                  <div className="bg-white rounded-lg border p-6">
                    <div className="flex items-center justify-center py-20 text-gray-500">
                      <CalendarIcon className="h-16 w-16 mb-4" />
                    </div>
                    <p className="text-center text-gray-600">Calendar view - October 2025</p>
                  </div>
                )}

                {activeView === "gantt" && (
                  <div className="bg-white rounded-lg border p-6">
                    <div className="flex items-center justify-center py-20 text-gray-500">
                      <LayoutGrid className="h-16 w-16 mb-4" />
                    </div>
                    <p className="text-center text-gray-600">Gantt view with timeline</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="baseline" className="flex-1 overflow-auto mx-6 mt-6">
                <div className="flex flex-col items-center justify-center h-96">
                  <CalendarIcon className="h-16 w-16 text-gray-400 mb-4" />
                  <h2 className="text-2xl font-semibold mb-2">Perfect your schedule with baseline</h2>
                  <p className="text-gray-600">You don't have access to create Baseline data. Contact an administrator of this account for details.</p>
                </div>
              </TabsContent>

              <TabsContent value="workday" className="flex-1 overflow-auto mx-6 mt-6">
                <div className="flex flex-col items-center justify-center h-96">
                  <CalendarIcon className="h-16 w-16 text-gray-400 mb-4" />
                  <h2 className="text-2xl font-semibold mb-2">Plan for any circumstance with workday exceptions</h2>
                  <p className="text-gray-600">Schedule days off or plan for work outside of the usual weekdays to keep projects on time.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
