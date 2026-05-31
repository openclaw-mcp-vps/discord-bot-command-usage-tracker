import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BotPulse — Track Discord Bot Command Usage",
  description: "Analytics dashboard showing bot command usage, identifying dead features to remove. Built for Discord server admins, community managers, and bot developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0d6f4d8d-ef2d-40d5-831c-184ae43daf9f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
