"use client";
import React from "react";
import TabPanelWrapper from "./TabPanelWrapper";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { Separator } from "../../ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../../ui/dialog";
import { Input } from "../../ui/input";
import { Info, ShieldCheck } from "lucide-react";

export default function SecurityTab() {
  const [username, setUsername] = React.useState("huynh2tech@gmail.com");
  const [status] = React.useState("Active"); // hoặc "Suspended"
  const [openEdit, setOpenEdit] = React.useState(false);
  const [temp, setTemp] = React.useState(username);

  const onSave = () => {
    setUsername(temp.trim());
    setOpenEdit(false);
    // TODO: gọi API cập nhật ở đây
  };

  const statusBadge =
    status === "Active" ? (
      <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
        Active
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="ml-1.5 h-3.5 w-3.5" />
            </TooltipTrigger>
            <TooltipContent>Account can sign in.</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Badge>
    ) : (
      <Badge variant="destructive">{status}</Badge>
    );

  return (
    <TabPanelWrapper>
      <div className="text-lg font-semibold mb-4">Security &amp; Login</div>

      <Card>
        <CardHeader className="flex-row items-center justify-between pb-2">
          <CardTitle className="text-base">Login Access</CardTitle>
          <Button variant="outline" size="sm" onClick={() => setOpenEdit(true)}>Edit username</Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {/* Status row */}
            <div>
              <div className="text-sm font-medium mb-1">Login Access</div>
              {statusBadge}
            </div>

            <Separator />

            {/* Username row */}
            <div>
              <div className="text-sm font-medium mb-1">Username</div>
              <div className="text-sm text-foreground">{username}</div>
            </div>

            {/* Optional: 2FA */}
            <Separator />
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-medium mb-1 flex items-center gap-2">
                  Two-factor authentication
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>Protect sign-in with an extra code.</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="text-sm text-muted-foreground">
                  Add an authenticator app for better security.
                </p>
              </div>
              <Button variant="secondary" size="sm">
                <ShieldCheck className="h-4 w-4 mr-2" />
                Set up 2FA
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Edit Username Dialog */}
      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent className="sm:max-w-[480px]">
          <DialogHeader>
            <DialogTitle>Edit username</DialogTitle>
          </DialogHeader>
          <div className="space-y-2">
            <label className="text-sm font-medium">Username (email)</label>
            <Input
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
              placeholder="name@example.com"
            />
            <p className="text-xs text-muted-foreground">
              This is the email used to sign in and receive account emails.
            </p>
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setOpenEdit(false)}>Cancel</Button>
            <Button onClick={onSave} disabled={!temp.trim()}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TabPanelWrapper>
  );
}
