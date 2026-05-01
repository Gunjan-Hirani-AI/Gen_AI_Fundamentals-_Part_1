import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Generative AI Basics Part-1 | Learnings & Implementations",
  description: "A showcase of my Generative AI learning journey - ChatModels and Embeddings implementations by Gunjan Hirani",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
