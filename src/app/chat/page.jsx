"use client";
import React from "react";
import ChatLayout from "@/components/ui/chat/Layout";
import EmptyState from "@/components/ui/chat/EmptyState";

export default function ChatPage() {
  return (
    <ChatLayout current="list">
      <EmptyState />
    </ChatLayout>
  );
}
