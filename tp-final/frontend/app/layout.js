import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: {
    default: 'InterCargo - Logística internacional',
    template: '%s | InterCargo',
  },
  description: 'Transporte de cargas multimodal: aéreo, marítimo, ferroviario y terrestre.',
  icons: { icon: '/img/logo.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
