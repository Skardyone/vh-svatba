import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "V+H",
  description: "Svatební web Verunky a Honzíka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <link href="https://fonts.cdnfonts.com/css/now" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.typekit.net/fxw5jnj.css" />
        <link href="https://fonts.cdnfonts.com/css/lovan" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/celine-sans" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/svarge" rel="stylesheet" />
                
                
      </head>
      <body>{children}</body>
    </html>
  );
}
