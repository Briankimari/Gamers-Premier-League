import { BrowserRouter , Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/Main";
import Setprofile from "./components/userProfile/Setprofile";
import Header from "./components/playerForm/Header";
import Fixtures from "./components/gameFixture/Fixtures";
import Transfer from "./components/transfers/Transfer";
import TopScores from "./components/topScorers/TopScorers";
import Results from "./components/results/Results";
import Join from "./pages/Join";

import Admin from "./pages/admin/Admin";



function App() {
 
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="profile" element={<Setprofile />} />
        <Route path="player-form" element={<Header />} />
        <Route path="fixtures" element={<Fixtures/>} />
        <Route path="transfers" element={<Transfer/>} />
        <Route path="top-scorers" element={<TopScores/>}/>
        <Route path="results" element={<Results/>}/>
        <Route path="join-gpl" element={<Join/>}/>
        <Route path='Admin' element={<Admin/>}/>
       
       
     
            </Routes>
    </BrowserRouter>
  );
}

export default App;
