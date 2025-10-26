import { Filter } from "lucide-react";

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      project: "R 008 - Sable Palm Spec X",
      date: "Oct 23, 2025, 12:54 PM",
      description: "Thang Duong marked a Bill as Ready For Payment",
      detail: "1PRE02 - R 008-Plumbing Labor -2",
      avatar: "T",
      type: "bill"
    },
    {
      id: 2,
      project: "R 008 - Sable Palm Spec X",
      date: "Oct 22, 2025, 11:43 AM",
      description: "Minh Huynh added an attachment to a Daily Log",
      avatar: "M",
      type: "attachment",
      logDate: "10-22-2025",
      attachment: {
        image: "20251022_110231.jpg",
        imageUrl: "/placeholder-house.jpg" // Replace with actual image path
      }
    },
    {
      id: 3,
      project: "R 008 - Sable Palm Spec X",
      date: "Oct 22, 2025, 11:43 AM",
      description: "Minh Huynh added a new Daily Log",
      avatar: "M",
      type: "dailylog",
      logDate: "10-22-2025",
      logContent: [
        "no one is working.",
        "",
        "*need finish metal roofing",
        "*need finish exterior hardies.",
        "plumbing need to pass inspection"
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold text-gray-700">RECENT ACTIVITY FROM YOUR TEAM</h3>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          <span className="text-sm">Filter</span>
        </button>
      </div>

      <div className="space-y-6">
        <h4 className="text-xl font-semibold">Oct 23, 2025</h4>
        
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-semibold">
              {activity.avatar}
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-600 mb-1">
                {activity.project} · {activity.date}
              </div>
              <div className="font-medium mb-2">{activity.description}</div>
              
              {activity.type === "bill" && (
                <div className="bg-gray-50 rounded p-3 text-sm">{activity.detail}</div>
              )}
              
              {activity.type === "attachment" && (
                <div className="bg-gray-50 rounded p-4">
                  <div className="font-semibold mb-3">{activity.logDate}</div>
                  <div className="bg-white rounded border p-3">
                    <img 
                      src={activity.attachment.imageUrl} 
                      alt="Daily log attachment" 
                      className="w-full max-w-xs rounded mb-2"
                    />
                    <div className="text-sm text-gray-600">{activity.attachment.image}</div>
                  </div>
                </div>
              )}
              
              {activity.type === "dailylog" && (
                <div className="bg-gray-50 rounded p-4">
                  <div className="font-semibold mb-3">{activity.logDate}</div>
                  <div className="bg-white rounded border p-4 text-sm space-y-1">
                    {activity.logContent.map((line, index) => (
                      <div key={index} className={line.startsWith("*") ? "text-red-600" : ""}>
                        {line || <br />}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
