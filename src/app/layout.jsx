import "./globals.css";
import { font } from "@/lib/fonts";
import { ThemeProvider } from "@/components/providers/theme-provide";

export const metadata = {
  title: "Next app",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
