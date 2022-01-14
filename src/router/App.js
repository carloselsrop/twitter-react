import { Routes, Route } from "react-router-dom";
import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Register from '../pages/Register';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;