import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { OurService } from "./pages/OurService";
import { OurTeam } from "./pages/OurTeam";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import { Footer } from './components/Footer';

const router = createBrowserRouter([
  {
    element: (
      <>
      <Header />,
      <Footer />
      </>
    ),


    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/service",
        element: <OurService />
      },
      {
        path: "/team",
        element: <OurTeam />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <ContactUs />
      }
    ]
  }
])

function App() {
  return (
    <div className=' h-screen bg-[#fcfcfc] font-roboto text-[#020617]'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
