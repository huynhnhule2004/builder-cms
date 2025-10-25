"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Plus, User } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ current = "new" }) {
  return (
    <div className="border-r w-[320px] shrink-0 flex flex-col">
      <div className="p-3 flex items-center gap-2">
        <div className="relative w-full">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-8" />
        </div>
        <Link href="/chat/new">
          <Button className="bg-[#004fd6]">
            <Plus className="mr-2 h-4 w-4" />
            New chat
          </Button>
        </Link>
      </div>

      <ScrollArea className="flex-1">
        <nav className="px-2 py-1">
          <Link href="/chat/new">
            <div
              className={[
                "flex items-center gap-3 rounded-md px-3 py-2 cursor-pointer",
                current === "new" ? "bg-primary/10 text-foreground" : "hover:bg-muted"
              ].join(" ")}
            >
              <div className="grid h-6 w-6 place-items-center rounded-full bg-muted">
                <User className="h-4 w-4" />
              </div>
              <span>New Chat</span>
            </div>
          </Link>
        </nav>
      </ScrollArea>
    </div>
  );
}
