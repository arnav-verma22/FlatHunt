import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import SearchResultsAndMap from "../components/SearchResultsAndMap";
import CityDetails from "../components/CityDetails";
import Footer from "../components/Footer";
import "./BookingPage.css";

const BookingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLandloardsTextClick = useCallback(() => {
    navigate("/landlords-page");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    // Please sync "Blog page" to the project
  }, []);

  const onContactsTextClick = useCallback(() => {
    // Please sync "Contacts page" to the project
  }, []);

  const onHomeText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBlogText1Click = useCallback(() => {
    // Please sync "Blog page" to the project
  }, []);

  return (
    <div className="booking-page">
      <Header
        logo="/logo@2x.png"
        onHomeTextClick={onHomeTextClick}
        onLandloardsTextClick={onLandloardsTextClick}
        onBlogTextClick={onBlogTextClick}
        onContactsTextClick={onContactsTextClick}
      />
      <SearchFilter />
      <SearchResultsAndMap />
      <CityDetails />
      <Footer
        logo="/logo-1@2x.png"
        evalinkedinFill="/evalinkedinfill1.svg"
        evafacebookFill="/evafacebookfill.svg"
        evatwitterFill="/evatwitterfill.svg"
        onHomeText1Click={onHomeText1Click}
        onBlogText1Click={onBlogText1Click}
      />
    </div>
  );
};

export default BookingPage;
