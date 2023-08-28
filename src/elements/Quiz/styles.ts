import styled from 'styled-components';
import img from 'assets/images/bg.jpg';

export const All = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 800px;
  max-width: 100vw;
  border: 2px solid red;

  background: url('${img}') no-repeat;
  background-size: cover;
  animation: animateBg 5s linear infinite;

  @keyframes animateBg {
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;
export const Quiz = styled('div')`
  font-size: 28px;
  padding: 62px;
  color: aliceblue;
`;

export const Answers = styled('div')`
  font-size: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

export const AnswersColumn = styled('button')`
  border: 4px solid blue;
  border-radius: 70%;
  font-size: 24px;
  margin: 8px;
  width: 200px;
  height: 80px;
  &:hover {
    background-color: greenyellow;
    color: aliceblue;
  }
`;

export const Finally = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled('div')`
  text-align: center;
  font-size: 44px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
    monospace;
`;

export const Row = styled('div')`
  margin: 16px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  position: relative;
`;

export const Back = styled('button')`
  border: 4px solid darkblue;
  border-radius: 70%;
  font-size: 24px;
  margin: 8px;
  width: 200px;
  height: 80px;
  &[disabled] {
    &:hover {
      cursor: not-allowed;
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled('input')`
  border: 2px solid black;
  border-radius: 12px;
  font-size: 18px;
  width: 300px;
  padding: 16px 48px 16px 16px;
`;

export const Button = styled('button')`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  line-height: 16px;
  border-radius: 12px;
  width: 30px;
  height: 100%;
  font-size: 8px;
  text-align: center;
  transition: transform 0.7s ease-in-out;
  &:hover {
    transform: rotate(360deg);
  }
  cursor: pointer;
  background-color: inherit;
`;
