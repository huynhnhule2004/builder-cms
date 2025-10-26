"use client";
import { useState } from "react";
import { Bell, MoreHorizontal, FileText, AtSign, ThumbsUp, CornerDownRight, X, Filter } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

export default function NotificationsDropdown() {
  const [activeTab, setActiveTab] = useState("mentions");

  const mentionsNotifications = [
    {
      id: 1,
      title: "R 008 - Sable Palm Spec X",
      billNumber: "1PRE02 - R O08-Plumbing Labor -2",
      type: "Bill Reminder",
      time: "1d ago"
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
      avatarColor: "bg-teal-500"
    },
    {
      id: 2,
      title: "R 008 - Sable Palm Spec X",
      billNumber: "0013 - Electrical Rough-in Package-1",
      description: "Bill '0046 - 0013 - Electrical Rough-in Package-1' payment made on job 'R 008 - Sable Palm Spec X'",
      time: "3d ago",
      avatar: "TD",
      avatarColor: "bg-teal-500"
    }
  ];

  return (
    <div className="w-[560px] bg-white rounded-lg shadow-xl border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Close">
            <X className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Filter">
            <Filter className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full grid grid-cols-2 bg-transparent border-b border-gray-200 rounded-none h-auto p-0">
          <TabsTrigger 
            value="mentions" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-gray-600 data-[state=active]:text-gray-900 font-medium transition-colors"
          >
            @Mentions
          </TabsTrigger>
          <TabsTrigger 
            value="general" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 text-gray-600 data-[state=active]:text-gray-900 font-medium transition-colors"
          >
            General
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mentions" className="mt-0 max-h-[400px] overflow-y-auto">
          {mentionsNotifications.map((notification) => (
            <div key={notification.id} className="px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0">
              <div className="text-sm text-gray-500 mb-2">{notification.title}</div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900">Bill {notification.billNumber}</div>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                      <Bell className="h-4 w-4" />
                      <span>{notification.type}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{notification.time}</span>
                    <button className="ml-auto p-1 hover:bg-gray-200 rounded transition-colors">
                      <MoreHorizontal className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
              <button className="text-blue-600 text-sm font-medium mt-3 hover:text-blue-700 transition-colors">
                Show more
              </button>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="general" className="mt-0">
          {generalNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Bell className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                Stay on top of your conversations with clients, crew, and the team
              </h3>
              <div className="grid grid-cols-1 gap-3 w-full max-w-md mt-6">
                <div className="border-2 border-yellow-400 bg-yellow-50 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                      <AtSign className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">See when someone's mentioned you directly</span>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-teal-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
                      <ThumbsUp className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">Get updates on who's reacted to your comments</span>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 bg-blue-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <CornerDownRight className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">Look for direct replies to your comments</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-h-[400px] overflow-y-auto">
              {generalNotifications.map((notification) => (
                <div key={notification.id} className="px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0">
                  <div className="text-sm text-gray-500 mb-2">{notification.title}</div>
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full ${notification.avatarColor} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}>
                      {notification.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 mb-1">Bill {notification.billNumber}</div>
                      <div className="text-sm text-gray-600 line-clamp-2">{notification.description}</div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-sm text-gray-500">{notification.time}</span>
                        <button className="ml-auto p-1 hover:bg-gray-200 rounded transition-colors">
                          <MoreHorizontal className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="text-blue-600 text-sm font-medium mt-3 hover:text-blue-700 transition-colors">
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
