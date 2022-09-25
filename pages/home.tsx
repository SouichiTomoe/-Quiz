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
    return { props: {} };
};

export default Home;
