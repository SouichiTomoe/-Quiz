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
    const serverURL = `${process.env.SERVER}/api/survey`;
    const res = await fetch(serverURL);
    const survey = await res.json();
    return { props: { survey } };
};

export default Home;
