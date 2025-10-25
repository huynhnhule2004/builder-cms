"use client";
import { useState } from "react";
import { List as ListIcon, Map as MapIcon, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import JobsTable from "@/components/jobs/JobsTable";
import JobsMapView from "@/components/jobs/JobsMapView";

export default function JobsListPage() {
  const [view, setView] = useState("list");

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="border-b px-6 py-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Jobs</h1>
        
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Button
              variant={view === "list" ? "default" : "outline"}
              onClick={() => setView("list")}
              className="rounded-lg"
            >
              List
            </Button>
            <Button
              variant={view === "map" ? "default" : "outline"}
              onClick={() => setView("map")}
              className="rounded-lg"
            >
              Map
            </Button>
          </div>
          
          <div className="flex items-center gap-3">
            {view === "list" && (
              <Button variant="outline" className="rounded-lg">
                Export
              </Button>
            )}
            {view === "map" && (
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  Cluster
                </label>
              </div>
            )}
            <Button variant="outline" className="rounded-lg flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filter (1)
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto">
        {view === "list" ? <JobsTable /> : <JobsMapView />}
      </div>
      
      <div className="border-t px-6 py-3 text-sm text-gray-600">
        1-9 of 9 items
      </div>
    </div>
  );
}
