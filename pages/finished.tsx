import { NextPage } from 'next';
import Router from 'next/router';
import { useWeb3 } from '@3rdweb/hooks';
import { Button } from 'antd';

import style from './finished.module.scss';

import Layout from '../components/layout/Layout';

const Finished: NextPage = () => {
    const { disconnectWallet, balance } = useWeb3();

    const disconnectMetaMaskWallet = async () => {
        disconnectWallet();
        Router.push('/');
    };
    return (
        <Layout>
            <div className={style.container}>
                <p>Thanks for your time.Enjoy your tokens!</p>
                <p>
                    Account Balance:{' '}
                    <span className={style.container__token}>{`${balance?.formatted} $QUIZ Tokens`}</span>
                </p>
                <Button
                    type="primary"
                    onClick={() => {
                        Router.push('/home');
                    }}
                >
                    Go to another survey
                </Button>
                <Button danger type="primary" onClick={disconnectMetaMaskWallet}>
                    Desconect Wallet
                </Button>
            </div>
        </Layout>
    );
};

export default Finished;
