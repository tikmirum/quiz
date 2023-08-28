import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import copy from 'copy-to-clipboard';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  LinkedinShareButton,
  TelegramIcon,
  LinkedinIcon,
} from 'react-share';
import { questionsAndAnswers } from 'constants/questions-and-answers';
import { TQuizQuestionAnswer } from 'interfaces/quesans';
import Ok from 'assets/images/ok.png';

import * as Styled from './styles';
import { arrayShuffle } from 'utils/array-shuffle';
import { CopyIcon } from 'components/CopyIcon';

export const Quiz = () => {
  const [counter, setCounter] = useState(0);
  const [hasCopied, setHasCopied] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [copyText, setCopyText] = useState('');
  const [newQuiz, setNewQuiz] = useState(() =>
    arrayShuffle(questionsAndAnswers)
  );

  const shareFace = `https://www.facebook.com/sharer/sharer.php?u=${copyText}`;
  const shareTwit = `https://twitter.com/intent/tweet?url=${copyText}`;
  const shareTele = `https://telegram.me/share/url?url=${copyText}`;
  const shareLink = `https://www.linkedin.com/shareArticle?url=${copyText}`;

  const elementRef = useRef<HTMLDivElement | null>(null);

  const copyToClipboard = () => {
    copy(copyText);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
    setHasCopied(true);
  };

  const checkAnswer = (answer: TQuizQuestionAnswer) => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    if (answer.isCorrect) {
      setCounter(counter + 1);
    } else {
      return;
    }
  };

  const backStart = () => {
    setCurrentQuestionIndex(0);
    setCounter(0);
    setNewQuiz(arrayShuffle(questionsAndAnswers));
  };

  const htmlToImageConvert = () => {
    if (!elementRef.current) {
      return;
    }

    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const form = new FormData();
        const [_, image] = dataUrl.split(',');
        form.append('image', image);
        fetch(
          `https://api.imgbb.com/1/upload?key=d5e6e50f0aaad507d17d4e280b7c2e23`,
          {
            method: 'POST',
            body: form,
          }
        )
          .then((data) => {
            return data.json();
          })
          .then((data) => {
            setCopyText(data.data.url);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return currentQuestionIndex < 10 ? (
    <Styled.All>
      <Styled.Quiz>{newQuiz[currentQuestionIndex].questionText}</Styled.Quiz>
      <Styled.Answers>
        {newQuiz[currentQuestionIndex].answers.map((answer, index) => (
          <Styled.AnswersColumn key={index} onClick={() => checkAnswer(answer)}>
            {answer.answerText}
          </Styled.AnswersColumn>
        ))}
      </Styled.Answers>
    </Styled.All>
  ) : (
    <Styled.Finally>
      <Styled.Title ref={elementRef}>
        Դուք հավաքել եք {counter} միավոր
      </Styled.Title>
      <Styled.Row>
        <Styled.Back onClick={backStart}>Փորձիր կրկին</Styled.Back>
        <Styled.Back onClick={htmlToImageConvert} disabled={!!copyText}>
          Ստեղծել Url
        </Styled.Back>
      </Styled.Row>
      <Styled.Row>
        <Styled.Input value={copyText} disabled />
        <Styled.Button onClick={hasCopied ? undefined : copyToClipboard}>
          {hasCopied ? (
            <img alt="ok" src={Ok} width="100%" height="auto" />
          ) : (
            <CopyIcon />
          )}
        </Styled.Button>
      </Styled.Row>
      <Styled.Row>
        <FacebookShareButton url={shareFace}>
          <FacebookIcon round size={40} />
        </FacebookShareButton>
        <TwitterShareButton url={shareTwit}>
          <TwitterIcon round size={40} />
        </TwitterShareButton>
        <TelegramShareButton url={shareTele}>
          <TelegramIcon round size={40} />
        </TelegramShareButton>
        <LinkedinShareButton url={shareLink}>
          <LinkedinIcon round size={40} />
        </LinkedinShareButton>
      </Styled.Row>
    </Styled.Finally>
  );
};
