 import "./globals.css";

export const metadata = {
  title: "Pizza da Vila",
  description: "Pizza gostosa e feita na hora.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}