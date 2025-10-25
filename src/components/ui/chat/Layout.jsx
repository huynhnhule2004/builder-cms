"use client";
import React from "react";
import Sidebar from "./Sidebar";

export default function ChatLayout({
  children,
  current = "new",
  // nếu trang có header cao 80px, dùng belowHeader; muốn full screen thì mode="fullscreen"
  mode = "belowHeader",
  offset = 80,
}) {
  const wrapperClass = mode === "fullscreen" ? "fixed inset-0" : "relative w-full";
  const wrapperStyle = mode === "fullscreen" ? undefined : { height: `calc(100dvh - ${offset}px)` };

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <div className="flex h-full w-full border rounded-lg bg-background overflow-hidden">
        <Sidebar current={current} />
        {/* đừng để con làm tràn ra ngoài */}
        <div className="flex-1 min-w-0 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
