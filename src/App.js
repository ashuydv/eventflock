import { Switch, Route } from 'react-router-dom';
import './App.css';
import Community from './components/Community';
import Contact from './components/Contact';
import Courses from './components/Courses';
import EventDetails from './components/EventDetails';
import EventExplorePage from './components/EventExplorePage';
import Events from './components/Events';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return ( 
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/explore' component={Events} />
        <Route exact path='/events/:productId' component={EventDetails} />
        <Route exact path='/courses' component={Courses} />
        <Route exact path='/explore' component={EventExplorePage}/>
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/community' component={Community} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
