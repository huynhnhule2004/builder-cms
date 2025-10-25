"use client";
import { Users, Info } from "lucide-react";
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

const fakeUsers = [
  {
    name: "Duy Pham",
    role: "PM Assistant",
    company: "NO ACCESS",
    login: "INACTIVE",
    autoAccess: "No",
    email: "duyp@amourconstructionllc.com",
    phone: "337-258-0374",
  },
  {
    name: "Jenny Do",
    role: "Bookkeeper",
    company: "NO ACCESS",
    login: "INVITE PENDING",
    autoAccess: "Yes",
    email: "1keptmobile@gmail.com",
    phone: "",
  },
  {
    name: "Kien Huynh",
    role: "Project manager",
    company: "NO ACCESS",
    login: "INVITE PENDING",
    autoAccess: "Yes",
    email: "kienhuynh6886social@gmail.com",
    phone: "",
  },
  {
    name: "Kien2 Huynh",
    role: "Admin R&D",
    company: "NO ACCESS",
    login: "ACTIVE",
    autoAccess: "Yes",
    email: "huynh2tech@gmail.com",
    phone: "",
  },
  {
    name: "Minh Huynh",
    role: "Project manager",
    company: "NO ACCESS",
    login: "INVITE PENDING",
    autoAccess: "Yes",
    email: "huynhminh1020@gmail.com",
    phone: "",
  },
  {
    name: "Minh Huynh",
    role: "PM Assistant",
    company: "NO ACCESS",
    login: "ACTIVE",
    autoAccess: "Yes",
    email: "huynhminh1020@gmail.com",
    phone: "+1 337 344 6086",
  },
  {
    name: "Phi Do",
    role: "Daily Log Access Only",
    company: "NO ACCESS",
    login: "ACTIVE",
    autoAccess: "Yes",
    email: "phido1990@gmail.com",
    phone: "",
  },
  {
    name: "Thang Duong",
    role: "Org owner",
    company: "ACCESS",
    login: "ACTIVE",
    autoAccess: "Yes",
    email: "info@amourconstructionllc.com",
    phone: "337-580-5850",
  },
];

function StatusBadge({ children, color }) {
  const colorMap = {
    red: "bg-red-100 text-red-500 border border-red-200",
    green: "bg-green-100 text-green-600 border border-green-200",
    yellow: "bg-yellow-100 text-yellow-700 border border-yellow-200",
    gray: "bg-gray-100 text-gray-500 border border-gray-200",
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colorMap[color]}`}>{children}</span>
  );
}

export default function InternalUsers() {
  return (
    <div className="p-6">
      {/* Header + Actions */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Users className="mr-2 h-6 w-6 text-[#0B5393]" />
          <h2 className="text-2xl font-bold text-[#22223b]">Internal Users</h2>
        </div>
        <div>
          <Button variant="outline" className="mr-2">
            Export
          </Button>
          <Button variant="outline">
            <span className="flex items-center">
              <svg
                className="h-4 w-4 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
              Filter
            </span>
          </Button>
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#f6f8fc] text-gray-700">
              <TableHead className="px-4 py-3 text-left font-semibold">Name</TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold">Role</TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold">Company Settings</TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold">Login</TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold">Auto Access</TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold">Email</TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold">Phone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fakeUsers.map((u, i) => (
              <TableRow
                key={u.name + i}
                className={
                  i % 2 === 0
                    ? "bg-white"
                    : "bg-[#f6f8fc]"
                }
              >
                <TableCell className="px-4 py-2 text-[#5f3dc4] font-medium cursor-pointer hover:underline">
                  {u.name}
                </TableCell>
                <TableCell className="px-4 py-2">{u.role}</TableCell>
                <TableCell className="px-4 py-2">
                  {u.company === "ACCESS" ? (
                    <StatusBadge color="green">ACCESS</StatusBadge>
                  ) : (
                    <StatusBadge color="red">NO ACCESS</StatusBadge>
                  )}
                </TableCell>
                <TableCell className="px-4 py-2">
                  {u.login === "ACTIVE" && <StatusBadge color="green">ACTIVE</StatusBadge>}
                  {u.login === "INACTIVE" && <StatusBadge color="gray">INACTIVE</StatusBadge>}
                  {u.login === "INVITE PENDING" && (
                    <span className="inline-flex items-center gap-1">
                      <StatusBadge color="yellow">INVITE PENDING</StatusBadge>
                      <Info className="h-4 w-4 text-yellow-500" />
                    </span>
                  )}
                </TableCell>
                <TableCell className="px-4 py-2">{u.autoAccess}</TableCell>
                <TableCell className="px-4 py-2">{u.email}</TableCell>
                <TableCell className="px-4 py-2">
                  {u.phone ? (
                    <a
                      href={`tel:${u.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-[#5f3dc4] hover:underline"
                    >
                      {u.phone}
                    </a>
                  ) : (
                    ""
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Footer */}
      <FixedListFooter/>
    </div>
  );
}