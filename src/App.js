import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";
import Inspiration from "./pages/Inspiration";
//import Header from "./components/Header";

function App() {
  // const Layout = () => {
  //   return (
  //     <div>
  //       <Header />
  //     </div>
  //   );
  // };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contacts",
      element: <Contacts />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/inspiration",
      element: <Inspiration />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
