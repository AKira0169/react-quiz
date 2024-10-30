import { useQuiz } from '../contexts/QuizContext';

function StartScreen() {
  const { numQuestions, start } = useQuiz();

  return (
    <div>
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery </h3>
      <button className='btn btn-ui' onClick={() => start()}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
