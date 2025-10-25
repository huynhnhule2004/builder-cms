"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const jobsData = [
  { id: 1, color: "#8B4513", name: "C 005 - Uniq Nail Lounge & Spa", street: "611 Settlers Trace", city: "Lafayette", state: "LA", zip: "70508", projectManager: "Thang Duong", clients: "Jenny Do", clientPhone: "" },
  { id: 2, color: "#2F4F2F", name: "C 005-0 Uniq Shell Building", street: "", city: "Lafayette", state: "LA", zip: "70508", projectManager: "", clients: "", clientPhone: "" },
  { id: 3, color: "#696969", name: "C 006 - iNail Supply", street: "106 William O Stutes Street", city: "Lafayette", state: "LA", zip: "70506", projectManager: "", clients: "", clientPhone: "" },
  { id: 4, color: "#8B4513", name: "N 002 - Mahavairocana", street: "912 Rue du Belier", city: "Lafayette", state: "LA", zip: "70506", projectManager: "", clients: "", clientPhone: "" },
  { id: 5, color: "#90EE90", name: "R 003 - Jenny Do", street: "310 Alexander Palm Ave", city: "Broussard", state: "LA", zip: "70518", projectManager: "Duy Pham", clients: "Jenny Do", clientPhone: "" },
  { id: 6, color: "#008000", name: "R 004 - Thang Duong", street: "209 Brookshire Gardens Dr", city: "Lafayette", state: "LA", zip: "70503", projectManager: "", clients: "", clientPhone: "" },
  { id: 7, color: "#4682B4", name: "R 005 - Thuy Le", street: "208 Wind Haven Lane", city: "Lafayette", state: "LA", zip: "70506", projectManager: "", clients: "", clientPhone: "" },
  { id: 8, color: "#8B4513", name: "R 008 - Sable Palm Spec X", street: "111 Travellers Palm Way", city: "Broussard", state: "LA", zip: "70518", projectManager: "", clients: "Thang Duong", clientPhone: "3375805850" },
];

export default function JobsTable() {
  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="w-12">
              <Checkbox />
            </TableHead>
            <TableHead className="w-16">Job Color</TableHead>
            <TableHead className="cursor-pointer hover:bg-gray-200">
              Job Name <span className="ml-1">↕</span>
            </TableHead>
            <TableHead>Street Address</TableHead>
            <TableHead>City</TableHead>
            <TableHead>State</TableHead>
            <TableHead>Zip Code</TableHead>
            <TableHead>Project Manager</TableHead>
            <TableHead>Clients</TableHead>
            <TableHead>Client Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobsData.map((job) => (
            <TableRow key={job.id} className="hover:bg-gray-50">
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: job.color }}></div>
              </TableCell>
              <TableCell>
                <Link href={`/jobs/${job.id}`} className="text-blue-600 hover:underline font-medium">
                  {job.name}
                </Link>
              </TableCell>
              <TableCell>{job.street}</TableCell>
              <TableCell>{job.city}</TableCell>
              <TableCell>{job.state}</TableCell>
              <TableCell>{job.zip}</TableCell>
              <TableCell>{job.projectManager}</TableCell>
              <TableCell>
                {job.clients && (
                  <Link href="#" className="text-blue-600 hover:underline">
                    {job.clients}
                  </Link>
                )}
              </TableCell>
              <TableCell>{job.clientPhone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
