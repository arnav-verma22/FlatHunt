import { FunctionComponent } from "react";
import DetailAndBooking from "./DetailAndBooking";
import Amenities from "./Amenities";
import MoreDetails from "./MoreDetails";
import PropertyLocation from "./PropertyLocation";
import PolicyDetail from "./PolicyDetail";
import "./AllDetails.css";

const AllDetails: FunctionComponent = () => {
  return (
    <section className="if-else">
      <DetailAndBooking />
      <Amenities />
      <MoreDetails
        description="Ultricies etiam sit auctor aenean donec nunc, elementum etiam nisl. Sed arcu, sed elit egestas faucibus pellentesque. Morbi faucibus faucibus nam volutpat arcu lorem pharetra a. Pretium dolor nunc, dolor elit lectus sit amet sit. Elit enim mi ornare id ultricies accumsan proin amet."
        heading="Neighbourhood"
      />
      <PropertyLocation />
      <PolicyDetail />
    </section>
  );
};

export default AllDetails;
