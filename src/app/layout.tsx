import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/assets/global.scss";
import { HomeLayout } from "@/modules/layouts";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotify View Transitions",
  description: "Generated by create next app",
  twitter: {
    card: "summary_large_image",
    title: "Spotify View Transitions",
    creator: "@khvala",
    images: ["/meta-image.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark ${poppins.className}`}>
        <HomeLayout>{children}</HomeLayout>
      </body>
    </html>
  );
}
