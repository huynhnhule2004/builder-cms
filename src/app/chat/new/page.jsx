"use client";
import React from "react";
import ChatLayout from "@/components/ui/chat/Layout";
import RecipientCombobox from "@/components/ui/chat/RecipientCombobox";
import MessageComposer from "@/components/ui/chat/MessageComposer";

export default function NewChatPage() {
  const [recipients, setRecipients] = React.useState([]);
  const [messages, setMessages] = React.useState([]);

  return (
    <ChatLayout current="new" mode="belowHeader" offset={80}>
      {/* grid 3 hàng: auto / 1fr / auto -> composer không bao giờ mất */}
      <div className="grid h-full min-h-0 grid-rows-[auto,1fr,auto]">
        {/* To bar (không cuộn) */}
        <div className="border-b p-3">
          <div className="min-w-0">
            <RecipientCombobox value={recipients} onChange={setRecipients} />
          </div>
        </div>

        {/* Thread (cuộn tại đây) */}
        <div className="min-h-96 overflow-auto">
          <div className="p-6 h-full">
            {messages.length === 0 ? (
              <div className="h-full grid place-items-center text-center text-muted-foreground">
                <div>
                  <div className="text-2xl font-semibold text-foreground mb-2">
                    You&apos;re starting a new conversation
                  </div>
                  <p>Select a recipient to send a message.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((m) => (
                  <div key={m.id} className="max-w-[640px] rounded-lg border p-3">
                    <div className="text-sm">{m.text}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Composer (không cuộn, luôn thấy) */}
        <MessageComposer
          onSend={(text) =>
            setMessages((arr) => [...arr, { id: crypto.randomUUID(), text }])
          }
        />
      </div>
    </ChatLayout>
  );
}
