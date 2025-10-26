"use client";
import Sidebar from "@/components/layout/Sidebar";
import { ChevronLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WarrantiesPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Warranties</h1>
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xl text-gray-500">No Job selected</p>
        </div>
      </div>
    </div>
  );
}
