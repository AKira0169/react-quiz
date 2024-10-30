import { useQuiz } from '../contexts/QuizContext';
import Options from './Options';
function Question() {
  const { questions, index } = useQuiz();

  const question = questions[index];

  return (
    <div>
      <h2>{question.question}</h2>
      <Options />
    </div>
  );
}

export default Question;
