const initialState = {
  questions: [],
  // loading , error , ready , active , finished
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};
const SECS_PER_QUESTION = 30;
function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };
    case 'setStatus':
      return { ...state, status: action.payload };
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'start':
      return { ...state, status: 'active', secondsRemaining: state.questions.length * SECS_PER_QUESTION };
    case 'next':
      return { ...state, index: state.index + 1, answer: null };
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highScore: state.points > state.highScore ? state.points : state.highScore,
      };
    case 'restart':
      return {
        ...state,
        ...initialState,
        questions: state.questions,
        status: 'ready',
      };
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      };
    case 'newAnswer':
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points,
      };
    default:
      return new Error('Unknown action');
  }
}

export { reducer, initialState };
