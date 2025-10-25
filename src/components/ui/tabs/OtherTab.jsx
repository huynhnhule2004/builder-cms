"use client";
import React from "react";
import TabPanelWrapper from "./TabPanelWrapper";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../ui/select";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Checkbox } from "../../ui/checkbox";
import { Label } from "../../ui/label";
import { Separator } from "../../ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../ui/tooltip";
import { Info, Plus } from "lucide-react";

/** Nhóm nhỏ để render Input có prefix (vd: $) */
function InputWithPrefix({ prefix = "$", ...props }) {
  return (
    <div className="flex items-center rounded-md border bg-background">
      <span className="px-2 text-muted-foreground select-none">{prefix}</span>
      <Input className="border-0 focus-visible:ring-0" {...props} />
    </div>
  );
}

export default function OtherTab() {
  const [todo, setTodo] = React.useState("");
  const [laborCode, setLaborCode] = React.useState("flat");
  const [laborCost, setLaborCost] = React.useState("0.00");
  const [reqGeo, setReqGeo] = React.useState(false);

  return (
    <TabPanelWrapper>
      <div className="text-lg font-semibold mb-4">Other</div>

      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">To-Do’s</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Select value={todo} onValueChange={setTodo}>
            <SelectTrigger className="w-[320px]">
              <SelectValue placeholder="-- All ToDo's Selected --" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All To-Do’s</SelectItem>
              <SelectItem value="mine">My To-Do’s</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>

          <Button type="button" variant="secondary" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Feed
          </Button>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Time Clock</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Geofence */}
          <div className="flex items-start gap-3">
            <Checkbox id="geo" checked={reqGeo} onCheckedChange={(v) => setReqGeo(Boolean(v))} />
            <div>
              <Label htmlFor="geo" className="cursor-pointer">
                Require location on mobile and track when user clocks in or out beyond the geofence.
              </Label>
              <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-3.5 w-3.5" />
                    </TooltipTrigger>
                    <TooltipContent side="top" align="start">
                      Bật theo dõi vị trí cho chấm công (geofencing).
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                Works on mobile app.
              </div>
            </div>
          </div>

          <div className="grid max-w-xl gap-4">
            <div className="space-y-1.5">
              <Label>Default labor cost code</Label>
              <Select value={laborCode} onValueChange={setLaborCode}>
                <SelectTrigger>
                  <SelectValue placeholder="Select code" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flat">Buildertrend Flat Rate</SelectItem>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="overtime">Overtime</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label>Default labor cost</Label>
              <InputWithPrefix
                value={laborCost}
                inputMode="decimal"
                onChange={(e) => setLaborCost(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Label className="text-sm">Contact Information</Label>
          <Textarea
            disabled
            placeholder="—"
            className="max-w-2xl resize-none"
          />
        </CardContent>
      </Card>
    </TabPanelWrapper>
  );
}
