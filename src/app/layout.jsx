import "../styles/globals.css";
import Topbar from "@/components/layout/Topbar";

export const metadata = {
  title: "buildercms",
  description: "Next.js App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-gray-900">
        <Topbar />
        {children}
      </body>
    </html>
  );
}
