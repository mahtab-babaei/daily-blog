import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import type { Metadata } from "next";
import "./globals.css";
import { Container, Theme } from "@radix-ui/themes";
import NavBar from "./NavBar";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["arabic"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={rubik.variable}>
        <Theme className="bg-neutral text-sm">
          <NavBar />
          <main className="py-12 px-6">
            <Container>{children}</Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
