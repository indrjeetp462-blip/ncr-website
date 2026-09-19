import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chimney Service Noida & Ghaziabad - 45 Min Arrival | 8796284796",
  description: "Professional chimney cleaning, repair & installation in Noida, Ghaziabad, Indirapuram, Vaishali. Faber, Elica, Hindware all brands. Call 8796284796",
  verification: {
    google: "KUpOaI7VAFzvOndO3ySn_SzMurazhYs4YpTJL0Lh8RA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{margin:0}}>{children}</body>
    </html>
  );
}
