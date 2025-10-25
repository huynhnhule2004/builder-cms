"use client";
import { useState } from "react";
import { X, Bold, Italic, Underline, Strikethrough, AlignLeft, AlignCenter, AlignRight, AlignJustify, Link as LinkIcon, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";

export default function ComposeMessageDialog({ open, onOpenChange }) {
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-5xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">C 005 - Uniq Nail Lounge & Spa</div>
              <DialogTitle className="text-2xl font-bold text-gray-900">Compose New Message</DialogTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="px-6 py-6">
          <h3 className="text-lg font-semibold mb-6">Compose a Message</h3>

          {/* To Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              To <span className="text-red-500">*</span>
            </label>
            <Input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full"
              placeholder=""
            />
            <button className="flex items-center gap-2 mt-2 text-purple-600 hover:text-purple-700 text-sm font-medium">
              <Plus className="h-4 w-4 bg-purple-600 text-white rounded-full" />
              Add email
            </button>
          </div>

          {/* CC Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">CC</label>
            <Input
              value={cc}
              onChange={(e) => setCc(e.target.value)}
              className="w-full"
              placeholder=""
            />
            <button className="flex items-center gap-2 mt-2 text-purple-600 hover:text-purple-700 text-sm font-medium">
              <Plus className="h-4 w-4 bg-purple-600 text-white rounded-full" />
              Add email
            </button>
          </div>

          {/* BCC Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">BCC</label>
            <Input
              value={bcc}
              onChange={(e) => setBcc(e.target.value)}
              className="w-full"
              placeholder=""
            />
            <button className="flex items-center gap-2 mt-2 text-purple-600 hover:text-purple-700 text-sm font-medium">
              <Plus className="h-4 w-4 bg-purple-600 text-white rounded-full" />
              Add email
            </button>
          </div>

          {/* Subject Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Subject</label>
            <Input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full"
              placeholder=""
            />
          </div>

          {/* Body Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Body</label>
            <div className="border rounded-lg">
              <Textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full min-h-[200px] border-0 resize-none focus-visible:ring-0"
                placeholder=""
              />
              {/* Toolbar */}
              <div className="border-t px-3 py-2 flex items-center gap-1 bg-gray-50 rounded-b-lg">
                <select className="text-sm border-0 bg-transparent focus:outline-none">
                  <option>Font</option>
                </select>
                <span className="text-gray-300 mx-1">|</span>
                <select className="text-sm border-0 bg-transparent focus:outline-none">
                  <option>Size</option>
                </select>
                <span className="text-gray-300 mx-1">|</span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Bold className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Italic className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Underline className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Strikethrough className="h-4 w-4" />
                </Button>
                <span className="text-gray-300 mx-1">|</span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <AlignLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <AlignCenter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <AlignRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <AlignJustify className="h-4 w-4" />
                </Button>
                <span className="text-gray-300 mx-1">|</span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Attachments */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Attachments</label>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <Button variant="outline" className="px-6">
              Save as Draft
            </Button>
            <Button className="px-6 bg-purple-600 hover:bg-purple-700 text-white">
              Send & Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
