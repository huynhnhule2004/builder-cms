import { redirect } from "next/navigation";

export default function JobsMapPage() {
  redirect("/jobs/list?view=map");
}
