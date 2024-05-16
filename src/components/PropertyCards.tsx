import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import "./PropertyCards.css";

const PropertyCards: FunctionComponent = memo(() => {
  const navigate = useNavigate();

  const onInputFieldContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  const onContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  const onContainer2Click = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  const onContainer1Click = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  const onContainer3Click = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  const onContainer12Click = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  const onContainer4Click = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  const onContainer13Click = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  return (
    <div className="blocks">
      <div className="search-icon">
        <PropertyCard
          image="/rectangle-222@2x.png"
          fluentbed24Filled="/fluentbed24filled.svg"
          bedroom="1 bedroom"
          bath="1 bath"
          prop="£3490"
          onContainer4Click={onInputFieldContainerClick}
          propertName="/titlesubtitle@2x.png"
        />
        <PropertyCard
          image="/rectangle-222-1@2x.png"
          fluentbed24Filled="/fluentbed24filled.svg"
          bedroom="2 bedroom"
          bath="2 bath"
          prop="£3990"
          onContainer4Click={onContainerClick}
          propertName="/titlesubtitle@2x.png"
        />
      </div>
      <div className="search-icon1">
        <PropertyCard
          image="/rectangle-222-2@2x.png"
          fluentbed24Filled="/fluentbed24filled.svg"
          bedroom="1 bedroom"
          bath="1 bath"
          prop="£3490"
          onContainer4Click={onContainer2Click}
          propertName="/titlesubtitle@2x.png"
        />
        <PropertyCard
          image="/rectangle-222-3@2x.png"
          fluentbed24Filled="/fluentbed24filled.svg"
          bedroom="2 bedroom"
          bath="2 bath"
          prop="£3990"
          onContainer4Click={onContainer1Click}
          propertName="/titlesubtitle@2x.png"
        />
      </div>
      <div className="search-icon2">
        <PropertyCard
          image="/rectangle-222-4@2x.png"
          fluentbed24Filled="/fluentbed24filled.svg"
          bedroom="1 bedroom"
          bath="1 bath"
          prop="£3490"
          onContainer4Click={onContainer3Click}
          propertName="/titlesubtitle@2x.png"
        />
        <PropertyCard
          image="/rectangle-222-5@2x.png"
          fluentbed24Filled="/fluentbed24filled.svg"
          bedroom="2 bedroom"
          bath="2 bath"
          prop="£3990"
          onContainer4Click={onContainer12Click}
          propertName="/titlesubtitle@2x.png"
        />
      </div>
      <div className="search-icon3">
        <PropertyCard
          image="/rectangle-222-6@2x.png"
          fluentbed24Filled="/fluentbed24filled.svg"
          bedroom="1 bedroom"
          bath="1 bath"
          prop="£3490"
          onContainer4Click={onContainer4Click}
          propertName="/titlesubtitle@2x.png"
        />
        <PropertyCard
          image="/rectangle-222-7@2x.png"
          fluentbed24Filled="/fluentbed24filled.svg"
          bedroom="2 bedroom"
          bath="2 bath"
          prop="£3990"
          onContainer4Click={onContainer13Click}
          propertName="/titlesubtitle@2x.png"
        />
      </div>
    </div>
  );
});

export default PropertyCards;
