import "./ui/globals.css";
import MyApp from "./app";
import React from "react";

export default function RootLayout({children}
: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <MyApp>{children}</MyApp>
      </body>
    </html>
  );
}
