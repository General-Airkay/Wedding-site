import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children, title = "Lydia & Ndiana | Divine's Choice '26" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Join us as Lydia Oluwadunsin & Ndiana Akpekong celebrate their wedding on 15th August 2026 at RCCG Canaanland Parish, Ado-Ekiti." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Lydia & Ndiana | Divine's Choice '26" />
        <meta property="og:description" content="Join us to celebrate the union of Lydia & Ndiana on 15th August 2026." />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
