import logo from './logo.svg';
import './App.css';
import Course from './Components/Course';
import Addcourse from './Components/Addcourse';
import Header from './Components/Header';

import { BrowserRouter,Route } from 'react-router-dom';
import Heading from './Components/Heading';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
     <Heading/>
  <Route path="/" exact component={Addcourse}/>
  <Route path="/course" exact component={Course}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
