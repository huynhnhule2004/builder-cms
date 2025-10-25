"use client";
import React from "react";
import { ScrollArea } from "../../ui/scroll-area";

export default function TabPanelWrapper({ children }) {
  return (
    <ScrollArea className="h-full">
      <div className="px-8 py-6">{children}</div>
    </ScrollArea>
  );
}
