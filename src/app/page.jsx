import Topbar from "@/components/layout/Topbar";
import Sidebar from "@/components/layout/Sidebar";
import WelcomeCard from "@/components/ui/WelcomeCard";
import BlankJob from "@/components/ui/BlankJob";

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col">
      <div className="mx-auto flex w-full flex-1 gap-4 px-4 py-4">
        <Sidebar />
        <main className="flex-1">
          <WelcomeCard />
          <BlankJob />
        </main>
      </div>
      <div className="fixed bottom-6 left-6 grid gap-2">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-black/80 text-white text-sm">N</div>
      </div>
    </div>
  );
}
