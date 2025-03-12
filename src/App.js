import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import PSampleDetails from './PSampleDetails';
import Error404 from './404';

function App() {
 
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Switch>
          <Route exact path ="/">
            <Home />
          </Route>
          <Route path ="/create">
            <Create />
          </Route>
          <Route path ="/sample/:id">
            <PSampleDetails />
          </Route>
          <Route path ="*">
            <Error404 />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
