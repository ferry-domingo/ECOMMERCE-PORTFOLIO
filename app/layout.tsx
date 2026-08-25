import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Manrope } from "next/font/google";
import "./globals.css";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;
  return {
    title: "Lovely Ferry Domingo — E-commerce Designer & Developer",
    description: "Distinctive, responsive e-commerce experiences for ambitious brands.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title: "Digital stores with character.", description: "E-commerce design and development by Lovely Ferry Domingo.", images: [{ url: image, width: 1680, height: 945 }] },
    twitter: { card: "summary_large_image", images: [image] },
  };
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${geistSans.variable} ${manrope.variable}`}>{children}</body></html>; }
