import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Survey from '../components/survey/Survey';
import { useAppContext } from '../context';

const Home: NextPage = () => {
  const [appState] = useAppContext();
  if (!appState) return null;
  return (
    <Layout>
      <Head>
        <title>Challenge App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Survey survey={appState} />
      </div>
    </Layout>
  );
};

export default Home;
