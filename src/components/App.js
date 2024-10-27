import { useEffect } from 'react';
import { useReducer } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Loader from './Loader.js';
import Error from './Error.js';
import StartScreen from './StartScreen.js';
import Question from './Question.js';
import NextButton from './NextButton.js';
import Progress from './Progress.js';
import FinishScreen from './FinishScreen.js';
import { reducer, initialState } from '../reducer/index.js';
import Footer from './Footer.js';
import Timer from './Timer.js';

function App() {
  const [{ questions, index, status, answer, points, highScore, secondsRemaining }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const maxPossiblePoints = questions.reduce((prev, curr) => prev + curr.points, 0);
  const newQuestions = questions.length;

  useEffect(() => {
    fetch('http://localhost:5000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);
  return (
    <div className="App">
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen
            numQuestions={newQuestions}
            dispatch={dispatch}
          />
        )}
        {status === 'active' && (
          <>
            <Progress
              index={index}
              numQuestions={newQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              dispatch={dispatch}
              answer={answer}
              question={questions[index]}
            />
            <Footer>
              <Timer
                secondsRemaining={secondsRemaining}
                dispatch={dispatch}
              />

              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestions={newQuestions}
                index={index}
              />
            </Footer>
          </>
        )}
        {status === 'finished' && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
