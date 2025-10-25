"use client";
import { useState } from "react";
import { Filter, RefreshCw, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function MessagesPage() {
  const [selectedFolder, setSelectedFolder] = useState("inbox");

  const folders = [
    { id: "inbox", name: "Inbox", icon: "📥" },
    { id: "drafts", name: "Drafts", icon: "📝" },
    { id: "sent", name: "Sent", icon: "📤" },
    { id: "trash", name: "Trash", icon: "🗑️" },
  ];

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <div className="w-64 border-r bg-gray-50 p-4">
        <div className="space-y-1 mb-6">
          {folders.map((folder) => (
            <button
              key={folder.id}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
                selectedFolder === folder.id
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedFolder(folder.id)}
            >
              <span>{folder.icon}</span>
              {folder.name}
            </button>
          ))}
        </div>
        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-blue-600 hover:bg-gray-100 rounded-lg transition">
          <span>⚙️</span>
          Manage Folders
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Messages</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Last updated at 11:29 PM</span>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              Forward Email into Buildertrend
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Compose New Message
            </Button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Mail className="h-24 w-24 mx-auto mb-4 text-gray-300" />
            <h2 className="text-xl font-semibold mb-2">Stay in touch with messages</h2>
            <p className="text-gray-600 mb-4">
              Monitor communication for each job and store emails in one place.
            </p>
            <div className="flex gap-3 justify-center">
              <Button variant="outline">
                <span className="mr-2">↗</span>
                Learn How
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Send a Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
