"use client";
import { useState } from "react";
import { Filter, RefreshCw, Mail, Inbox, FileText, Send, Trash2, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/layout/Sidebar";

export default function MessagesPage() {
  const [selectedFolder, setSelectedFolder] = useState("trash");

  const folders = [
    { id: "inbox", name: "Inbox", icon: Inbox },
    { id: "drafts", name: "Drafts", icon: FileText },
    { id: "sent", name: "Sent", icon: Send },
    { id: "trash", name: "Trash", icon: Trash2 },
  ];

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Jobs Sidebar */}
      <Sidebar />

      {/* Messages Sidebar */}
      <div className="w-64 border-r bg-white flex flex-col">
        {/* Header */}
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">C 005 - Uniq Nail Lounge & Spa</h2>
          <p className="text-sm text-gray-600 mt-1">Messages</p>
        </div>

        {/* Folder List */}
        <div className="flex-1 p-4">
          <div className="space-y-1 mb-6">
            {folders.map((folder) => {
              const IconComponent = folder.icon;
              return (
                <button
                  key={folder.id}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition ${
                    selectedFolder === folder.id
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedFolder(folder.id)}
                >
                  <IconComponent className="h-4 w-4" />
                  {folder.name}
                </button>
              );
            })}
          </div>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-blue-600 hover:bg-gray-50 rounded-md transition">
            <Settings className="h-4 w-4" />
            Manage Folders
          </button>
        </div>

        {/* Job Info */}
        <div className="p-4 border-t bg-gray-50">
          <div className="text-xs text-gray-600 mb-1">
            <div className="font-medium text-gray-900">Open</div>
            <div className="mt-1">Jenny Do</div>
            <div>611 Settlers Trace</div>
            <div>Lafayette, LA 70508</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-white">
        <div className="border-b p-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Messages</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Last updated at 8:24 PM</span>
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

        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <Mail className="h-20 w-20 mx-auto mb-4 text-gray-400 stroke-[1.5]" />
            <h2 className="text-xl font-semibold mb-2">Stay in touch with messages</h2>
            <p className="text-gray-600 mb-6">
              Monitor communication for each job and store emails in one place.
            </p>
            <div className="flex gap-3 justify-center">
              <Button variant="outline">
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
