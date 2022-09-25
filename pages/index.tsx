import Head from 'next/head';
import { NextPage } from 'next';
import { useEffect } from 'react';
import Welcome from '../components/welcome/Welcome';
import Layout from '../components/layout/Layout';
import { useAppContext } from '../context';

const Home: NextPage = (props: any) => {
  const [appState, setAppState] = useAppContext();

  useEffect(() => {
    setAppState(props.survey);
  }, [props.survey]);

  if (!appState) return null;
  console.log({ appState });
  return (
    <Layout>
      <div>
        <Head>
          <title>Challenge App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Welcome survey={props.survey} />{' '}
        </main>
        <footer></footer>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  let url;
  if (process.env.NODE_ENV === 'production') {
    url = `https://quizchallenge-1k6w34g0s-souichitomoe.vercel.app`;
  } else {
    url = process.env.API_URL;
  }

  const res = await fetch(`${url}/api/survey`);
  const survey = await res.json();
  return { props: { survey } };
};

export default Home;
