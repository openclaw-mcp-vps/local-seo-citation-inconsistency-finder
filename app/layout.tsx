import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CitationScan – Find Inconsistent Business Citations",
  description:
    "Scan directories and websites for inconsistent NAP (Name, Address, Phone) data that hurts your local SEO rankings."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="75800cb7-0393-4bbb-a65d-7c35fca2cff0"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
