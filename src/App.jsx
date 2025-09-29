// import Home from "./Components/HomePage/Home";
import NavBar from "./Components/HomePage/Navbar";
import Footer from "./Components/HomePage/Footer";
import { Outlet } from "react-router-dom";

/* Importing REDUX */
import { Provider } from "react-redux";
import store from "./Components/REDUXToolKit/Store/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="MainAppl">
        <NavBar />
        {/* <Home /> */}
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
