"use client";
import { Filter, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";

export default function RFIsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-6 flex-1">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">RFIs</h1>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <HelpCircle className="h-24 w-24 mx-auto mb-4 text-gray-300" />
            <h2 className="text-xl font-semibold mb-2">Clarify the unknown with RFIs</h2>
            <p className="text-gray-600">
              You don't have access to create RFIs. Contact an administrator of this account for details.
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
    </div>
  );
}
