import { useEffect, useState } from 'react';
import style from './Timer.module.scss';

const Timer = ({ props }: any) => {
    const [timer, setTimer] = useState(props.timer);
    useEffect(() => {
        setTimeout(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            } else {
                setTimer(props.timer);
            }
        }, 1000);
    }, [timer]);
    return (
        <div className={style.container}>
            <span>{timer}</span>
            <p>Seconds before change to another question.</p>
        </div>
    );
};

export default Timer;
