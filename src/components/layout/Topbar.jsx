"use client";
import Link from "next/link";
import { useState } from "react";
import { Bell, Plus, MessageCircle, HelpCircle, Search, User, Users, Hammer, Home, LogOut, Rocket, Spline, Settings, Calendar, MapPin, FileText, Activity, Clipboard, Tag, List, Map as MapIcon, Clock, CheckSquare, Edit, Shield, FileCheck, UserCheck, Image, Video, DollarSign, Receipt, FileSpreadsheet, Package, Inbox, Scale, TrendingUp, Wallet, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import UserProfileDialog from "../ui/UserProfileDialog";
import { Input } from "../ui/input";
import ComposeMessageDialog from "../ui/ComposeMessageDialog";
import NotificationsDropdown from "../ui/NotificationsDropdown";

export default function Topbar() {
  const [openProfile, setOpenProfile] = useState(false);
  const [openSales, setOpenSales] = useState(false);
  const [openJobs, setOpenJobs] = useState(false);
  const [openProjectManagement, setOpenProjectManagement] = useState(false);
  const [openFiles, setOpenFiles] = useState(false);
  const [openMessaging, setOpenMessaging] = useState(false);
  const [openFinancial, setOpenFinancial] = useState(false);
  const [openComposeMessage, setOpenComposeMessage] = useState(false);
  const [openPlusMenu, setOpenPlusMenu] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);

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
              <Link href="/sales/opportunities?tab=list" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenSales(false)}>
                <List className="h-5 w-5" /> List View
              </Link>
              <Link href="/sales/opportunities?tab=activity" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenSales(false)}>
                <Activity className="h-5 w-5" /> Activity View
              </Link>
              <Link href="/sales/opportunities?tab=calendar" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenSales(false)}>
                <Calendar className="h-5 w-5" /> Activity Calendar
              </Link>
              <Link href="/sales/opportunities?tab=templates" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenSales(false)}>
                <Settings className="h-5 w-5" /> Activity Templates
              </Link>
              <Link href="/sales/opportunities?tab=proposals" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenSales(false)}>
                <FileText className="h-5 w-5" /> Lead Proposals
              </Link>
              <Link href="/sales/opportunities?tab=proposal-templates" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenSales(false)}>
                <FileCheck className="h-5 w-5" /> Proposal Templates
              </Link>
              <Link href="/sales/opportunities?tab=map" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenSales(false)}>
                <MapPin className="h-5 w-5" /> Map
              </Link>
            </PopoverContent>
          </Popover>
          
          <Popover open={openJobs} onOpenChange={setOpenJobs}>
            <PopoverTrigger asChild>
              <button className="transition hover:text-white hover:underline underline-offset-4">
                Jobs
              </button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-2 bg-white shadow-lg rounded-lg">
              <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenJobs(false)}>
                <Clipboard className="h-5 w-5" /> Summary
              </Link>
              <Link href="/jobs/info" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenJobs(false)}>
                <FileText className="h-5 w-5" /> Job Info
              </Link>
              <Link href="/jobs/price-summary" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenJobs(false)}>
                <Tag className="h-5 w-5" /> Job Price Summary
              </Link>
              <Link href="/jobs/list" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenJobs(false)}>
                <List className="h-5 w-5" /> Jobs List
              </Link>
              <Link href="/jobs/list?view=map" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenJobs(false)}>
                <MapIcon className="h-5 w-5" /> Jobs Map
              </Link>
            </PopoverContent>
          </Popover>
          
          <Popover open={openProjectManagement} onOpenChange={setOpenProjectManagement}>
            <PopoverTrigger asChild>
              <button className="transition hover:text-white hover:underline underline-offset-4">
                Project Management
              </button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-2 bg-white shadow-lg rounded-lg">
              <Link href="/project-management/schedule" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenProjectManagement(false)}>
                <Calendar className="h-5 w-5" /> Schedule
              </Link>
              <Link href="/project-management/daily-logs" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenProjectManagement(false)}>
                <FileText className="h-5 w-5" /> Daily Logs
              </Link>
              <Link href="/project-management/todos" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenProjectManagement(false)}>
                <CheckSquare className="h-5 w-5" /> To-Do's
              </Link>
              <Link href="/project-management/change-orders" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenProjectManagement(false)}>
                <Edit className="h-5 w-5" /> Change Orders
              </Link>
              <Link href="/project-management/selections" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenProjectManagement(false)}>
                <Tag className="h-5 w-5" /> Selections
              </Link>
              <Link href="/project-management/warranties" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenProjectManagement(false)}>
                <Shield className="h-5 w-5" /> Warranties
              </Link>
              <Link href="/project-management/time-clock" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenProjectManagement(false)}>
                <Clock className="h-5 w-5" /> Time Clock
              </Link>
              <Link href="/project-management/specifications" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenProjectManagement(false)}>
                <FileCheck className="h-5 w-5" /> Specifications
              </Link>
              <Link href="/project-management/client-updates" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenProjectManagement(false)}>
                <UserCheck className="h-5 w-5" /> Client Updates
              </Link>
            </PopoverContent>
          </Popover>
          
          <Popover open={openFiles} onOpenChange={setOpenFiles}>
            <PopoverTrigger asChild>
              <button className="transition hover:text-white hover:underline underline-offset-4">
                Files
              </button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-2 bg-white shadow-lg rounded-lg">
              <Link href="/files/documents" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenFiles(false)}>
                <FileText className="h-5 w-5" /> Documents
              </Link>
              <Link href="/files/photos" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenFiles(false)}>
                <Image className="h-5 w-5" /> Photos
              </Link>
              <Link href="/files/videos" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenFiles(false)}>
                <Video className="h-5 w-5" /> Videos
              </Link>
            </PopoverContent>
          </Popover>
          
          <Popover open={openMessaging} onOpenChange={setOpenMessaging}>
            <PopoverTrigger asChild>
              <button className="transition hover:text-white hover:underline underline-offset-4">
                Messaging
              </button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-2 bg-white shadow-lg rounded-lg">
              <Link href="/messaging/comments" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenMessaging(false)}>
                <MessageCircle className="h-5 w-5" /> Comments
              </Link>
              <Link href="/messaging/messages" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenMessaging(false)}>
                <FileText className="h-5 w-5" /> Messages
              </Link>
              <Link href="/messaging/rfis" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenMessaging(false)}>
                <HelpCircle className="h-5 w-5" /> RFIs
              </Link>
              <Link href="/messaging/surveys" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenMessaging(false)}>
                <Clipboard className="h-5 w-5" /> Surveys
              </Link>
            </PopoverContent>
          </Popover>
          
          <Popover open={openFinancial} onOpenChange={setOpenFinancial}>
            <PopoverTrigger asChild>
              <button className="transition hover:text-white hover:underline underline-offset-4">
                Financial
              </button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-2 bg-white shadow-lg rounded-lg">
              <Link href="/financial/bids" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenFinancial(false)}>
                <Clipboard className="h-5 w-5" /> Bids
              </Link>
              <Link href="/financial/estimate" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenFinancial(false)}>
                <FileSpreadsheet className="h-5 w-5" /> Estimate
              </Link>
              <Link href="/financial/purchase-orders" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenFinancial(false)}>
                <Package className="h-5 w-5" /> Purchase Orders
              </Link>
              <Link href="/financial/bills" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenFinancial(false)}>
                <Receipt className="h-5 w-5" /> Bills
              </Link>
              <Link href="/financial/budget" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenFinancial(false)}>
                <Scale className="h-5 w-5" /> Budget
              </Link>
              <Link href="/financial/job-costing-budget" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenFinancial(false)}>
                <DollarSign className="h-5 w-5" /> Job Costing Budget
              </Link>
              <Link href="/financial/cashback-discounts" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenFinancial(false)}>
                <Wallet className="h-5 w-5" /> Cashback & Discounts
              </Link>
              <Link href="/financial/cost-inbox" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenFinancial(false)}>
                <Inbox className="h-5 w-5" /> Cost Inbox
              </Link>
              <Link href="/financial/invoices" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800" onClick={() => setOpenFinancial(false)}>
                <FileText className="h-5 w-5" /> Invoices
              </Link>
            </PopoverContent>
          </Popover>

        </nav>

        <div className="ml-auto relative w-[420px] max-w-[45vw] hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
          <Input
            className="h-10 w-full rounded-lg bg-white/20 pl-11 pr-4 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-white/40 transition"
            placeholder="Search"
          />
        </div>

        <div className="ml-4 flex items-center gap-4">
          <Popover open={openPlusMenu} onOpenChange={setOpenPlusMenu}>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="bg-white/10 hover:bg-white/20 text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow transition">
                <Plus className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-56 p-2 bg-white shadow-lg rounded-lg">
              <button 
                onClick={() => {
                  setOpenComposeMessage(true);
                  setOpenPlusMenu(false);
                }}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition text-gray-800 w-full text-left"
              >
                <Mail className="h-5 w-5" /> Message
              </button>
            </PopoverContent>
          </Popover>
          <Popover open={openNotifications} onOpenChange={setOpenNotifications}>
            <PopoverTrigger asChild>
              <button className="relative">
                <Bell className="h-6 w-6 opacity-90 hover:opacity-100 transition cursor-pointer" />
              </button>
            </PopoverTrigger>
            <PopoverContent align="end" className="p-0 border-0 shadow-none">
              <NotificationsDropdown />
            </PopoverContent>
          </Popover>
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
      <ComposeMessageDialog open={openComposeMessage} onOpenChange={setOpenComposeMessage} />
    </header>
  );
}