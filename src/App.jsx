import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Films from "./pages/Films";
import Serials from "./pages/Serials";
import Header from "./components/Header";

const App = () => {
    return (
        <div className="App">
            <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/films" element={<Films/>}/>
              <Route path="/serials" element={<Serials/>}/>

          </Routes>
        </div>
    );
};

export default App;