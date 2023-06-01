import Footer from './components/common/footer';
import Header from './components/common/header';
import './globals.css';
import localFont from 'next/font/local';

const estedadFont = localFont({
  src: [
    {
      path: '../public/fonts/Estedad-Light.ttf',
      weight: '300',
    },
    {
      path: '../public/fonts/Estedad-Regular.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/Estedad-Bold.woff2',
      weight: '800',
    },
    {
      path: '../public/fonts/Estedad-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../public/fonts/Estedad-Medium.woff2',
      weight: '500',
    },
  ],
  variable: '--font-estedad',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${estedadFont.className} container mx-auto  w-full`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
