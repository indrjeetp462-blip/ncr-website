import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  verification: {
    google: "KUpOaI7VAFzvOndO3ySn_SzMurazhYs4YpTJL0Lh8RA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
