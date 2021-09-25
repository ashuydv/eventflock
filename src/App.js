import { Switch, Route } from 'react-router-dom';
import './App.css';
import EventDetails from './components/EventDetails';
import Events from './components/Events';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return ( 
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/events' component={Events} />
        <Route exact path='/events/:eventId' component={EventDetails} />
      </Switch>
    </div>
  );
}

export default App;
