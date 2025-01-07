import Bank from "./components/Bank";
import Hello from "./components/Hello"
import {BrowserRouter, Route ,Routes} from "react-router-dom";
import Homepage from "./page/Homepage";
import DashBorad from "./page/DashBorad";
import PageNotFound from "./page/PageNotFound";
import Nav from "./page/Nav";
import Profile from "./page/Profile";
import Setting from "./page/Setting";
import Product from "./page/Product"
import { createContext } from "react";
import Checkout from "./components/Checkout"
function App() {
  const userContext = createContext();
  return (
        // <BrowserRouter>
        //   <Nav/>
        //     <Routes>
        //       <Route path="/" element={<Homepage/>}/>
        //       <Route path="/Product/:id" element={<Product/>}/>
        //       <Route path="/DashBoard" element={<DashBorad/>}>
        //           <Route path="Profile" element={<Profile/>}/>
        //           <Route path="Setting" element={<Setting/>}/>
        //       </Route>
        //       <Route path="*" element={<PageNotFound/>}/>
        //     </Routes>
        // </BrowserRouter>
    <div>  <Checkout/> </div>
  );
}

export default App
