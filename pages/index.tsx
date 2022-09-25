import Head from 'next/head';
import { NextPage } from 'next';
import Welcome from '../components/welcome/Welcome';
import styles from './index.module.scss';
import Layout from '../components/layout/Layout';

const Home: NextPage = (props: any) => {
    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>Challenge App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.container__block}>
                    <Welcome props={props} />
                </main>

                <footer></footer>
                <style global jsx>{`
                    html,
                    body,
                    body > div:first-child,
                    div#__next
                `}</style>
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
