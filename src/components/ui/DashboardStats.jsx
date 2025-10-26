import { ThumbsUp } from "lucide-react";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
      {/* Past Due */}
      <div className="bg-white rounded-lg border p-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">PAST DUE FOR YOUR TEAM</h3>
        <div className="flex items-center justify-between">
          <span className="text-blue-600 hover:underline cursor-pointer">Bills</span>
          <span className="bg-red-100 text-red-600 rounded-full px-3 py-1 text-sm">1</span>
        </div>
      </div>

      {/* Due Today */}
      <div className="bg-white rounded-lg border p-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">DUE TODAY</h3>
        <div className="flex flex-col items-center justify-center py-8">
          <ThumbsUp className="w-16 h-16 text-gray-300 mb-4" />
          <p className="text-gray-600 text-sm">You have nothing due today.</p>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-white rounded-lg border p-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">ACTION ITEMS</h3>
        <div className="flex flex-col items-center justify-center py-8">
          <ThumbsUp className="w-16 h-16 text-gray-300 mb-4" />
          <p className="text-gray-600 text-sm text-center">Nothing requires your attention at the moment.</p>
        </div>
      </div>
    </div>
  );
}
