import './styles/interfaceLogin.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormSumbit from "./complemetos/FormSumbit";
import Home from "./complemetos/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat-room" element={<div className="room-container"><FormSumbit /></div>}/>
        <Route path="/" element={<div className='interface-container-g'><Home /></div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
