import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormSumbit from "./complemetos/FormSumbit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat-room" element={<div className="room-container"><FormSumbit /></div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
