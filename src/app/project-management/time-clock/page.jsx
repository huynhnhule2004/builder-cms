"use client";
import Sidebar from "@/components/layout/Sidebar";
import { ChevronLeft, Filter, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TimeClockPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">Time Clock</h1>
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
        <div className="flex-1 overflow-auto p-6">
          <Tabs defaultValue="reports" className="w-full">
            <TabsList>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="shifts">Shifts map</TabsTrigger>
            </TabsList>
            <TabsContent value="reports" className="mt-6">
              <div className="bg-white rounded-lg border p-6 mb-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-12 w-12 text-gray-400" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">YOUR TIME CLOCK TOTALS</h3>
                    <p className="text-gray-600 mb-2">No shifts recorded for you this week.</p>
                    <p className="text-sm text-gray-500">
                      You don't have access to create Shifts. Contact an administrator of this account for details
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg border p-6">
                <h3 className="font-semibold text-xl mb-4">Shifts</h3>
                <div className="flex items-center justify-center h-64 text-gray-500">
                  <p className="text-xl">No Job selected</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="shifts" className="mt-6">
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
