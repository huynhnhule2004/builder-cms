"use client";
import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import { ChevronLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SchedulePage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white border-b px-6 py-4 flex items-center gap-4">
          <ChevronLeft className="h-6 w-6 cursor-pointer" />
          <h1 className="text-2xl font-bold">Schedule</h1>
        </div>
        <div className="flex-1 overflow-auto p-6">
          <Tabs defaultValue="schedule" className="w-full">
            <TabsList>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="baseline">Baseline</TabsTrigger>
              <TabsTrigger value="workday">Workday Exceptions</TabsTrigger>
            </TabsList>
            <TabsContent value="schedule" className="mt-6">
              <div className="flex items-center justify-center h-96 text-gray-500">
                <p className="text-xl">No Job selected</p>
              </div>
            </TabsContent>
            <TabsContent value="baseline" className="mt-6">
              <div className="flex items-center justify-center h-96 text-gray-500">
                <p className="text-xl">No Job selected</p>
              </div>
            </TabsContent>
            <TabsContent value="workday" className="mt-6">
              <div className="flex items-center justify-center h-96 text-gray-500">
                <p className="text-xl">No Job selected</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
