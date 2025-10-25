"use client";
import { useMemo, useState } from "react";
import { Search, ChevronDown, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

const jobsMock = [
  "C 005 - Uniq Nail Lounge & Spa",
  "C 005-0 Uniq Shell Building",
  "C 006 - iNail Supply",
  "N 002 - Mahavairocana",
  "R 003 - Jenny Do",
  "R 010 - Sample Residential",
  "C 012 - New Build",
  "N 020 - Office Remodel",
  "C 030 - Coffee Shop"
];

export default function Sidebar() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => jobsMock.filter(j => j.toLowerCase().includes(q.toLowerCase())), [q]);

  return (
    <aside className="w-[280px] shrink-0 rounded-lg bg-white border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2">
        <button className="rounded-md border px-2 py-1 text-xs inline-flex items-center gap-1">
          Jobs <ChevronDown className="h-3 w-3" />
        </button>
        <div className="flex items-center gap-1 text-gray-500">
          <SlidersHorizontal className="h-4 w-4" />
          <ArrowUpDown className="h-4 w-4" />
        </div>
      </div>

      <div className="px-3 pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input className="pl-9" placeholder="Search" value={q} onChange={e => setQ(e.target.value)} />
        </div>
      </div>

      <Separator />

      <div className="flex items-center justify-between px-3 py-2 text-sm text-gray-600">
        <span className="font-medium">Pick a Job</span>
        <span className="text-gray-400">↕</span>
      </div>

      <ScrollArea className="max-h-[60vh]">
        <div className="px-3 pb-3">
          <div className="px-1 py-1 text-xs text-gray-500">All {jobsMock.length} Open Jobs</div>
          <ul className="space-y-1">
            {filtered.map(name => (
              <li key={name}>
                <button className="group flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm hover:bg-indigo-50">
                  <span className="line-clamp-1">{name}</span>
                  <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">QB</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </ScrollArea>
    </aside>
  );
}
