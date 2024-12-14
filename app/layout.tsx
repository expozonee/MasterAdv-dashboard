import ProviderSession from "@/components/Providers/Providers";
import design from "./page.module.css";
import { MobileProvider } from "@/contexts/MobileContext";
import { Metadata } from "next";
import QueryProvider from "@/contexts/QueryClient";
import EmotionCacheProvider from "@/components/Providers/EmotionCacheProvider";

import "./globals.css";
import { SideBarProvider } from "@/contexts/SideBarContext";

export const metadata: Metadata = {
  title: "Master Adv",
  description: "Master Adv portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl" className={`bg-no-repeat md:bg-contain h-full`}>
      <EmotionCacheProvider>
        <QueryProvider>
          <ProviderSession>
            <SideBarProvider>
              <body
                className={`h-full ${design.gradientWrapper} `}
                suppressHydrationWarning={true}
              >
                <MobileProvider>{children}</MobileProvider>
              </body>
            </SideBarProvider>
          </ProviderSession>
        </QueryProvider>
      </EmotionCacheProvider>
    </html>
  );
}
