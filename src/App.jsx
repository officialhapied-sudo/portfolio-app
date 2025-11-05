import { Route, Routes } from "react-router-dom";
import Youtube from "./components/youtube";
import Aboutme from "./Pages/about-me";
import "./Styles/Backgroung-black.css";
function App(){
  return(
    <Routes>
      <Route path="/" element={<Aboutme />} />
    </Routes>
    
  )
}
export default App;