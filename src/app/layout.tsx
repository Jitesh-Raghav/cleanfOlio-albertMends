// import Navbar from "@/components/navbar";
// import { ThemeProvider } from "@/components/theme-provider";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { DATA } from "@/data/resume";
// import { cn } from "@/lib/utils";
// import type { Metadata } from "next";
// import { Inter as FontSans } from "next/font/google";
// import "./globals.css";

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// export const metadata: Metadata = {
//   metadataBase: new URL(DATA.url),
//   title: {
//     default: DATA.name,
//     template: `%s | ${DATA.name}`,
//   },
//   description: DATA.description,
//   openGraph: {
//     title: DATA.name,
//     description: DATA.description,
//     url: DATA.url,
//     siteName: DATA.name,
//     images: [`${DATA.url}/over.png`], // good for LinkedIn, Discord etc.
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     title: DATA.name,
//     description: DATA.description,
//     card: "summary_large_image",
//     site: "@okayjitesh",
//     images: [`${DATA.url}/over.png`],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   verification: {
//     google: "",
//     yandex: "",
//   },
// };




// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={cn(
//           "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
//           fontSans.variable
//         )}
//       >
//         <ThemeProvider attribute="class" defaultTheme="light">
//           <TooltipProvider delayDuration={0}>
//             {children}
//             <Navbar />
//           </TooltipProvider>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

// Load Inter font
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Export static metadata for bots
export const metadata: Metadata = {
  metadataBase: new URL(DATA.url), // e.g., https://jiteshraghav.vercel.app
  title: {
    default: DATA.name, // e.g., "Jitesh Raghav"
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description, // e.g., "I'm Jitesh, a full-stack dev..."
  openGraph: {
    title: DATA.name,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    images: [`${DATA.url}/over.png`], // ✅ Absolute URL
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DATA.name,
    description: DATA.description,
    site: "@okayjitesh",
    creator: "@okayjitesh",
    images: [`${DATA.url}/over.png`], // ✅ Required for Twitter Card
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "", // Add search console ID if needed
    yandex: "",
  },
};

// ✅ Make sure homepage is statically rendered
export const dynamic = "force-static";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
