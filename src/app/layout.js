import "./globals.css";

export const metadata = {
  title: "Machine Mashinani",
  description: "Demystifying AI and Data for Kenya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-xl text-gray-950 bg-gray-50">
        {children}
      </body>
    </html>
  );
}
