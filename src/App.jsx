import { Route, Routes } from "react-router-dom";
import Youtube from "./components/youtube";
import Aboutme from "./Pages/about-me";
function App(){
  return(
    <Routes>
      <Route path="/" element={<Aboutme />} />
    </Routes>
    
  )
}
export default App;