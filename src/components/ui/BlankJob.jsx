import { Card } from "../ui/card";

export default function BlankJob() {
  return (
    <Card className="mt-6 grid place-items-center py-16">
      <div className="flex flex-col items-center">
        <div className="mb-3 grid h-16 w-16 place-items-center rounded-md border-2 border-gray-300">
          <div className="h-10 w-8 rounded border-2 border-gray-300 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-5 w-8 rounded border-2 border-gray-300 bg-white"></div>
          </div>
        </div>
        <h3 className="text-xl font-semibold">Job Summary</h3>
        <p className="mt-1 text-gray-500">Select a job to get started</p>
      </div>
    </Card>
  );
}
