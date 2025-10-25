"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { MessagesSquare, Plus } from "lucide-react";
import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="h-full grid place-items-center">
      <div className="text-center">
        <MessagesSquare className="mx-auto h-14 w-14 text-muted-foreground mb-3" />
        <div className="text-2xl font-semibold mb-1">Stay connected with Chat</div>
        <p className="text-sm text-muted-foreground mb-4">
          Communicate with your team, subs, and clients.
        </p>
        <Link href="/chat/new">
          <Button className="bg-[#004fd6]">
            <Plus className="mr-2 h-4 w-4" />
            New chat
          </Button>
        </Link>
      </div>
    </div>
  );
}
