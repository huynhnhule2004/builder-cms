import SalesStats from "@/components/ui/sales/SalesStats";
import SalesChart from "@/components/ui/sales/SalesChart";
import RecentSales from "@/components/ui/sales/RecentSales";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function SalesPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Sales Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>
      </div>
      
      <SalesStats />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <SalesChart />
        <RecentSales />
      </div>
    </div>
  );
}
