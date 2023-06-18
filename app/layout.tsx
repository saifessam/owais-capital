import Blobs from '@/components/blobs';
import Header from '@/components/header';
import Main from '@/components/main';
import '@/styles/app.css';
import { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Owais Capital',
  description: 'A financial technology company that aims to provide financing solutions that help small and medium enterprises to create and distribute their financial instruments issuances to investors in a more efficient and flexible manner.',
  manifest: "/meta/manifest.json",
  icons: { icon: "/meta/favicon.ico", apple: "/meta/apple-touch-icon.png" }
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Blobs />
        <Header />
        <Main>
          {children}
        </Main>
      </body>
    </html>
  );
}
