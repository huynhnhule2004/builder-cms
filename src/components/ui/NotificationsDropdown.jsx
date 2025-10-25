"use client";
import { useState } from "react";
import { Bell, MoreHorizontal } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

export default function NotificationsDropdown() {
  const [activeTab, setActiveTab] = useState("mentions");

  const mentionsNotifications = [
    {
      id: 1,
      title: "R 008 - Sable Palm Spec X",
      billNumber: "1PRE02 - R O08-Plumbing Labor -2",
      type: "Bill Reminder",
      time: "1d ago",
      icon: "📄"
    }
  ];

  const generalNotifications = [
    {
      id: 1,
      title: "R 008 - Sable Palm Spec X",
      billNumber: "0006 - Dumpster & Toilets-3",
      description: "Bill '0048 - 0006 - Dumpster & Toilets-3' payment made on job 'R 008 - Sable Palm Spec X'",
      time: "2d ago",
      avatar: "TD",
      avatarColor: "bg-teal-400"
    },
    {
      id: 2,
      title: "R 008 - Sable Palm Spec X",
      billNumber: "0013 - Electrical Rough-in Package-1",
      description: "Bill '0046 - 0013 - Electrical Rough-in Package-1' payment made on job 'R 008 - Sable Palm Spec X'",
      time: "3d ago",
      avatar: "TD",
      avatarColor: "bg-teal-400"
    }
  ];

  return (
    <div className="w-[560px] bg-white rounded-lg shadow-xl border">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 3C10.5523 3 11 3.44772 11 4V10H17C17.5523 10 18 10.4477 18 11C18 11.5523 17.5523 12 17 12H11V18C11 18.5523 10.5523 19 10 19C9.44772 19 9 18.5523 9 18V12H3C2.44772 12 2 11.5523 2 11C2 10.4477 2.44772 10 3 10H9V4C9 3.44772 9.44772 3 10 3Z" fill="currentColor" transform="rotate(45 10 10)"/>
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6C3 5.44772 3.44772 5 4 5H16C16.5523 5 17 5.44772 17 6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6Z" fill="currentColor"/>
              <path d="M6 10C6 9.44772 6.44772 9 7 9H13C13.5523 9 14 9.44772 14 10C14 10.5523 13.5523 11 13 11H7C6.44772 11 6 10.5523 6 10Z" fill="currentColor"/>
              <path d="M8 14C8 13.4477 8.44772 13 9 13H11C11.5523 13 12 13.4477 12 14C12 14.5523 11.5523 15 11 15H9C8.44772 15 8 14.5523 8 14Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full grid grid-cols-2 bg-transparent border-b rounded-none h-auto p-0">
          <TabsTrigger 
            value="mentions" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-gray-600 data-[state=active]:text-gray-900 font-medium"
          >
            @Mentions
          </TabsTrigger>
          <TabsTrigger 
            value="general" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-purple-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-gray-600 data-[state=active]:text-gray-900 font-medium"
          >
            General
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mentions" className="mt-0 max-h-[400px] overflow-y-auto">
          {mentionsNotifications.map((notification) => (
            <div key={notification.id} className="px-6 py-4 hover:bg-gray-50 transition border-b">
              <div className="text-sm text-gray-500 mb-1">{notification.title}</div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">📄</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">Bill {notification.billNumber}</div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Bell className="h-4 w-4" />
                      <span>{notification.type}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{notification.time}</span>
                    <button className="ml-auto p-1 hover:bg-gray-200 rounded">
                      <MoreHorizontal className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
              <button className="text-purple-600 text-sm font-medium mt-3 hover:text-purple-700">
                Show more
              </button>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="general" className="mt-0">
          {generalNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-6">
              <div className="text-6xl mb-4">🔔</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Stay on top of your conversations with clients, crew, and the team
              </h3>
              <div className="grid grid-cols-1 gap-3 w-full max-w-md mt-6">
                <div className="border-2 border-yellow-400 bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-lg">
                      @
                    </div>
                    <span className="font-medium text-gray-900">See when someone's mentioned you directly</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4 bg-teal-50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-teal-400 flex items-center justify-center text-white">
                      👍
                    </div>
                    <span className="font-medium text-gray-900">Get updates on who's reacted to your comments</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4 bg-purple-50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center text-white">
                      ↩
                    </div>
                    <span className="font-medium text-gray-900">Look for direct replies to your comments</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-h-[400px] overflow-y-auto">
              {generalNotifications.map((notification) => (
                <div key={notification.id} className="px-6 py-4 hover:bg-gray-50 transition border-b">
                  <div className="text-sm text-gray-500 mb-1">{notification.title}</div>
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full ${notification.avatarColor} flex items-center justify-center text-white font-semibold text-sm`}>
                      {notification.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-1">Bill {notification.billNumber}</div>
                      <div className="text-sm text-gray-600">{notification.description}</div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-sm text-gray-500">{notification.time}</span>
                        <button className="ml-auto p-1 hover:bg-gray-200 rounded">
                          <MoreHorizontal className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="text-purple-600 text-sm font-medium mt-3 hover:text-purple-700">
                    Show more
                  </button>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
