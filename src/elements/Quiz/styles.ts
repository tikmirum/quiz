import styled from 'styled-components';

export const All = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 800px;
  border: 2px solid red;
`;
export const Quiz = styled('div')`
  font-size: 28px;
  padding: 62px;
`;

export const Answers = styled('div')`
  font-size: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

export const AnswersColum = styled('button')`
  border: 4px solid blue;
  font-size: 24px;
  margin: 8px;
  width: 200px;
  height: 80px;
`;

export const Finally = styled('div')`
  font-size: 24px;
`;
