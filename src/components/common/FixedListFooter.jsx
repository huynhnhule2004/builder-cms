"use client";

import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FiMoreHorizontal } from "react-icons/fi";
import ManageSavedViewsDialog from "../ui/ManageSavedViewsDialog";

export default function FixedListFooter(props) {
  const {
    value = "standard",
    options = [{ label: "Standard View", value: "standard" }],
    onChange,
    countText = "1-8 of 8 items",
    className = "",
  } = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={[
          // fixed dưới đáy + an toàn cho tai thỏ
          "fixed inset-x-0 bottom-0 z-50",
          // nền mờ + viền trên
          "border-t border-slate-200 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/75",
          // đổ bóng nhẹ
          "shadow-[0_-4px_12px_rgba(0,0,0,0.04)]",
          // padding + safe-area
          "py-2 pb-[calc(env(safe-area-inset-bottom,0px)+0.5rem)]",
          className,
        ].join(" ")}
      >
        <div className="mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="h-8 min-w-[120px] rounded border border-slate-300 px-2 text-sm text-slate-700 outline-none hover:border-slate-400">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {options.map((o) => (
                    <SelectItem key={o.value} value={o.value}>
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <button
                className="flex items-center justify-center w-8 h-8 rounded hover:bg-slate-100"
                onClick={() => setOpen(true)}
                aria-label="Manage Saved Views"
                type="button"
              >
                <FiMoreHorizontal className="text-2xl text-gray-400" />
              </button>
            </div>
            <div className="text-sm text-gray-500">{countText}</div>
          </div>
        </div>
      </div>
      <ManageSavedViewsDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
