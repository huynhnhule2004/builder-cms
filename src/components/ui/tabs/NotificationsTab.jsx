"use client";
import React from "react";
import TabPanelWrapper from "./TabPanelWrapper";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/accordion";
import { Checkbox } from "../../ui/checkbox";
import { Separator } from "../../ui/separator";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../ui/tooltip";

// ===== mock cấu hình (bạn có thể lấy từ API) =====
const GROUPS = [
  { key: "sales", label: "SALES", items: ["New lead assigned", "Lead status changed", "Export completed"] },
  { key: "pm", label: "PROJECT MANAGEMENT", items: ["Schedule updated", "Daily log submitted", "Task assigned"] },
  { key: "files", label: "FILES", items: ["File uploaded", "File approved", "File rejected"] },
  { key: "msg", label: "MESSAGING", items: ["New message", "Mentioned in message", "Channel invite"] },
  { key: "fin", label: "FINANCIAL", items: ["Invoice created", "Payment received", "Budget changed"] },
  { key: "admin", label: "ADMINISTRATIVE", items: ["User invited", "Role changed", "Subscription warning"] },
];

// helper tạo state mặc định
const defaultState = () => {
  const s = {};
  for (const g of GROUPS) {
    s[g.key] = g.items.map(() => ({ email: true, text: false, push: true }));
  }
  return s;
};

// Checkbox 3 trạng thái (checked / unchecked / indeterminate)
function TriCheckbox({ checkedCount, total, onCheckedChange }) {
  const ref = React.useRef(null);
  const all = checkedCount === total;
  const none = checkedCount === 0;
  const indeterminate = !all && !none;

  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <Checkbox
      ref={ref}
      checked={all}
      onCheckedChange={(v) => onCheckedChange(Boolean(v))}
    />
  );
}

export default function NotificationsTab() {
  // state: groups -> items -> channel flags
  const [state, setState] = React.useState(defaultState);

  // đếm tổng theo channel toàn hệ thống
  const countAllByChannel = (channel) => {
    let c = 0, total = 0;
    for (const g of GROUPS) {
      const arr = state[g.key];
      total += arr.length;
      c += arr.filter((x) => x[channel]).length;
    }
    return { c, total };
  };

  // toggle tất cả theo channel
  const toggleAllChannel = (channel, val) => {
    setState((prev) => {
      const next = { ...prev };
      for (const g of GROUPS) {
        next[g.key] = next[g.key].map((x) => ({ ...x, [channel]: val }));
      }
      return next;
    });
  };

  // đếm theo group+channel
  const countGroupByChannel = (gkey, channel) => {
    const arr = state[gkey];
    return { c: arr.filter((x) => x[channel]).length, total: arr.length };
  };

  // toggle group theo channel
  const toggleGroupChannel = (gkey, channel, val) => {
    setState((prev) => {
      const next = { ...prev };
      next[gkey] = next[gkey].map((x) => ({ ...x, [channel]: val }));
      return next;
    });
  };

  // toggle 1 item
  const toggleItem = (gkey, idx, channel, val) => {
    setState((prev) => {
      const next = { ...prev };
      const arr = [...next[gkey]];
      arr[idx] = { ...arr[idx], [channel]: val };
      next[gkey] = arr;
      return next;
    });
  };

  const emailAll = countAllByChannel("email");
  const textAll = countAllByChannel("text");
  const pushAll = countAllByChannel("push");

  return (
    <TabPanelWrapper>
      <div className="mb-2 text-sm text-muted-foreground flex items-start gap-2">
        Browser notifications are turned off. To start receiving browser notifications, allow notifications in your browser settings.
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 mt-0.5 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent side="top" align="start">
              Push = trình duyệt; Text = SMS; Email = email chuẩn.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Header cột */}
      <div className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-6 py-3">
        <div className="text-sm font-semibold">All notifications</div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground w-12 text-right">Email</span>
          <TriCheckbox
            checkedCount={emailAll.c}
            total={emailAll.total}
            onCheckedChange={(v) => toggleAllChannel("email", v)}
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground w-10 text-right">Text</span>
          <TriCheckbox
            checkedCount={textAll.c}
            total={textAll.total}
            onCheckedChange={(v) => toggleAllChannel("text", v)}
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground w-12 text-right">Push</span>
          <TriCheckbox
            checkedCount={pushAll.c}
            total={pushAll.total}
            onCheckedChange={(v) => toggleAllChannel("push", v)}
          />
        </div>
      </div>

      <Separator className="mb-4" />

      <div className="rounded-md border bg-[#f8f9fb]">
        <Accordion type="multiple" className="divide-y">
          {GROUPS.map((g) => {
            const eCount = countGroupByChannel(g.key, "email");
            const tCount = countGroupByChannel(g.key, "text");
            const pCount = countGroupByChannel(g.key, "push");

            return (
              <AccordionItem key={g.key} value={g.key} className="border-none">
                <div className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-6">
                  <AccordionTrigger className="px-4 py-3 text-left">{g.label}</AccordionTrigger>
                  <div className="flex items-center gap-2 px-4">
                    <TriCheckbox
                      checkedCount={eCount.c}
                      total={eCount.total}
                      onCheckedChange={(v) => toggleGroupChannel(g.key, "email", v)}
                    />
                  </div>
                  <div className="flex items-center gap-2 px-4">
                    <TriCheckbox
                      checkedCount={tCount.c}
                      total={tCount.total}
                      onCheckedChange={(v) => toggleGroupChannel(g.key, "text", v)}
                    />
                  </div>
                  <div className="flex items-center gap-2 px-4">
                    <TriCheckbox
                      checkedCount={pCount.c}
                      total={pCount.total}
                      onCheckedChange={(v) => toggleGroupChannel(g.key, "push", v)}
                    />
                  </div>
                </div>

                <AccordionContent className="bg-white">
                  <div className="divide-y">
                    {g.items.map((label, idx) => {
                      const row = state[g.key][idx];
                      return (
                        <div
                          key={idx}
                          className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-6 px-4 py-3"
                        >
                          <div className="text-sm">{label}</div>

                          <div className="flex items-center justify-end gap-2">
                            <Checkbox
                              checked={row.email}
                              onCheckedChange={(v) => toggleItem(g.key, idx, "email", Boolean(v))}
                            />
                          </div>

                          <div className="flex items-center justify-end gap-2">
                            <Checkbox
                              checked={row.text}
                              onCheckedChange={(v) => toggleItem(g.key, idx, "text", Boolean(v))}
                            />
                          </div>

                          <div className="flex items-center justify-end gap-2">
                            <Checkbox
                              checked={row.push}
                              onCheckedChange={(v) => toggleItem(g.key, idx, "push", Boolean(v))}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </TabPanelWrapper>
  );
}
