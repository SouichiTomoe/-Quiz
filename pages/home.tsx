import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import Survey from '../components/survey/Survey';

const Home: NextPage = (props: any) => {
    return (
        <Layout>
            <div>
                <Survey props={props} />
            </div>
        </Layout>
    );
};

// The best idea is to store this into the Redux state.
export const getStaticProps = async () => {
    console.log('ENV: ', process.env.NODE_ENV);
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
