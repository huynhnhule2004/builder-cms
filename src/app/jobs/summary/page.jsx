"use client";
import JobLayout from "@/components/jobs/JobLayout";
import { Clipboard } from "lucide-react";

export default function JobSummaryPage() {
  return (
    <JobLayout>
      <div className="flex flex-col items-center justify-center h-full bg-gray-50 p-8">
        <div className="mb-8 text-left w-full max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">b</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Buildertrend! Here are a few ways to get started:</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Learn the basics by jumping into a <a href="#" className="text-blue-600 hover:underline">Buildertrend Learning Academy</a> Training.</li>
                <li>• Select a job from the list to get started. Don't see your job? Reach out to your admin and request access.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center flex-1">
          <Clipboard className="w-24 h-24 text-gray-300 mb-4" strokeWidth={1.5} />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Job Summary</h3>
          <p className="text-gray-500">Select a job to get started</p>
        </div>
      </div>
    </JobLayout>
  );
}
