"use client";
import { useState } from "react";
import JobPriceSidebar from "@/components/jobs/JobPriceSidebar";
import { Clipboard } from "lucide-react";

export default function JobPriceSummaryPage() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="flex h-screen bg-gray-50">
      <JobPriceSidebar onSelectJob={setSelectedJob} />
      
      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Job Price Summary</h1>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          {!selectedJob ? (
            <div className="flex flex-col items-center">
              <Clipboard className="w-24 h-24 text-gray-300 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-gray-800">No Job selected</h3>
            </div>
          ) : (
            <div className="p-8 w-full">
              <p className="text-gray-600">Price summary for {selectedJob.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
