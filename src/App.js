import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Count from './components/Count/Count';
import Control from './components/Count/Control';

function App() {
  //reducer function must have two parameter state,action
  // const reducer = (state = {}, action) => {
  //   if (action.type === 'a') {
  //     return {
  //       a: 'dkdflkdlk'
  //     }
  //   }
  //   return state;
  // }
  // const store = createStore(reducer);
  // store.subscribe(() => {
  //   console.log(store.getState())
  // })
  // store.dispatch({ type: 'a' });
  // store.dispatch({ type: 'a' });
  // store.dispatch({ type: 'a' });
  // store.dispatch({ type: 'a' });
  // store.dispatch({ type: 'a' });
  // store.dispatch({ type: 'a' });
  // store.dispatch({ type: 'a' });
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <h2>
            this is something
          </h2>
        </div>
        <Count />
        <Control />
      </div>
    </Provider>

  );
}

export default App;
