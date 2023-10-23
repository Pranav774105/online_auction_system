import './App.css';
import AppNavBar from "./AppNavBar/AppNavBar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import AppRoutes from "./AppRoutes/AppRoutes";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
       <AppNavBar/>
       <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
