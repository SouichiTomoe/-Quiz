import { useEffect, useState } from 'react';
import Image from 'next/image';
import Router from 'next/router';
import { Button, Divider, notification } from 'antd';
import styles from './Survey.module.scss';
import { ethers } from 'ethers';
import abi from '../../abi/abi.json';

declare let window: any;

const Survey = ({ survey }: any) => {
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers]: any = useState([]);

  let timer: any;

  useEffect(() => {
    if (counter + 1 <= survey.questions.length) {
      timer = setTimeout(() => {
        setAnswers([
          ...answers,
          {
            question: survey.questions[counter].text,
            answer: null,
          },
        ]);
        setCounter(counter + 1);
      }, survey.questions[counter].lifetimeSeconds * 1000);
    }
  }, [counter]);

  const handleAnswer = (answer: any) => {
    clearInterval(timer);
    setCounter(counter + 1);
    setAnswers([...answers, answer]);
  };

  const renderQuestion = () => {
    if (counter + 1 <= survey.questions.length) {
      return (
        <div>
          <div className={styles.container__questions__quest}>
            <p>{survey.questions[counter].text}</p>
            <Image
              loader={(src) => survey.questions[counter].image}
              src={survey.questions[counter].image}
              alt="survey_img"
              width="50"
              height="50"
              unoptimized={true}
            />
          </div>
          <div className={styles.container__questions__options}>
            {survey.questions[counter].options.map((o, y) => {
              return (
                <Button
                  key={y}
                  block
                  onClick={() =>
                    handleAnswer({
                      question: survey.questions[counter].text,
                      answer: o.text,
                    })
                  }
                >
                  {o.text}
                </Button>
              );
            })}
          </div>
        </div>
      );
    }
    return <></>;
  };

  const renderSubmitAnswers = () => {
    return answers.map((e, i) => {
      return (
        <div className={styles.container__footer__block} key={i}>
          <div>{`Question ${i + 1}: ${e.question}`}</div>
          <div>{`Answer ${i + 1}: ${e.answer ? e.answer : 'No Answer'}`}</div>
          <Divider />
        </div>
      );
    });
  };

  const handleTransfer = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract('0x74F0B668Ea3053052DEAa5Eedd1815f579f0Ee03', abi, signer);
    const answerArrayUnits = answers.map((e) => {
      return ethers.utils.parseUnits('100', 18);
    });
    try {
      const submitData = await erc20.submit(ethers.utils.parseUnits('0.000000000000000001', 18), answerArrayUnits);
      if (submitData) {
        Router.push('/finished');
      } else {
        console.log('There was an error in the submit');
      }
    } catch (err) {
      alert(`Submit failed, please try again in a few minutes: ${err}`);
      Router.push('/finished');
    }
  };
  return (
    <div className={styles.container}>
      {counter + 1 <= survey.questions.length ? (
        <div className={styles.container__questions}>{renderQuestion()}</div>
      ) : (
        <div className={styles.container__footer}>
          <p>Thanks for your answers. Please review your survey and submit it.</p>
          <div>{renderSubmitAnswers()}</div>
          <Button type="primary" onClick={handleTransfer}>
            Submit Survey
          </Button>
        </div>
      )}
    </div>
  );
};

export default Survey;
