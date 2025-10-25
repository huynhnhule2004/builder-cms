"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Paperclip, Image, Smile, CheckCircle2, Type, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function MessageComposer({ onSend, disabled }) {
  const [text, setText] = React.useState("");
  const taRef = React.useRef(null);

  const sendNow = () => {
    const t = text.trim();
    if (!t || disabled) return;
    onSend?.(t);
    setText("");
    resize(); // reset height
  };

  const resize = () => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 160) + "px";
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendNow();
    }
  };

  const canSend = !disabled && text.trim().length > 0;

  return (
    <div className="border-t bg-background">
      {/* toolbar */}
      <div className="flex items-center gap-1 px-3 py-2">
        <TooltipProvider delayDuration={100}>
          {[
            { icon: Smile, tip: "Emoji" },
            { icon: CheckCircle2, tip: "Mark as important" },
            { icon: Paperclip, tip: "Attach file" },
            { icon: Image, tip: "Insert image" },
            { icon: Type, tip: "Formatting" },
          ].map(({ icon: Icon, tip }, i) => (
            <Tooltip key={i}>
              <TooltipTrigger asChild>
                <button className="h-8 w-8 grid place-items-center rounded-md hover:bg-muted text-muted-foreground">
                  <Icon className="h-4 w-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>{tip}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>

      {/* composer row */}
      <div className="flex items-end gap-3 p-3 pt-0 min-w-0">
        <div className="flex-1 min-w-0 rounded-xl border bg-background px-3 py-2">
          <Textarea
            ref={taRef}
            placeholder="Add a comment"
            value={text}
            onChange={(e) => { setText(e.target.value); resize(); }}
            onKeyDown={onKeyDown}
            className={cn("min-h-[40px] max-h-40 resize-none border-0 p-0 focus-visible:ring-0")}
            rows={2}
            disabled={disabled}
          />
        </div>
        <Button className="px-5 h-10 shrink-0" onClick={sendNow} disabled={!canSend}>
          <Send className="mr-2 h-4 w-4" />
          Send
        </Button>
      </div>
    </div>
  );
}
