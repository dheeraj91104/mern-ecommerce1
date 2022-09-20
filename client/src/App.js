import "./App.css";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Productdetails from "./screens/Productdetails";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Ordersscreen from "./screens/Ordersscreen";
import Orderinfo from "./screens/Orderinfo";
import Profilescreen from "./screens/Profilescreen";
import Adminscreen from "./screens/Adminscreen";
import Header from "./components/Header";
import Userslist from "./screens/Userslist";
import Orderslist from "./screens/Orderslist";
import Addproduct from "./screens/Addproduct";
import Productslist from "./screens/Productslist";
import Editproduct from "./screens/Editproduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Homescreen />} />
          <Route path="/product/:id" element={<Productdetails />} />
          <Route path="/cart" exact element={<Cartscreen />} />
          <Route path="/login" exact element={<Loginscreen />} />
          <Route path="/register" exact element={<Registerscreen />} />
          <Route path="/orders" exact element={<Ordersscreen />} />
          <Route path="/orderinfo/:orderid" exact element={<Orderinfo />} />
          <Route path="/profile" exact element={<Profilescreen />} />
          <Route path="/admin" exact element={<Adminscreen />} />

          <Route path="/admin" element={<Userslist />} exact />
          <Route path="/admin/userslist" element={<Userslist />} />
          <Route path="/admin/orderslist" element={<Orderslist />} />
          <Route path="/admin/addnewproduct" element={<Addproduct />} />
          <Route path="/admin/productslist" element={<Productslist />} />
          <Route
            path="/admin/editproduct/:productid"
            element={<Editproduct />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
