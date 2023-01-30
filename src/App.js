import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";
import Posts from "./pages/Posts";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  // const Layout = () => {
  //   return (
  //     <div className="">
  //       <div>
  //         <Header />
  //         <Outlet />
  //         <Footer />
  //       </div>
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
      path: "/posts",
      element: <Posts />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
