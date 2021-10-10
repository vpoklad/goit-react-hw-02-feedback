export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <button key={option} type="button" name={option} onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </div>
  );
}
