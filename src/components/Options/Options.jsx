import styles from './Options.module.css';

const Options = ({ updateFeedback, resetFeedBack, totalFeedback }) => {
  return (
    <div className={styles.options_container}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {Boolean(totalFeedback) && (
        <button data-reset onClick={resetFeedBack}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
