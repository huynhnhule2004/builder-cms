"use client";
import { Button } from "@/components/ui/button";
import { Filter, MapPin } from "lucide-react";

export default function ListView() {
  return (
    <div className="h-full">
      <div className="p-6 flex justify-end gap-3">
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter (1)
        </Button>
        <Button>Learn More</Button>
      </div>
      <div className="h-full flex flex-col items-center justify-center text-center px-4 -mt-24">
        <div className="relative mb-6">
          <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
            <MapPin className="h-8 w-8 text-gray-400" />
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
