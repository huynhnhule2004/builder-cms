"use client";
import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CommentsPage() {
  const [viewType, setViewType] = useState("conversation");

  return (
    <div className="p-6">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Comments</h1>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Keep track of comments and respond to conversations all in one place.
            </p>
            <Button variant="ghost" size="sm">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mb-6 border-b">
        <div className="flex gap-6">
          <button
            className={`pb-2 px-1 text-sm font-medium transition ${
              viewType === "conversation"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setViewType("conversation")}
          >
            View By Conversation
          </button>
          <button
            className={`pb-2 px-1 text-sm font-medium transition ${
              viewType === "comment"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setViewType("comment")}
          >
            View By Comment
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <div className="mb-3">
            <h3 className="font-semibold text-sm text-gray-500">Oct 8, 2025</h3>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-sm font-semibold">
                TD
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-sm">Thang Duong</span>
                  <span className="text-xs text-gray-500">Oct 8, 2025, 11:04 AM</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">Paid with check</p>
                <div className="text-xs text-gray-500 mb-2">
                  Bill • 0012 - 0005 - Framing Labor -2
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Open conversation
                </a>
              </div>
              <div className="text-xs text-gray-500">C 005 - Uniq Nail Lounge & Spa</div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <div className="mb-3">
            <h3 className="font-semibold text-sm text-gray-500">Aug 8, 2025</h3>
          </div>
        </div>
      </div>

      <div className="mt-6 text-right text-sm text-gray-500">
        1-4 of 4 items
      </div>
    </div>
  );
}
