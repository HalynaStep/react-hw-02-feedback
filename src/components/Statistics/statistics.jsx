import { Text } from 'components/Section/section.styled';
export const Statistics = props => (
  <>
    <Text>Good: {props.good}</Text>
    <Text>Neutral: {props.neutral}</Text>
    <Text>Bad: {props.bad}</Text>
    <Text>Total: {props.total}</Text>
    <Text>Positive feedback: {props.positivePercentage}%</Text>
  </>
);
