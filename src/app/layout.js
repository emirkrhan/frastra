import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import { ToastProvider } from "@/components/toast/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frastra - Modern Copy-Paste Next.js Components",
  description: "A modern, copy-paste Next.js components. This is not a component library. It's how you build your component library.",
  keywords: ["Next.js", "React", "Components", "UI", "Tailwind CSS", "Copy-paste", "Component Library", "TypeScript"],
  authors: [{ name: "Emirhan Körhan" }],
  creator: "Emirhan Körhan",
  publisher: "Frastra",
  metadataBase: new URL('https://frastra.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://frastra.vercel.app',
    title: 'Frastra - Modern Copy-Paste Next.js Components',
    description: 'A modern, copy-paste Next.js components. This is not a component library. It\'s how you build your component library.',
    siteName: 'Frastra',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frastra - Modern Copy-Paste Next.js Components',
    description: 'A modern, copy-paste Next.js components. This is not a component library. It\'s how you build your component library.',
    creator: '@emirkrhan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Add your actual verification code
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <ToastProvider>
          <Navbar />
          <main className='pt-16'>
            {children}
          </main>
        </ToastProvider>
      </body>
    </html>
  );
}
