"use client";
import { Button } from "@components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@components/ui/table";
import FixedListFooter from "@/components/common/FixedListFooter";
import { useState } from "react";

const fakeContacts = [
  {
    name: "Asian Supermarket Renovation",
    status: "Inactive",
    primaryPhone: "",
    cellPhone: "+13377810727",
    address: "119 Tucket Drive",
    city: "Lafayette",
    state: "LA",
    zip: "70503",
  },
  {
    name: "HAU HUYNH",
    status: "Pending",
    primaryPhone: "337-244-8379",
    cellPhone: "337-244-8379",
    address: "521 DUB LANE",
    city: "LAKE CHARLES",
    state: "LA",
    zip: "70611",
  },
  {
    name: "Jenny Do",
    status: "Active",
    primaryPhone: "",
    cellPhone: "+19858559658",
    address: "310 Alexander Palm",
    city: "Broussard",
    state: "LA",
    zip: "70518",
  },
  {
    name: "Minh Pham",
    status: "Active",
    primaryPhone: "",
    cellPhone: "+13373267740",
    address: "207 Queenstown Avenue",
    city: "Youngsville",
    state: "LA",
    zip: "70592",
  },
  {
    name: "Owner (Tinh Do Kids Playground)",
    status: "Inactive",
    primaryPhone: "508-963-3299",
    cellPhone: "+15089633299",
    address: "4701 Ambassador Caffery...",
    city: "Lafayette",
    state: "LA",
    zip: "70508",
  },
  {
    name: "Shawn Xiaoyuan Tian",
    status: "Active",
    primaryPhone: "",
    cellPhone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  },
  {
    name: "Sue Pham",
    status: "Inactive",
    primaryPhone: "",
    cellPhone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  },
  {
    name: "Thang Duong",
    status: "Inactive",
    primaryPhone: "337-580-5850",
    cellPhone: "337-580-5850",
    address: "106 William O Stutes Street",
    city: "Lafayette",
    state: "LA",
    zip: "70506",
  },
  {
    name: "Thang Duong",
    status: "Pending",
    primaryPhone: "3375805850",
    cellPhone: "+13375805850",
    address: "106 William O Stutes St",
    city: "Lafayette",
    state: "LA",
    zip: "70506",
  },
  {
    name: "Tin Ngo",
    status: "Active",
    primaryPhone: "337-451-9888",
    cellPhone: "337-451-9888",
    address: "5520 Johnston St, Suite G1",
    city: "Lafayette",
    state: "LA",
    zip: "70503",
  },
];

function StatusBadge({ status }) {
  const colorMap = {
    Active: "bg-green-100 text-green-700 border border-green-200",
    Pending: "bg-yellow-100 text-yellow-700 border border-yellow-200",
    Inactive: "bg-gray-100 text-gray-500 border border-gray-200",
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colorMap[status] || ""}`}>
      {status}
    </span>
  );
}

export default function ClientContactsPage() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <span className="mr-2">
          <svg width="24" height="24" fill="none" stroke="#0B5393" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
          </svg>
        </span>
        <h2 className="text-3xl font-bold text-[#22223b]">Client Contacts</h2>
      </div>
      {/* No Contacts Alert */}
      <div className="mb-4 rounded border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700">
        <div className="font-semibold mb-1">No Contacts</div>
        <div className="text-sm">
          You don't have access to create Contacts. Contact an administrator of this account for details.
        </div>
      </div>
      {/* Filter Button */}
      <div className="flex justify-end mb-2">
        <Button variant="outline" onClick={() => setFilterOpen(!filterOpen)}>
          <span className="flex items-center">
            <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
            Filter
          </span>
        </Button>
      </div>
      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#f6f8fc] text-gray-700">
              <TableHead className="px-4 py-3 min-w-[40px]">
                <input type="checkbox" />
              </TableHead>
              <TableHead className="px-4 py-3 min-w-[200px]">Display Name</TableHead>
              <TableHead className="px-4 py-3 min-w-[120px]">Activation S...</TableHead>
              <TableHead className="px-4 py-3 min-w-[140px]">Primary Phone</TableHead>
              <TableHead className="px-4 py-3 min-w-[140px]">Cell Phone</TableHead>
              <TableHead className="px-4 py-3 min-w-[200px]">Street Address</TableHead>
              <TableHead className="px-4 py-3 min-w-[120px]">City</TableHead>
              <TableHead className="px-4 py-3 min-w-[80px]">State</TableHead>
              <TableHead className="px-4 py-3 min-w-[100px]">Zip Code</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fakeContacts.map((c, i) => (
              <TableRow key={c.name + i} className={i % 2 === 0 ? "bg-white" : "bg-[#f6f8fc]"}>
                <TableCell className="px-4 py-2">
                  <input type="checkbox" />
                </TableCell>
                <TableCell className="px-4 py-2 text-[#5f3dc4] font-medium cursor-pointer hover:underline whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis">
                  {c.name}
                </TableCell>
                <TableCell className="px-4 py-2">
                  <StatusBadge status={c.status} />
                </TableCell>
                <TableCell className="px-4 py-2 whitespace-nowrap">{c.primaryPhone}</TableCell>
                <TableCell className="px-4 py-2 whitespace-nowrap">{c.cellPhone}</TableCell>
                <TableCell className="px-4 py-2 whitespace-nowrap">{c.address}</TableCell>
                <TableCell className="px-4 py-2 whitespace-nowrap">{c.city}</TableCell>
                <TableCell className="px-4 py-2 whitespace-nowrap">{c.state}</TableCell>
                <TableCell className="px-4 py-2 whitespace-nowrap">{c.zip}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Footer */}
      <FixedListFooter />
    </div>
  );
}
