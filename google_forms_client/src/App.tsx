import {Routes} from "react-router-dom";
import {Route} from "react-router";
import Home from './scenes/home/Home';
import {getRoute} from "./routing";


function App() {
  return (
    <Routes>
      <Route path={getRoute("home")} element={<Home/>}/>
    </Routes>
  );
}

export default App;
