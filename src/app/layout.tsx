import "./ui/globals.css";
import MyApp from "./app";
export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MyApp>{children}</MyApp>
      </body>
    </html>
  );
}
