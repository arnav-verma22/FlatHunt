import { FunctionComponent, memo } from "react";
import "./SearchMap.css";

const SearchMap: FunctionComponent = memo(() => {
  return (
    <div className="map2">
      <img className="map-icon1" alt="" src="/map2@2x.png" />
      <div className="button-plus-container">
        <div className="button-plus1">
          <img
            className="evaplus-fill-icon2"
            alt=""
            src="/evaplusfill-11.svg"
          />
        </div>
        <div className="button-minus1">
          <img
            className="evaminus-fill-icon2"
            alt=""
            src="/evaminusfill-1.svg"
          />
        </div>
      </div>
      <div className="map-inner">
        <div className="bg-group">
          <div className="bg2" />
          <b className="b2">2</b>
        </div>
      </div>
      <div className="map-child">
        <div className="frame-parent3">
          <div className="bg-container">
            <div className="bg3" />
            <b className="b3">20</b>
          </div>
          <div className="frame-wrapper">
            <div className="bg-parent1">
              <div className="bg4" />
              <b className="b4">12</b>
            </div>
          </div>
          <div className="frame-wrapper1">
            <div className="frame-parent4">
              <div className="frame-wrapper2">
                <div className="bg-parent2">
                  <div className="bg5" />
                  <b className="b5">16</b>
                </div>
              </div>
              <div className="bg-parent3">
                <div className="bg6" />
                <b className="b6">1</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-inner1">
        <div className="frame-parent5">
          <div className="frame-wrapper3">
            <div className="bg-parent4">
              <div className="bg7" />
              <b className="b7">8</b>
            </div>
          </div>
          <div className="frame-parent6">
            <div className="bg-parent5">
              <div className="bg8" />
              <b className="f-a-qtitle">40</b>
            </div>
            <div className="frame-wrapper4">
              <div className="bg-parent6">
                <div className="bg9" />
                <b className="b8">2</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SearchMap;
