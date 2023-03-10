import React from "react";
import { Routes, Route} from "React-router-dom";
import Home from "./components/Home/Home.jsx";
import CreateCharacter from "./components/CreateCharacter/CreateCharacter.jsx";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail.jsx";
import Nav from "./components/Nav/Nav.jsx";


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/character/:id" component={CharacterDetail} />
        <Route path="/character/create" component={CreateCharacter} />
      </Routes>
    </div>
  );
}

export default App;