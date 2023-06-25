import Footer from './components/common/footer';
import Header from './components/common/header';
import './globals.css';
import localFont from 'next/font/local';
import Providers from '@/utils/query-provider';
import AllModals from './components/common/all-modals';

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
  title: 'ترخینه🌿',
  description: 'رستوران بزرگ ترخینه در سراسر تهران',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      {/* React Query Provider */}
      <Providers>
        <body
          className={`${estedadFont.className} mx-auto w-full max-w-screen-[2000px]`}
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <AllModals />
        </body>
      </Providers>
      {/* React Query Provider */}
    </html>
  );
}
