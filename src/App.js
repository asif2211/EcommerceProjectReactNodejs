import {Provider} from 'react-redux'
import Grid from './pages/Main';
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <Grid/>
      </Provider>
  );
}

export default App;
