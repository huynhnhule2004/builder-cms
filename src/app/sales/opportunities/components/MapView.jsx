"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Filter, MapPin } from "lucide-react";

export default function MapView({ onNewOpportunity }) {
  const [clusterMode, setClusterMode] = useState(false);

  return (
    <div className="h-full relative">
      {/* Map Controls */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-3">
        <div className="bg-white rounded-lg shadow-sm px-3 py-2 flex items-center gap-2 border">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={clusterMode}
              onChange={(e) => setClusterMode(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300"
            />
            <span className="text-sm font-medium text-gray-700">Cluster</span>
          </label>
        </div>
        <Button variant="outline" className="bg-white">
          Map All
        </Button>
        <Button variant="outline" className="bg-white">
          <Filter className="h-4 w-4 mr-2" />
          Filter (1)
        </Button>
        <Button 
          className="bg-blue-600 hover:bg-blue-700"
          onClick={onNewOpportunity}
        >
          New Lead Opportunity
        </Button>
      </div>

      {/* Empty State */}
      <div className="h-full flex flex-col items-center justify-center text-center px-4">
        <div className="relative mb-6">
          <MapPin className="h-16 w-16 text-gray-400" strokeWidth={1.5} />
          <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1">
            <span className="block h-3 w-3"></span>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          No lead opportunities
        </h2>
        <p className="text-gray-600 max-w-md">
          You don't have access to create Lead Opportunities. Contact an administrator of this account for details.
        </p>
      </div>
    </div>
  );
}
