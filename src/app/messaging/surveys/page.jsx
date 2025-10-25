"use client";
import { useState } from "react";
import { Filter, Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SurveysPage() {
  const [activeTab, setActiveTab] = useState("individual");

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Surveys</h1>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            Print
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="mb-6 border-b">
        <div className="flex gap-6">
          <button
            className={`pb-2 px-1 text-sm font-medium transition ${
              activeTab === "individual"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("individual")}
          >
            Individual
          </button>
          <button
            className={`pb-2 px-1 text-sm font-medium transition ${
              activeTab === "grouped"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("grouped")}
          >
            Grouped
          </button>
          <button
            className={`pb-2 px-1 text-sm font-medium transition ${
              activeTab === "questions"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("questions")}
          >
            Questions
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <Clipboard className="h-24 w-24 mx-auto mb-4 text-gray-300" />
          <h2 className="text-xl font-semibold mb-2">Hear from your customers with Surveys</h2>
          <p className="text-gray-600">
            You don't have access to create Surveys. Contact an administrator of this account for details.
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t pt-4">
        <div className="flex items-center gap-2">
          <select className="border rounded px-3 py-2 text-sm">
            <option>Standard View</option>
          </select>
          <Button variant="ghost" size="sm">
            ⋮
          </Button>
        </div>
        <div className="text-sm text-gray-500">1-0 of 0 items</div>
      </div>
    </div>
  );
}
