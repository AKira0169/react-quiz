import { useQuiz } from '../contexts/QuizContext';
function Progress() {
  const { index, points, answer, numQuestions, maxPossiblePoints } = useQuiz();

  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + Number(answer !== null)} className='progress-bar' />
      <p>
        Question{' '}
        <strong>
          {index + 1} / {numQuestions}
        </strong>
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
