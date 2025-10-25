"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

export default function ManageSavedViewsDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-5xl p-0">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-2xl font-bold">Manage Saved Views</DialogTitle>
          <DialogClose asChild>
          </DialogClose>
        </DialogHeader>
        <div className="px-6 pb-6">
          <div className="mb-4">
            <div className="font-semibold mb-2">Manage Saved Views</div>
            <div className="text-sm text-gray-500">
              Manage your grid views and select your default view for the Internal Users page.
            </div>
          </div>
          <div className="bg-slate-100 rounded-lg p-4 mb-6">
            <div className="font-semibold mb-2">Update Current View</div>
            <div className="text-sm text-gray-500 mb-2">
              Change the current columns displayed on the page. This will not affect your currently selected saved view settings.
            </div>
            <div className="mb-2">
              <label className="block text-xs font-medium mb-1">Columns</label>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white border rounded px-2 py-1 text-xs">Name</span>
                <span className="bg-white border rounded px-2 py-1 text-xs">Role</span>
                <span className="bg-white border rounded px-2 py-1 text-xs">Company Settings</span>
                <span className="bg-white border rounded px-2 py-1 text-xs">Login</span>
                <span className="bg-white border rounded px-2 py-1 text-xs">Auto Access</span>
                <span className="bg-white border rounded px-2 py-1 text-xs">Email</span>
                <span className="bg-white border rounded px-2 py-1 text-xs">Phone</span>
              </div>
            </div>
            <button className="mt-2 px-4 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600">
              Apply View
            </button>
          </div>
          <div className="mb-6">
            <div className="font-semibold mb-2">Your Saved Views</div>
            <div className="flex items-center gap-2 bg-white border rounded-lg p-4">
              <svg width="32" height="32" fill="none"><rect width="32" height="32" rx="8" fill="#F3F4F6"/><rect x="8" y="8" width="16" height="20" rx="2" fill="#fff" stroke="#D1D5DB" strokeWidth="2"/><rect x="12" y="12" width="8" height="2" rx="1" fill="#D1D5DB"/><rect x="12" y="16" width="8" height="2" rx="1" fill="#D1D5DB"/></svg>
              <div>
                <div className="font-medium">You have no saved views</div>
                <div className="text-sm text-gray-500">
                  Saved views let you configure what information is shown on this page.{" "}
                  <span className="text-purple-600 cursor-pointer hover:underline">Add a new saved view</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Shared Saved Views</div>
            <div className="bg-white border rounded-lg p-4 flex items-center gap-3">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">Default View</span>
              <span className="text-sm text-gray-700">Standard View</span>
              <span className="ml-auto text-gray-400 text-2xl">…</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
