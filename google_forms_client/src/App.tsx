import {Routes} from "react-router-dom";
import {Route} from "react-router";
import Home from './scenes/home/Home';
import {getPath} from "./routing";


function App() {
  return (
    <Routes>
      <Route path={getPath("home")} element={<Home/>}/>
    </Routes>
  );
}

export default App;
