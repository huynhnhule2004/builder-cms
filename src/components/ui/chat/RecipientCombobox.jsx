"use client";
import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronsUpDown, Mail, X } from "lucide-react";
import { cn } from "@/lib/utils";

const MOCK = [
  { id: "1", name: "Jenny Do", email: "jenny@example.com" },
  { id: "2", name: "Thuy Le", email: "thuy.le@example.com" },
  { id: "3", name: "Minh Pham", email: "minh.pham@example.com" },
  { id: "4", name: "Sable Palm", email: "sable@example.com" },
];

export default function RecipientCombobox({ value = [], onChange }) {
  const [open, setOpen] = React.useState(false);

  const add = (u) => {
    if (!value.find((x) => x.id === u.id)) onChange?.([...value, u]);
    setOpen(false);
  };
  const remove = (id) => onChange?.(value.filter((x) => x.id !== id));

  return (
    <div className="w-full">
      {/* ✅ quan trọng: min-w-0 để con không làm tràn hàng */}
      <div className="flex items-center gap-2 min-w-0">
        <div className="text-sm text-muted-foreground w-8 shrink-0">To:</div>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            {/* ✅ flex-1 + min-w-0 + h-auto để wrap chip, không justify-between */}
            <Button
              variant="outline"
              role="combobox"
              className={cn(
                "flex-1 min-w-0 h-auto min-h-10 py-2 border-primary/30",
                "items-start justify-start text-left",
                value.length === 0 && "text-muted-foreground"
              )}
            >
              {/* ✅ container wrap + chiếm full chiều ngang */}
              <div className="flex w-full flex-wrap items-center gap-2">
                {value.length === 0 ? (
                  <span className="truncate">Start typing to view results</span>
                ) : (
                  value.map((v) => (
                    <span
                      key={v.id}
                      className="inline-flex items-center gap-2 rounded-full border px-2 py-1 text-xs max-w-full"
                    >
                      <Avatar className="h-5 w-5">
                        <AvatarFallback className="text-[10px]">
                          {v.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium truncate">{v.name}</span>
                      <button
                        type="button"
                        className="opacity-70 hover:opacity-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          remove(v.id);
                        }}
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </span>
                  ))
                )}
                {/* ✅ chevron luôn dính cuối, không đẩy nội dung */}
                <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
              </div>
            </Button>
          </PopoverTrigger>

          {/* (tuỳ chọn) rộng bằng trigger để không bị lệch */}
          <PopoverContent className="p-0 w-[--radix-popover-trigger-width]" align="start">
            <Command shouldFilter>
              <CommandInput placeholder="Search people…" />
              <CommandList>
                <CommandEmpty>No result.</CommandEmpty>
                <CommandGroup heading="People">
                  {MOCK.map((u) => (
                    <CommandItem key={u.id} onSelect={() => add(u)}>
                      <Avatar className="mr-2 h-6 w-6">
                        <AvatarFallback className="text-[10px]">
                          {u.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-sm">{u.name}</span>
                        <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                          <Mail className="h-3 w-3" /> {u.email}
                        </span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
