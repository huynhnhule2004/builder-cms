"use client";
import React from "react";
import TabPanelWrapper from "./TabPanelWrapper";
import { Checkbox } from "../../ui/checkbox";
import { Label } from "../../ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../ui/tooltip";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Separator } from "../../ui/separator";
import { Info, ImagePlus, Trash2 } from "lucide-react";
import RichTextEditor from "./RichTextEditor";

export default function MessagingTab() {
  const [ooo, setOoo] = React.useState(false);
  const [signatureHtml, setSignatureHtml] = React.useState("");
  const [file, setFile] = React.useState(null);
  const [preview, setPreview] = React.useState(null);

  const onFile = (e) => {
    const f = e.target.files?.[0];
    setFile(f || null);
    if (f) {
      const url = URL.createObjectURL(f);
      setPreview(url);
    } else {
      setPreview(null);
    }
  };

  const clearImage = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <TabPanelWrapper>
      <div className="font-semibold text-lg mb-4">Messaging</div>

      {/* Message Preferences */}
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Message Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <Checkbox id="ooo" checked={ooo} onCheckedChange={(v) => setOoo(Boolean(v))} />
            <div>
              <Label htmlFor="ooo" className="cursor-pointer">Set Out of Office Status</Label>
              <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-3.5 w-3.5" />
                    </TooltipTrigger>
                    <TooltipContent side="top" align="start">
                      Bật tuỳ chọn này để hiển thị trạng thái “đang vắng mặt” trong tin nhắn.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                Khi bật, hệ thống có thể tự gửi trả lời tự động.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Message Signature */}
      <div className="mb-2 font-medium">Message Signature</div>
      <RichTextEditor value={signatureHtml} onChange={setSignatureHtml} />

      <Separator className="my-6" />

      {/* Signature Image */}
      <div className="mb-2 font-medium">Message Signature Image</div>
      <Card>
        <CardContent className="pt-6">
          <div className="grid gap-3 md:grid-cols-[260px_1fr]">
            {/* Preview box */}
            <div className="border rounded-md h-[160px] grid place-items-center bg-muted/30 overflow-hidden">
              {preview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={preview} alt="signature" className="max-h-full max-w-full object-contain" />
              ) : (
                <div className="flex flex-col items-center text-muted-foreground">
                  <ImagePlus className="h-8 w-8 mb-1" />
                  <span className="text-sm">No image selected</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <Input type="file" accept="image/*" onChange={onFile} className="w-60" />
                {preview && (
                  <Button type="button" variant="outline" size="sm" onClick={clearImage}>
                    <Trash2 className="h-4 w-4 mr-1" />
                    Remove
                  </Button>
                )}
              </div>
              <div className="text-xs text-muted-foreground">
                PNG/JPG, &lt; 2MB. Sẽ được chèn dưới chữ ký.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* (Tuỳ chọn) nút Save riêng cho tab này */}
      {/* <div className="mt-6 flex justify-end">
        <Button onClick={() => console.log({ ooo, signatureHtml, file })}>Save changes</Button>
      </div> */}
    </TabPanelWrapper>
  );
}
