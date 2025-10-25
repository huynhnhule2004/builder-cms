"use client";
import React from "react";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../ui/select";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";
import { Toggle } from "../../ui/toggle";
import {
  Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight,
  List, Link2
} from "lucide-react";

export default function RichTextEditor({ value, onChange }) {
  const ref = React.useRef(null);

  const exec = (cmd, arg = null) => {
    if (!ref.current) return;
    ref.current.focus();
    document.execCommand(cmd, false, arg);
  };

  const onInput = () => {
    if (!ref.current) return;
    onChange?.(ref.current.innerHTML);
  };

  return (
    <div className="border rounded-md overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 p-2 bg-muted/30">
        <Select onValueChange={(v) => exec("fontName", v)}>
          <SelectTrigger className="h-8 w-[140px]">
            <SelectValue placeholder="Font" />
          </SelectTrigger>
          <SelectContent>
            {["Arial", "Tahoma", "Times New Roman", "Courier New", "Georgia", "Inter"].map((f) => (
              <SelectItem key={f} value={f}>{f}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(v) => exec("fontSize", v)}>
          <SelectTrigger className="h-8 w-[110px]">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            {[1,2,3,4,5,6,7].map((n) => (
              <SelectItem key={n} value={String(n)}>Size {n}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Separator orientation="vertical" className="h-6" />

        <Toggle size="sm" onClick={() => exec("bold")} aria-label="Bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle size="sm" onClick={() => exec("italic")} aria-label="Italic">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle size="sm" onClick={() => exec("underline")} aria-label="Underline">
          <Underline className="h-4 w-4" />
        </Toggle>

        <Separator orientation="vertical" className="h-6" />

        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => exec("justifyLeft")} title="Align left">
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => exec("justifyCenter")} title="Align center">
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => exec("justifyRight")} title="Align right">
          <AlignRight className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => exec("insertUnorderedList")} title="Bulleted list">
          <List className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost" size="icon" className="h-8 w-8"
          onClick={() => {
            const url = prompt("Insert link URL");
            if (url) exec("createLink", url);
          }}
          title="Insert link"
        >
          <Link2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Editor */}
      <div
        ref={ref}
        className="min-h-[160px] p-3 outline-none"
        contentEditable
        suppressContentEditableWarning
        onInput={onInput}
        dangerouslySetInnerHTML={{ __html: value || "" }}
      />
    </div>
  );
}
