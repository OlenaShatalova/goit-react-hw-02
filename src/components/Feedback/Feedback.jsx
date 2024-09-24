const Feedback = () => {
  return (
    <>
      <ul>
        <li key="Good">Good : 3</li>
        <li key="Neutral">Neutral : 1</li>
        <li key="Bad">Bad : 1</li>
      </ul>
      <span style={{ display: 'block' }}>Total {5}</span>
      <span>Positive: 80%</span>
    </>
  );
};

export default Feedback;
