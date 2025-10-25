"use client";
import { Hammer } from "lucide-react";
import { Button } from "@components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@components/ui/table";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@components/ui/select";
import FixedListFooter from "@/components/common/FixedListFooter";

const fakeVendors = [
  {
    name: "A & P Electrical Services",
    division: "Electrician",
    activation: "No Email",
    contact: "",
    trade: "",
    liability: "",
    worker: "",
    cell: "",
    phone: "337-893-0300",
  },
  {
    name: "A 5 Star Plumbing Co",
    division: "Plumber",
    activation: "No Email",
    contact: "",
    trade: "",
    liability: "",
    worker: "",
    cell: "",
    phone: "337-893-0301",
  },
  {
    name: "A C Sales",
    division: "HVAC",
    activation: "Ready for Invite",
    contact: "",
    trade: "",
    liability: "",
    worker: "",
    cell: "",
    phone: "337-258-0374",
  },
  {
    name: "A Cut Above Flooring and Tile Design",
    division: "Flooring",
    activation: "Pending",
    contact: "Brock Lavergne",
    trade: "",
    liability: "",
    worker: "",
    cell: "",
    phone: "337-893-0302",
  },
  {
    name: "A Kitchen By Design",
    division: "Cabinetry",
    activation: "No Email",
    contact: "",
    trade: "",
    liability: "",
    worker: "",
    cell: "",
    phone: "337-893-0303",
  },
  {
    name: "A&M Home Improvement",
    division: "Flooring Painting Cleaner",
    activation: "Ready for Invite",
    contact: "Alex & Marlen",
    trade: "",
    liability: "",
    worker: "",
    cell: "13372511023",
    phone: "337-893-0304",
  },
  {
    name: "A-Macs Plumbing Heating & Repair",
    division: "Plumber",
    activation: "No Email",
    contact: "",
    trade: "",
    liability: "",
    worker: "",
    cell: "337-991-6987",
    phone: "337-893-0305",
  },
  {
    name: "A. Dodge Electric",
    division: "Electrician",
    activation: "No Email",
    contact: "",
    trade: "",
    liability: "",
    worker: "",
    cell: "",
    phone: "337-893-0306",
  },
  {
    name: "A.C.H. Home Improvement LLC",
    division: "Roofing Roofing Installer",
    activation: "Ready for Invite",
    contact: "Alejandro Castro",
    trade: "",
    liability: "",
    worker: "",
    cell: "337-967-2086",
    phone: "337-893-0307",
  },
  {
    name: "A.L.I. Home Improvement Company",
    division: "Siding",
    activation: "No Email",
    contact: "",
    trade: "",
    liability: "",
    worker: "",
    cell: "",
    phone: "337-893-0308",
  },
  {
    name: "AAA Repairs & Painting",
    division: "Painting",
    activation: "Ready for Invite",
    contact: "John Stelly",
    trade: "",
    liability: "",
    worker: "",
    cell: "",
    phone: "337-893-0309",
  },
  {
    name: "AAA Steel Erectors",
    division: "Steel Erector",
    activation: "Pending",
    contact: "Rob Roy",
    trade: "",
    liability: "",
    worker: "",
    cell: "",
    phone: "337-298-7063",
  },
  {
    name: "Abbeville Electric Supply Inc",
    division: "Electric Supply",
    activation: "No Email",
    contact: "",
    trade: "",
    liability: "",
    worker: "",
    cell: "",
    phone: "337-893-0310",
  },
  {
    name: "ABC Supply Co.",
    division: "Doors & Windows Roofing",
    activation: "Ready for Invite",
    contact: "Kaleb Pope",
    trade: "",
    liability: "",
    worker: "",
    cell: "",
    phone: "337-469-1414",
  },
  {
    name: "Abetter Patio Covers & Gutters",
    division: "Gutters",
    activation: "No Email",
    contact: "",
    trade: "",
    liability: "",
    worker: "",
    cell: "",
    phone: "337-893-0311",
  },
];

function StatusBadge({ children, color }) {
  const colorMap = {
    gray: "bg-gray-100 text-gray-500 border border-gray-200",
    blue: "bg-blue-100 text-blue-600 border border-blue-200",
    yellow: "bg-yellow-100 text-yellow-700 border border-yellow-200",
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${colorMap[color]}`}>{children}</span>
  );
}

function getActivationBadge(status) {
  if (status === "No Email")
    return <StatusBadge color="gray">No Email</StatusBadge>;
  if (status === "Ready for Invite")
    return <StatusBadge color="blue">Ready for Invite</StatusBadge>;
  if (status === "Pending")
    return <StatusBadge color="yellow">Pending</StatusBadge>;
  return null;
}

export default function SubsVendorsPage() {
  return (
    <div className="p-6">
      {/* Header + Actions */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Hammer className="mr-2 h-6 w-6 text-[#0B5393]" />
          <h2 className="text-2xl font-bold text-[#22223b]">Subs/vendors</h2>
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
              Filter <span className="ml-1 text-xs text-gray-500">(1)</span>
            </span>
          </Button>
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#f6f8fc] text-gray-700">
              <TableHead className="px-4 py-3 text-left font-semibold min-w-[200px]">Company name</TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold min-w-[180px]">Sub/vendor divisions</TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold min-w-[120px]">Activation</TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold min-w-[160px]">Primary contact</TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold min-w-[180px]">Trade agreement st...</TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold min-w-[120px]">Liability exp.</TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold min-w-[140px]">Worker's comp exp.</TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold min-w-[120px]">Cell</TableHead>
              <TableHead className="px-4 py-3 text-left font-semibold min-w-[120px]">Phone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fakeVendors.map((v, i) => (
              <TableRow
                key={v.name + i}
                className={i % 2 === 0 ? "bg-white" : "bg-[#f6f8fc]"}
              >
                <TableCell className="px-4 py-2 text-[#5f3dc4] font-medium cursor-pointer hover:underline whitespace-nowrap max-w-[200px] overflow-hidden text-ellipsis">
                  {v.name}
                </TableCell>
                <TableCell className="px-4 py-2 whitespace-nowrap">{v.division}</TableCell>
                <TableCell className="px-4 py-2">
                  {getActivationBadge(v.activation)}
                </TableCell>
                <TableCell className="px-4 py-2 whitespace-nowrap">
                  {v.contact}
                </TableCell>
                <TableCell className="px-4 py-2"></TableCell>
                <TableCell className="px-4 py-2"></TableCell>
                <TableCell className="px-4 py-2"></TableCell>
                <TableCell className="px-4 py-2">
                  {v.cell ? (
                    <a
                      href={`tel:${v.cell.replace(/[^0-9+]/g, "")}`}
                      className="text-[#5f3dc4] hover:underline"
                    >
                      {v.cell}
                    </a>
                  ) : ""}
                </TableCell>
                <TableCell className="px-4 py-2">
                  {v.phone ? (
                    <a
                      href={`tel:${v.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-[#5f3dc4] hover:underline"
                    >
                      {v.phone}
                    </a>
                  ) : ""}
                </TableCell>
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