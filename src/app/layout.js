import "../styles/globals.css";

export const metadata = {
  title: "Wira Kusuma | Frontend Developer Portfolio",
  description: "Explore my frontend development portfolio featuring React, JavaScript, and modern web projects. Hire an experienced frontend developer.",
  keywords: ["frontend developer", "React developer", "JavaScript", "web development", "portfolio", "Wira Kusuma"],
  authors: [{ name: "Wira Kusuma" }],
  creator: "Wira Kusuma",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Wira Kusuma | Frontend Developer Portfolio",
    description: "Explore my frontend development portfolio featuring React, JavaScript, and modern web projects.",
    type: "website",
    url: "https://yourdomain.com",
    siteName: "Wira Kusuma Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wira Kusuma Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wira Kusuma | Frontend Developer",
    description: "Explore my frontend development portfolio",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
