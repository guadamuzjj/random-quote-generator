import Head from 'next/head'
import Footer from './footer'
import Header from './header';

export default function Page({ title, header, children }) {
  return (
    <>
      <Head>
        <title>{title || 'Random Quote Generator'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-full h-screen justify-between">
        <Header content={header} />
        <main className="w-full px-10 sm:px-0 sm:w-3/4 md:w-3/5 xl:w-2/5 self-center">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
