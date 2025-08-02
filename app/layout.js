import "./globals.css";
import { Metadata } from "next";

export const metadata = {
  title: "Wanxin's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
