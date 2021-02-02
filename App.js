import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchPage from './SearchPage';
import { useStateValue } from './StateProvider';
import Login from './Login';


function App() {
  const [{ user }, dispatch ] = useStateValue();
  return (
    <div className="app">
      { !user ? (
       <Login />
     ) : (
       <div>
        <Router>
      <Header /> 
        <Switch>
          <Route path='/search/:searchTerm'>
          <div className='app__page'>
              <Sidebar />
              <SearchPage />
              </div>
          </Route>
          <Route path='/'>
              <div className='app__page'>
                <Sidebar />
                <RecommendedVideos />
              </div>
          </Route>
        </Switch>
      </Router>
      </div>
     ) }
    </div>
  );
}

export default App;
