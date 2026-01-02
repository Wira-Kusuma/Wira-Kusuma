import "../styles/globals.css";

export const metadata = {
  title: "Wira kusuma's Portofolio",
  description: "Wira kusuma phandawa | frontend developer portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
