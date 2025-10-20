import './App.css';
import { useState, useEffect } from 'react';
import Explore from './Component/Explore/Explore';
import Header from './Component/Header/Header';
import Slides from './Component/Slides/Slides';
import Button from './Component/Button/Button';
import TextSlides from './Component/Text/TextSlides';
import LoadingScreen from './Component/LoadingScreen/LoadingScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {

  const [loading, setloading] = useState(true);

  let delay = 12000;
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className='mainContainer'>
      <div className='container'>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/explore'>
              <Explore />
            </Route>
            <Route exact path='/'>
                {loading === true ? <LoadingScreen /> : <><Slides /><TextSlides /><Button /></>}
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
