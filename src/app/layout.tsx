import "~/styles/globals.css";
import Navbar from "./_components/navbar";
import { ClerkProvider } from '@clerk/nextjs'


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

      <body className=" min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Navbar />
     {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
