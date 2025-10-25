"use client";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export default function MessageList({ messages }) {
  const viewportRef = React.useRef(null);

  React.useEffect(() => {
    const el = viewportRef.current?.querySelector('[data-radix-scroll-area-viewport]');
    if (el) el.scrollTop = el.scrollHeight; // auto scroll
  }, [messages]);

  return (
    <ScrollArea ref={viewportRef} className="h-full">
      <div className="p-6 space-y-12">
        {messages.length === 0 ? (
          <div className="h-[60vh] grid place-items-center text-center text-muted-foreground">
            <div>
              <div className="text-2xl font-semibold text-foreground mb-2">
                You&apos;re starting a new conversation
              </div>
              <p>Select a recipient to send a message.</p>
            </div>
          </div>
        ) : (
          messages.map((m) => (
            <div key={m.id} className={cn("flex", m.me ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "max-w-[70%] rounded-2xl border px-3 py-2 text-sm shadow-sm",
                  m.me ? "bg-primary text-primary-foreground border-primary/60"
                       : "bg-card text-card-foreground"
                )}
                title={m.ts?.toLocaleString?.()}
              >
                <div className="whitespace-pre-wrap leading-6">{m.text}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </ScrollArea>
  );
}
