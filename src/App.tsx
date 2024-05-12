import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage1 from "./pages/Homepage1";
import PropertyDetails from "./pages/PropertyDetails";
import Filtres from "./pages/Filtres";
import BookingPage from "./pages/BookingPage";
import LandlordsPage from "./pages/LandlordsPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/property-details":
        title = "";
        metaDescription = "";
        break;
      case "/filtres":
        title = "";
        metaDescription = "";
        break;
      case "/booking-page":
        title = "";
        metaDescription = "";
        break;
      case "/landlords-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage1 />} />
      <Route path="/property-details" element={<PropertyDetails />} />
      <Route path="/filtres" element={<Filtres />} />
      <Route path="/booking-page" element={<BookingPage />} />
      <Route path="/landlords-page" element={<LandlordsPage />} />
    </Routes>
  );
}
export default App;
