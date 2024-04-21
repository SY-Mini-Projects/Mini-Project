import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import 'bootstrap/dist/js/bootstrap.bundle';
import Signup from './screens/Signup';
import { CartProvider } from './components/contextReducer';
import MyOrder from './screens/MyOrder';
function App() {
  return (
    <CartProvider>
       <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createuser" element={<Signup />} />
        <Route path="/myOrder" element={<MyOrder />} />
      </Routes>
    </div>
    </Router>
    </CartProvider>
   
  
  );
}

export default App;
 