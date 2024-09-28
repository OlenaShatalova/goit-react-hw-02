import styles from './Feedback.module.css';

const Feedback = ({ feedBack, totalFeedback, positiveFeedback }) => {
  const { good, neutral, bad } = feedBack;

  return (
    <div className={styles.feedback_container}>
      <ul>
        <li>Good : {good}</li>
        <li>Neutral : {neutral}</li>
        <li>Bad : {bad}</li>
      </ul>
      <span>Total: {totalFeedback}</span>
      <span>Positive: {positiveFeedback}%</span>
    </div>
  );
};

export default Feedback;
