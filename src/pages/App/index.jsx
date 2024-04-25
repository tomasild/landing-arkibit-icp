import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Homepage";
import SignIn from "../SignIn";
import Checkout from "../Checkout";
import MyAccount from "../MyAccount";
import NotFound from "../NotFound";
import Contact from "../Contact";
import Products from "../Products";
import Help from "../Help";
import NavbarXL from "../../components/Navbar";
import Layout from "../../components/Layout";

const App = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/products", element: <Products /> },
    { path: "/contact", element: <Contact /> },
    { path: "/support", element: <Help /> },
    { path: "*", element: <NotFound /> },
  ];

  return (
      <Router>
        <NavbarXL />
        <Layout>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Layout>
      </Router>
  );
};

export default App;
