function FinishScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;

  if (percentage >= 80) emoji = '🥳';

  if (percentage >= 60) emoji = '😎';

  if (percentage >= 40) emoji = '😊';

  if (percentage < 40) emoji = '🙁';

  return (
    <>
      <p className="result">
        you scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%) {emoji}
      </p>
      <p className="highscore">
        highscore: <strong>{highScore}</strong>
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Play again
      </button>
    </>
  );
}

export default FinishScreen;
<p>
  <strong>points</strong>
</p>;
