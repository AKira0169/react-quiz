import { useQuiz } from '../contexts/QuizContext';

function Options() {
  const { questions, index, answer, newAnswer } = useQuiz();
  const hasAnswer = answer !== null;
  const question = questions[index];

  return (
    <div className='options'>
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? 'answer' : ''} ${
            hasAnswer ? (i === question.correctOption ? 'correct' : 'wrong') : ''
          }`}
          key={i}
          disabled={answer !== null}
          onClick={() => newAnswer(i)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
