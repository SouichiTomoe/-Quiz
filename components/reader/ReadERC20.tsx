import React, { useEffect, useState } from 'react';
import { ERC20ABI as abi } from '../../abi/ERC20ABI';
import { ethers } from 'ethers';

interface Props {
    addressContract: string;
    currentAccount: string | undefined;
}

declare let window: any;

const ReadERC20 = (props: Props) => {
    const addressContract = props.addressContract;
    const currentAccount = props.currentAccount;
    const [totalSupply, setTotalSupply] = useState<string>();
    const [symbol, setSymbol] = useState<string>('');

    return (
        <div>
            <div>
                <b>ERC20 Contract</b>: {addressContract}
            </div>
            <div>
                <b>ClassToken totalSupply</b>:{totalSupply} {symbol}
            </div>
            <div>
                <b>ClassToken in current account</b>
                {currentAccount}
            </div>
        </div>
    );
};

export default ReadERC20;
