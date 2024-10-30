import { useQuiz } from '../contexts/QuizContext.js';
function NextButton() {
  const { numQuestions, index, answer, dispatch } = useQuiz();
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button className='btn btn-ui' onClick={() => dispatch({ type: 'next' })}>
        Next
      </button>
    );
  }
  if (index === numQuestions - 1) {
    return (
      <button className='btn btn-ui' onClick={() => dispatch({ type: 'finish' })}>
        Finish
      </button>
    );
  }
}

export default NextButton;
