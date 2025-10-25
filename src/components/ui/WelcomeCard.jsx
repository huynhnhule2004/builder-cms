import { Card, CardContent } from "../ui/card";

export default function WelcomeCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex items-start gap-4">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-indigo-100 text-indigo-700 font-bold">b</div>
          <div>
            <h2 className="text-lg font-semibold">
              Welcome to Buildertrend! Here are a few ways to get started:
            </h2>
            <ul className="mt-2 list-disc pl-5 text-gray-700 leading-7">
              <li>Learn the basics by jumping into a <a className="text-indigo-600 hover:underline" href="#">Buildertrend Learning Academy</a> Training.</li>
              <li>Select a job from the list to get started. Don’t see your job? Reach out to your admin and request access.</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
