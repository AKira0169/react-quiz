import { useQuiz } from '../contexts/QuizContext.js';
function NextButton() {
  const { numQuestions, index, answer, next, finish } = useQuiz();
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button className='btn btn-ui' onClick={() => next()}>
        Next
      </button>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <button className='btn btn-ui' onClick={() => finish()}>
        Finish
      </button>
    );
  }
}

export default NextButton;
