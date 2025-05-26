import "./globals.css";
import Layout from "@/components/Layout";

export const metadata = {
  title: "Xenial Intelligence Ltd",
  description: "AI-powered software solutions and IT services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
