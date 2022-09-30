import { Btn } from './btn.styled';

export const FeedbackOptions = props =>
  props.options.map(option => {
    return (
      <Btn key={option} name={option} onClick={props.onLeaveFeedback}>
        {option}
      </Btn>
    );
  });
