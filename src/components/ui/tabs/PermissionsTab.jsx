"use client";
import React from "react";
import TabPanelWrapper from "./TabPanelWrapper";
import { Checkbox } from "../../ui/checkbox";
import { Separator } from "../../ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

export default function PermissionsTab() {
  return (
    <TabPanelWrapper>
      <div className="font-semibold text-lg mb-4">Permissions</div>

      <div className="mb-6">
        <div className="mb-2">
          <span className="text-gray-500">
            Role <span className="text-red-500">*</span>
          </span>
        </div>
        <div className="font-medium mb-2">Admin R&amp;D</div>
        <div className="mb-2 text-gray-500">Role description</div>
        <div className="mb-4">--</div>
      </div>

      {/* Sales */}
      <Card className="mb-4">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between pb-2">
            <div className="font-medium">Leads</div>
            <div>View</div>
          </div>
          <Separator className="mb-3" />
          <div className="space-y-2 pl-1">
            <div className="flex items-center gap-2">
              <Checkbox id="assign-salesperson" disabled />
              <label htmlFor="assign-salesperson" className="text-gray-600">
                Assign Salesperson
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="view-other-leads" disabled />
              <label htmlFor="view-other-leads" className="text-gray-600">
                View other Salesperson Leads &amp; Activities
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="create-job" disabled />
              <label htmlFor="create-job" className="text-gray-600">
                Create a Job
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="export-leads" disabled />
              <label htmlFor="export-leads" className="text-gray-600">
                Export to Excel
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project management */}
      <Card className="mb-4">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Project management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between pb-2">
            <div className="font-medium">Schedule</div>
            <div>View</div>
          </div>
          <Separator className="mb-3" />
          <div className="flex items-center gap-2 pl-1">
            <Checkbox id="set-baseline" disabled />
            <label htmlFor="set-baseline" className="text-gray-600">
              Set Baseline
            </label>
          </div>

          <Separator className="my-4" />

          <div className="flex justify-between pb-2">
            <div className="font-medium">Daily logs</div>
            <div>View</div>
          </div>

          <Separator className="my-4" />

          <div className="font-semibold mb-2">To-Do&apos;s</div>
          <div className="flex justify-between pb-2">
            <div className="font-medium" />
            <div>View</div>
          </div>
          <Separator className="mb-3" />
          <div className="space-y-2 pl-1">
            <div className="flex items-center gap-2">
              <Checkbox id="assign-users" disabled />
              <label htmlFor="assign-users" className="text-gray-600">
                Assign users
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="global-todos" disabled />
              <label htmlFor="global-todos" className="text-gray-600">
                Global - Can see all To-Do&apos;s
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Các nhóm rút gọn */}
      {[
        "Subs/Vendors",
        "Client contacts",
        "Admin",
        "Change orders",
        "Selections",
        "Specifications",
        "Warranty",
        "Time clock",
      ].map((title) => (
        <div key={title} className="mb-4">
          <div className="flex justify-between pb-2">
            <div className="font-semibold">{title}</div>
            <div>View</div>
          </div>
          <Separator />
        </div>
      ))}

      <div className="space-y-2 pl-1">
        <div className="flex items-center gap-2">
          <Checkbox id="view-other-timesheets" disabled />
          <label htmlFor="view-other-timesheets" className="text-gray-600">
            View other user time sheets
          </label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="adjust-other-timesheets" disabled />
          <label htmlFor="adjust-other-timesheets" className="text-gray-600">
            Adjust other user time sheets
          </label>
        </div>
      </div>
    </TabPanelWrapper>
  );
}
