export default function WeekAgenda() {
  const agendaItems = [
    {
      day: "Sunday",
      date: "26",
      month: "Oct 2025",
      events: []
    },
    {
      day: "Monday",
      date: "27",
      month: "Oct 2025",
      events: [
        { title: "Brick Fireplace", time: "all day" },
        { title: "Final Grading", time: "all day" },
        { title: "Order Driveway & ...", time: "all day" },
        { title: "Order Interior Trim ...", time: "all day" },
        { title: "Plumbing Final (Ap...", time: "all day" },
        { title: "Prime Interior", time: "all day" },
        { title: "Trim Lockout & Fire...", time: "all day" }
      ]
    },
    {
      day: "Tuesday",
      date: "28",
      month: "Oct 2025",
      events: [
        { title: "Final Grading", time: "all day" },
        { title: "Install Cabinetry Ha...", time: "all day" }
      ]
    }
  ];

  return (
    <div className="w-80 bg-white rounded-lg border p-6 mt-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-semibold">THIS WEEK'S AGENDA</h3>
        <a href="#" className="text-blue-600 text-sm hover:underline">View schedule</a>
      </div>

      <div className="space-y-4">
        {agendaItems.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className={`flex-shrink-0 w-12 h-12 rounded-full flex flex-col items-center justify-center text-white font-bold ${index === 1 ? 'bg-blue-600' : 'bg-gray-400'}`}>
              {item.date}
            </div>
            <div className="flex-1">
              <div className="font-semibold">{item.day}</div>
              <div className="text-sm text-gray-600 mb-2">{item.month}</div>
              {item.events.map((event, idx) => (
                <div key={idx} className="flex items-start gap-2 mb-2">
                  <div className="w-2 h-2 bg-brown-600 rounded-full mt-1.5"></div>
                  <div className="flex-1">
                    <div className="text-sm">{event.title}</div>
                    <div className="text-xs text-gray-500">{event.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
