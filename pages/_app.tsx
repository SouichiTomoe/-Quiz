import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import 'regenerator-runtime/runtime';

import '../styles/main.scss';
import 'antd/dist/antd.css';

const App = ({ Component, pageProps }) => {
    // Put the ethereum chain ids of the chains you want to support
    const supportedChainIds = [1, 3, 4, 42, 80001];
    // Ethereun Mainnet - 1 (ETH)
    // Ropsten Test Network - 3 (ETH)
    // Rinkeby Test Network - 4 (ETH)
    // Kovan Test Network -  42 (ETH)
    // Polygon Mumbai Test Network - 80001 (MATIC)
    const connectors = {
        //Only Metamask was included for testing purposes.
        injected: {},
    };

    return (
        // @ts-ignore
        <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>
            <Component {...pageProps} />
            {console.log({ pageProps })}
        </ThirdwebWeb3Provider>
    );
};

export default App;
