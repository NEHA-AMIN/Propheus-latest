import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";
import ThemeScript from "./components/ThemeScript";

export const metadata: Metadata = {
  title: "Propheus - We Infer the World",
  description: "We turn maps into meaning, enabling AI agents that reason about the world through location, data, and context.",
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="antialiased bg-blue-950 dark:bg-slate-950 min-h-screen transition-colors duration-300">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
