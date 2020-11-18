import {Provider} from 'react-redux'
import Grid from './pages/Main';
import store from './store'
import {BrowserRouter as  Router, Switch,Route } from "react-router-dom";
import Signin from './pages/User/Signin/Signin';
import Main from './pages/Main';
function App() {
  return (
    <Router>
      <Provider store={store}>
      <Grid/>
      </Provider>
        
        
        <Switch>
        {/* <Route path="/" exact component={Main} /> */}
          <Route path="/Signin" exact component={Signin} />
          {/* <Route path="/Projects" component={Projects} />
          <Route path="/Contacts" component={Contacts} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Resume" component={Resume} /> */}
        </Switch> 
        
       
      </Router>
    

   
  );
}

export default App;
