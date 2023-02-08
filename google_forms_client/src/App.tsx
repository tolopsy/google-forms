import {Routes} from "react-router-dom";
import {Route} from "react-router";
import Home from './scenes/home/Home';
import FormManager from "./scenes/formManager";
import {getPath} from "./routing";


function App() {
  return (
    <Routes>
      <Route path={getPath("home")} element={<Home/>}/>
      <Route path={getPath("manageForm")} element={<FormManager/>}/>
    </Routes>
  );
}

export default App;
