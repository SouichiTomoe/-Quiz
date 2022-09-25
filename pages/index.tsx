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

export default Home;
