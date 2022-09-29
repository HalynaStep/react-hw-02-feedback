
export const FeedbackOptions = (props) => (
    props.options.map((option) => {
        return <button key={option} name={option} onClick={props.onLeaveFeedback}>{option}</button>
    }
    )
);

