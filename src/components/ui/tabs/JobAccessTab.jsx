"use client";
import React from "react";
import TabPanelWrapper from "./TabPanelWrapper";
import { Checkbox } from "../../ui/checkbox";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "../../ui/table";
import { Separator } from "../../ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../ui/tooltip";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "../../ui/sheet";
import { Input } from "../../ui/input";
import { Info, Filter } from "lucide-react";

// ===== Mock data (thay bằng dữ liệu của bạn) =====
const JOBS = [
  { id: "c005-0", name: "C 005-0 Uniq Shell Building", status: "Open", group: "", opened: "Jul 21, 2025" },
  { id: "c006", name: "C 006 - iNail Supply", status: "Open", group: "", opened: "Apr 23, 2025" },
  { id: "r009", name: "R 009 - Minh Pham's Resident", status: "Open", group: "", opened: "Feb 14, 2025" },
  { id: "r008", name: "R 008 - Sable Palm Spec X", status: "Open", group: "", opened: "Dec 30, 2024" },
  { id: "r005", name: "R 005 - Thuy Le", status: "Open", group: "", opened: "May 30, 2024" },
  { id: "r004", name: "R 004 - Thang Duong", status: "Open", group: "", opened: "Feb 9, 2024" },
  { id: "c005", name: "C 005 - Uniq Nail Lounge & Spa", status: "Open", group: "", opened: "Dec 23, 2023" },
  { id: "n002", name: "N 002 - Mahavairocana", status: "Open", group: "", opened: "Jul 28, 2023" },
  { id: "r003", name: "R 003 - Jenny Do", status: "Open", group: "", opened: "Jul 28, 2023" },
];

// ===== Utilities =====
function useTriState(values) {
  const total = values.length;
  const checked = values.filter(Boolean).length;
  const all = checked === total;
  const none = checked === 0;
  const indeterminate = !all && !none;
  return { all, indeterminate, total };
}

function TriHeaderCheckbox({ values, onToggleAll }) {
  const ref = React.useRef(null);
  const { all, indeterminate } = useTriState(values);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return (
    <Checkbox
      ref={ref}
      checked={all}
      onCheckedChange={(v) => onToggleAll(Boolean(v))}
    />
  );
}

export default function JobAccessTab() {
  // state cho từng hàng
  const [rows, setRows] = React.useState(
    JOBS.map((j) => ({ ...j, access: true, notify: true }))
  );

  // filter sheet
  const [openFilter, setOpenFilter] = React.useState(false);
  const [q, setQ] = React.useState("");

  // computed cho header checkbox
  const accessVals = rows.map((r) => r.access);
  const notifyVals = rows.map((r) => r.notify);

  const toggleAll = (field, val) =>
    setRows((prev) => prev.map((r) => ({ ...r, [field]: val })));

  const toggleRow = (id, field, val) =>
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [field]: val } : r)));

  const filtered = rows.filter((r) => r.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <TabPanelWrapper>
      <div className="flex items-center justify-between mb-3">
        <div className="text-lg font-semibold">Job access</div>
        <Button variant="outline" size="sm" onClick={() => setOpenFilter(true)}>
          <Filter className="h-4 w-4 mr-2" />
          Filter{q ? " (1)" : ""}
        </Button>
      </div>

      <div className="rounded-md border bg-white">
        {/* New Jobs */}
        <div className="px-4 py-3">
          <div className="text-sm font-medium mb-2">New Jobs:</div>
          <div className="flex items-start gap-3 text-sm">
            <Checkbox id="auto-access" disabled checked />
            <div>
              <label htmlFor="auto-access" className="text-muted-foreground">
                Grant Kien2 automatic access to new jobs and templates
              </label>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 inline ml-2 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent side="top" align="start">
                    Khi bật, user tự động có Access & Notifications cho job mới.
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        <Separator />

        {/* Table */}
        <div className="relative">
          {/* header sticky */}
          <Table className="border-b">
            <TableHeader className="sticky top-0 z-10 bg-[#f6f7fb]">
              <TableRow>
                <TableHead className="w-[90px]">Access</TableHead>
                <TableHead className="w-[130px]">Notifications</TableHead>
                <TableHead className="min-w-[320px]">Job name</TableHead>
                <TableHead className="w-[140px]">Job status</TableHead>
                <TableHead className="w-[160px]">Group</TableHead>
                <TableHead className="w-[160px]">Date opened</TableHead>
              </TableRow>
              <TableRow className="bg-[#f6f7fb]">
                <TableHead>
                  <TriHeaderCheckbox
                    values={accessVals}
                    onToggleAll={(v) => toggleAll("access", v)}
                  />
                </TableHead>
                <TableHead>
                  <TriHeaderCheckbox
                    values={notifyVals}
                    onToggleAll={(v) => toggleAll("notify", v)}
                  />
                </TableHead>
                <TableHead colSpan={4} />
              </TableRow>
            </TableHeader>
          </Table>

          {/* body */}
          <div className="max-h-[52vh] overflow-auto">
            <Table>
              <TableBody>
                {filtered.map((r) => (
                  <TableRow key={r.id} className="hover:bg-muted/40">
                    <TableCell className="w-[90px]">
                      <Checkbox
                        checked={r.access}
                        onCheckedChange={(v) => toggleRow(r.id, "access", Boolean(v))}
                      />
                    </TableCell>
                    <TableCell className="w-[130px]">
                      <Checkbox
                        checked={r.notify}
                        onCheckedChange={(v) => toggleRow(r.id, "notify", Boolean(v))}
                      />
                    </TableCell>
                    <TableCell className="min-w-[320px] font-medium">
                      {r.name}
                    </TableCell>
                    <TableCell className="w-[140px]">
                      <Badge variant="secondary" className="rounded-full">
                        {r.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="w-[160px] text-muted-foreground">
                      {r.group || "—"}
                    </TableCell>
                    <TableCell className="w-[160px] text-muted-foreground">
                      {r.opened}
                    </TableCell>
                  </TableRow>
                ))}

                {filtered.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-sm text-muted-foreground py-10">
                      No jobs found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Filter sheet */}
      <Sheet open={openFilter} onOpenChange={setOpenFilter}>
        <SheetContent side="right" className="w-[380px] sm:w-[420px]">
          <SheetHeader>
            <SheetTitle>Filter jobs</SheetTitle>
          </SheetHeader>
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Search by job name</div>
              <Input
                placeholder="Type to filter…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
            {/* bạn có thể thêm filter by status/date ở đây */}
          </div>
          <SheetFooter className="mt-6">
            <Button variant="outline" onClick={() => setQ("")}>Clear</Button>
            <Button onClick={() => setOpenFilter(false)}>Apply</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </TabPanelWrapper>
  );
}
