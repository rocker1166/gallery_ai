import "~/styles/globals.css";
import Navbar from "./_components/navbar";
import { ClerkProvider } from '@clerk/nextjs'
import "@uploadthing/react/styles.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
 
import { ourFileRouter } from "~/app/api/uploadthing/core";
import Nav2 from "./_components/nav2";


export const metadata = {
  title: "Gallery AI",
  description: "Ai gallery website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>

    <html lang="en">
    <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />

      <body className=" min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Navbar />
     {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
