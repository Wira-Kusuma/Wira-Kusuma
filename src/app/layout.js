import "../styles/globals.css";

export const metadata = {
  title: "Wira Kusuma | Frontend Developer Portfolio",
  description: "Explore my frontend development portfolio featuring React, JavaScript, and modern web projects. Hire an experienced frontend developer.",
  keywords: ["frontend developer", "React developer", "JavaScript", "web development", "portfolio", "Wira Kusuma"],
  authors: [{ name: "Wira Kusuma" }],
  creator: "Wira Kusuma",
  // viewport: "width=device-width, initial-scale=1", // This line is removed from here
  robots: "index, follow",
  openGraph: {
    title: "Wira Kusuma | Frontend Developer Portfolio",
    description: "Explore my frontend development portfolio featuring React, JavaScript, and modern web projects.",
    type: "website",
    url: "https://wira-kusuma.github.io/Wira-Kusuma/",
    siteName: "Wira Kusuma Portfolio",
    images:"https://github.com/Wira-Kusuma/Wira-Kusuma/blob/main/public/wira.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wira Kusuma | Frontend Developer",
    description: "Explore my frontend development portfolio",
    images:"https://github.com/Wira-Kusuma/Wira-Kusuma/blob/main/public/wira.jpg",
  },
};

// Add the new viewport export here, using the structured object format
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* The viewport meta tag is now automatically managed by Next.js */}
        <meta charSet="utf-8" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

