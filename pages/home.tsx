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
    const res = await fetch('https://quizchallenge-7mi44lokb-souichitomoe.vercel.app/api/survey');
    const survey = await res.json();
    return { props: { survey } };
};

export default Home;
