"use client";
import Link from "next/link";
import { useState } from "react";
import { Bell, Plus, MessageCircle, HelpCircle, Search, User, Users, Hammer, Home, LogOut, Rocket, Spline, Settings, Calendar, MapPin, FileText, Activity } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import UserProfileDialog from "../ui/UserProfileDialog";
import { Input } from "../ui/input";

export default function Topbar() {
  const [openProfile, setOpenProfile] = useState(false);
  const [openSales, setOpenSales] = useState(false);

  return (
    <header className="bg-[#0B5393] text-white/95 shadow h-16">
      <div className="mx-auto flex h-full items-center gap-6 px-6 max-w-screen-2xl">
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/20 font-bold text-lg tracking-wide shadow">b</div>

        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          <Popover open={openSales} onOpenChange={setOpenSales}>
            <PopoverTrigger asChild>
              <button className="transition hover:text-white hover:underline underline-offset-4">
                Sales
              </button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-2 bg-white shadow-lg rounded-lg">
              <Link href="/sales/opportunities" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800">
                <Settings className="h-5 w-5" /> Lead Opportunities
              </Link>
              <Link href="/sales/activities" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800">
                <Activity className="h-5 w-5" /> Lead Activities
              </Link>
              <Link href="/sales/proposals" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800">
                <FileText className="h-5 w-5" /> Lead Proposals
              </Link>
              <Link href="/sales/calendar" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800">
                <Calendar className="h-5 w-5" /> Lead Activity Calendar
              </Link>
              <Link href="/sales/map" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800">
                <MapPin className="h-5 w-5" /> Lead Map
              </Link>
            </PopoverContent>
          </Popover>
          <Link className="transition hover:text-white hover:underline underline-offset-4" href="#">Jobs</Link>
          <Link className="transition hover:text-white hover:underline underline-offset-4" href="#">Project Management</Link>
          <Link className="transition hover:text-white hover:underline underline-offset-4" href="#">Files</Link>
          <Link className="transition hover:text-white hover:underline underline-offset-4" href="#">Messaging</Link>
          <Link className="transition hover:text-white hover:underline underline-offset-4" href="#">Financial</Link>
        </nav>

        <div className="ml-auto relative w-[420px] max-w-[45vw] hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
          <Input
            className="h-10 w-full rounded-lg bg-white/20 pl-11 pr-4 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-white/40 transition"
            placeholder="Search"
          />
        </div>

        <div className="ml-4 flex items-center gap-4">
          <Button variant="ghost" className="bg-white/10 hover:bg-white/20 text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow transition">
            <Plus className="h-5 w-5" /> <span className="font-semibold">New</span>
          </Button>
          <Bell className="h-6 w-6 opacity-90 hover:opacity-100 transition cursor-pointer" />
          <Link href="/chat">
            <MessageCircle className="h-6 w-6 opacity-90 hover:opacity-100 transition cursor-pointer" />
          </Link>
          {/* User Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="p-0 rounded-full bg-white/10 hover:bg-white/20">
                <User className="h-6 w-6 opacity-90 hover:opacity-100 transition cursor-pointer" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-56 p-2 bg-white shadow-lg rounded-lg">
              <Link href="/internal-users" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800">
                <Users className="h-5 w-5" /> Internal Users
              </Link>
              <Link href="/sub" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800">
                <Hammer className="h-5 w-5" /> Subs/Vendors
              </Link>
              <Link href="/client-contacts" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800">
                <Home className="h-5 w-5" /> Client Contacts
              </Link>
            </PopoverContent>
          </Popover>
          <HelpCircle className="h-6 w-6 opacity-90 hover:opacity-100 transition cursor-pointer" />
          {/* User Avatar Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <div className="ml-2 grid h-9 w-9 place-items-center rounded-full bg-white/30 text-base font-semibold shadow cursor-pointer select-none">
                KH
              </div>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-72 p-0 bg-white shadow-lg rounded-xl">
              <div className="flex flex-col py-2">
                <div
                  className="flex items-center gap-3 px-4 py-3 border-b cursor-pointer hover:bg-gray-100 transition"
                  onClick={() => setOpenProfile(true)}
                >
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-200 text-base font-semibold text-blue-900 shadow">
                    KH
                  </div>
                  <div className="font-semibold text-gray-900 text-[15px]">Kien2 Huynh</div>
                </div>
                <Link href="/integrations" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition text-gray-800 text-[15px]">
                  <Spline className="h-5 w-5" /> Integrations <span className="ml-auto text-xs">↗</span>
                </Link>
                <Link href="/services" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition text-gray-800 text-[15px]">
                  <Rocket className="h-5 w-5" /> Additional Services <span className="ml-auto text-xs">↗</span>
                </Link>
                <button className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition text-gray-800 text-[15px] border-t mt-1">
                  <LogOut className="h-5 w-5" /> Logout
                </button>
              </div>
            </PopoverContent>
          </Popover>
          <UserProfileDialog open={openProfile} onOpenChange={setOpenProfile} />
        </div>
      </div>
    </header>
  );
}