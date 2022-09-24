import { GetServerSideProps } from 'next';
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

export const getServerSideProps: GetServerSideProps = async () => {
    const server = new URL(`/api/survey/`, process.env.SERVER);
    const res = await fetch(server);
    const survey = await res.json();
    return { props: {} };
};

export default Home;
