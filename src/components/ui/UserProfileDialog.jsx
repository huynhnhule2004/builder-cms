"use client";

import { Dialog, DialogContent } from "../ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { Mail } from "lucide-react";

// Tabs
import OverviewTab from "./tabs/OverviewTab";
import PermissionsTab from "./tabs/PermissionsTab";
import NotificationsTab from "./tabs/NotificationsTab";
import MessagingTab from "./tabs/MessagingTab";
import JobAccessTab from "./tabs/JobAccessTab";
import SecurityTab from "./tabs/SecurityTab";
import OtherTab  from "./tabs/OtherTab";

export default function UserProfileDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Cố định khung dialog + overflow bị ẩn, cuộn ở bên trong */}
      <DialogContent className="min-w-5xl p-0 bg-white rounded-xl overflow-hidden">
        {/* KHÓA CHIỀU CAO: h-[80vh] để có vùng cuộn bên trong */}
        <div className="flex h-[80vh] min-h-[640px] flex-col">
          {/* Header (không cuộn) */}
          <div className="px-8 pt-6 pb-4">
            <div className="text-2xl font-bold mb-3">Kien2 Huynh</div>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 shadow">
                <AvatarFallback className="text-2xl">KH</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-2 text-base font-medium">
                <Mail className="h-5 w-5 text-purple-600" />
                <span className="text-purple-700">huynh2tech@gmail.com</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* KHU VỰC CHÍNH: phải có min-h-0 để con bên trong được phép overflow */}
          <Tabs defaultValue="overview" className="flex min-h-0 flex-1 flex-col">
            {/* TabsList sticky — scroll container là ScrollArea bên dưới */}
            <TabsList className="flex shrink-0 px-8 pt-4 gap-2 border-b bg-[#f8f9fb] rounded-none sticky top-0 z-10">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="permissions">Permissions</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="messaging">Messaging</TabsTrigger>
              <TabsTrigger value="jobaccess">Job Access (26)</TabsTrigger>
              <TabsTrigger value="security">Security &amp; Login</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
              <TabsTrigger value="homedepot" disabled>The Home Depot</TabsTrigger>
            </TabsList>

            {/* ĐẶT ScrollArea bao quanh nội dung tab để cuộn */}
            <ScrollArea className="flex-1 min-h-0">
              <div className="pb-4">
                <TabsContent value="overview">
                  <OverviewTab />
                </TabsContent>

                <TabsContent value="permissions">
                  <PermissionsTab />
                </TabsContent>

                <TabsContent value="notifications">
                  <NotificationsTab />
                </TabsContent>

                <TabsContent value="messaging">
                  <MessagingTab />
                </TabsContent>

                <TabsContent value="jobaccess">
                  <JobAccessTab />
                </TabsContent>

                <TabsContent value="security">
                  <SecurityTab />
                </TabsContent>
                <TabsContent value="other" className="min-h-0 flex-1">
                  <OtherTab />
                </TabsContent>
              </div>
            </ScrollArea>
          </Tabs>

          <Separator />

          {/* Footer (không cuộn) */}
          <div className="flex justify-end gap-3 px-8 py-4 bg-gray-50">
            <Button variant="outline" className="px-5" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button className="px-6">Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
