import { useState, useEffect } from 'react';
import Image from 'next/image';
import Router from 'next/router';
import { ethers } from 'ethers';
import { Button } from 'antd';
import { useWeb3, useSwitchNetwork } from '@3rdweb/hooks';
import style from './Welcome.module.scss';

declare let window: any;

const Welcome = () => {
    const { connectWallet, address, chainId, balance } = useWeb3();
    const { switchNetwork } = useSwitchNetwork();

    const [currentAccount, setCurrentAccount] = useState<string | undefined>();
    const [chainname, setChainName] = useState<string | undefined>();

    const [balanceInfo, setBalanceInfo] = useState({
        address: '-',
        balance: '-',
    });

    useEffect(() => {
        if (!currentAccount || !ethers.utils.isAddress(currentAccount)) return;
        //client side code
        if (!window.ethereum) return;
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        provider.getNetwork().then((result) => {
            setChainName(result.name);
        });
    }, [currentAccount]);

    //Connect to metamask wallet.
    const onClickConnect = async () => {
        //client side code
        if (!window.ethereum) {
            console.log('please install MetaMask');
            return;
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        // MetaMask requires requesting permission to connect users accounts
        connectWallet('injected');
    };

    const connectToRobstenNetwork = () => {
        if (address && chainId !== 3) {
            return (
                <div className={style.container__network}>
                    <p>
                        You are not connected to Robstein Network. Please Connect in order to obtain your Quiz Tokens.
                    </p>
                    <Button danger type="primary" onClick={() => switchNetwork(3)}>
                        Connect to Robstein Network.
                    </Button>
                </div>
            );
        } else {
            return (
                <div className={style.container__network}>
                    <Button type="primary" onClick={() => Router.push('/home')}>
                        Go to Survey
                    </Button>
                </div>
            );
        }
    };

    return (
        <div className={style.container}>
            <div className={style.container__title}>
                <h1>
                    Welcome to <span>$Quiz</span>
                </h1>
                {address ? (
                    <p>
                        Your Balance:{' '}
                        <span className={style.container__title__tokens}>{`${balance?.formatted} $QUIZ Tokens`}</span>
                    </p>
                ) : (
                    <></>
                )}
            </div>
            {address ? (
                connectToRobstenNetwork()
            ) : (
                <Button type="primary" onClick={onClickConnect}>
                    Connet to MetaMask
                </Button>
            )}
            <Image src="/assets/images/logo.jpg" alt="logo" width={350} height={350} />
            <a href="https://www.freepik.com/free-vector/registration-form-template-with-flat-design_3301472.htm#query=form&position=12&from_view=search">
                Freepik
            </a>
        </div>
    );
};

export default Welcome;
