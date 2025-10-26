"use client";
import Sidebar from "@/components/layout/Sidebar";
import { ChevronLeft } from "lucide-react";

export default function ClientUpdatesPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white border-b px-6 py-4 flex items-center gap-4">
          <h1 className="text-2xl font-bold">Client Updates</h1>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xl text-gray-500">No Job selected</p>
        </div>
      </div>
    </div>
  );
}
