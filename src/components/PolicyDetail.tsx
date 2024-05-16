import { FunctionComponent } from "react";
import "./PolicyDetail.css";

const PolicyDetail: FunctionComponent = () => {
  return (
    <div className="policy-detail">
      <div className="policy-detail1">
        <h1 className="policy-detail2">Policy detail</h1>
      </div>
      <div className="data-aggregator">
        <div className="hourse-rules">
          <b className="house-rules">House rules</b>
          <div className="points3">
            <div className="map-button-plus">
              <img
                className="evaclock-fill-icon"
                loading="lazy"
                alt=""
                src="/evaclockfill1.svg"
              />
              <div className="checkin-time">Checkin time</div>
            </div>
            <div className="map-button-plus1">
              <img
                className="evaclock-fill-icon1"
                loading="lazy"
                alt=""
                src="/evaclockfill1.svg"
              />
              <div className="checkout-time">Checkout time</div>
            </div>
            <div className="map-button-plus2">
              <img
                className="foundationno-smoking-icon"
                loading="lazy"
                alt=""
                src="/foundationnosmoking.svg"
              />
              <div className="no-smoking">No smoking</div>
            </div>
            <div className="map-button-plus3">
              <img
                className="ictwotone-pets-icon"
                loading="lazy"
                alt=""
                src="/ictwotonepets.svg"
              />
              <div className="no-pets">No pets</div>
            </div>
            <div className="map-button-plus4">
              <img
                className="bxbxs-party-icon"
                loading="lazy"
                alt=""
                src="/bxbxsparty.svg"
              />
              <div className="no-parties-or">No parties or events</div>
            </div>
          </div>
        </div>
        <div className="cancellation-policy">
          <b className="cancellation-policy1">Cancellation Policy</b>
          <div className="div8">
            <img
              className="evaclose-circle-fill-icon"
              loading="lazy"
              alt=""
              src="/evaclosecirclefill.svg"
            />
            <div className="free-cancellation-up-container">
              <p className="free-cancellation-up">{`Free Cancellation up to 24hrs `}</p>
              <p className="before-checkin">before checkin</p>
            </div>
          </div>
        </div>
        <div className="health-safty">
          <b className="health-safty1">{`Health & Safty`}</b>
          <div className="div9">
            <img
              className="evashield-fill-icon"
              alt=""
              src="/evashieldfill.svg"
            />
            <div className="cleaner-in-accordance-container">
              <p className="cleaner-in-accordance">{`Cleaner in accordance with our `}</p>
              <p className="covid-safe-cleaning">COVID safe cleaning policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyDetail;
