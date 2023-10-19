// pages/_app.tsx
import { AppProps } from 'next/app';
import Layout from '../component/Layout/Layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router.pathname)
  if (router.pathname === '/') {
    return <Component {...pageProps} />;
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
