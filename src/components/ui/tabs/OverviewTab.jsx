"use client";
import React from "react";
import TabPanelWrapper from "./TabPanelWrapper";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import {
  Select, SelectTrigger, SelectContent, SelectItem, SelectValue,
} from "../../ui/select";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "../../ui/tooltip";
import { Info } from "lucide-react";

export default function OverviewTab() {
  return (
    <TabPanelWrapper>
      <div className="flex justify-between items-center mb-4">
        <div className="font-semibold text-lg">Overview</div>
        <div className="text-sm text-gray-500">Invite Accepted Sep 26, 2025</div>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-[15px]">
        <div>
          <div className="text-gray-500">
            First Name <span className="text-red-500">*</span>
          </div>
          <div className="font-medium">Kien2</div>
        </div>

        <div>
          <div className="text-gray-500">
            Last Name <span className="text-red-500">*</span>
          </div>
          <div className="font-medium">Huynh</div>
        </div>

        <div>
          <div className="text-gray-500">
            Primary Email <span className="text-red-500">*</span>
          </div>
          <div className="font-medium">huynh2tech@gmail.com</div>
        </div>

        <div>
          <div className="text-gray-500">Label</div>
          <div className="font-medium">--</div>
        </div>

        <div>
          <div className="text-gray-500">Phone Number</div>
          <div className="font-medium">--</div>
        </div>

        <div>
          <div className="text-gray-500 mb-1">Cell Phone</div>
          <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger className="w-28">
                <SelectValue placeholder="+1" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+1">+1</SelectItem>
                <SelectItem value="+84">+84</SelectItem>
              </SelectContent>
            </Select>

            <Input className="w-40" placeholder="" />
            <Button variant="outline" disabled>
              Verify phone number
            </Button>
          </div>
        </div>

        <div className="col-span-2">
          <div className="text-gray-500 flex items-center gap-2">
            Receive text messages
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent side="top" align="start">
                  Bật để nhận SMS thông báo và mã xác thực.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </TabPanelWrapper>
  );
}
