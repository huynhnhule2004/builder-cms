import { Card, CardContent } from "../ui/card";

export default function WelcomeCard() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Good evening, Kien2.
          </h2>
          <button className="px-4 py-1.5 rounded-full bg-gray-200 text-gray-700 text-sm font-medium">
            Clocked Out
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
