import { FunctionComponent, useCallback } from "react";
import "./FrameComponent.css";

const FrameComponent: FunctionComponent = () => {
  const onButtonPlusIconClick = useCallback(() => {
    // Please sync "Booking page" to the project
  }, []);

  const onButtonMinusIconClick = useCallback(() => {
    // Please sync "Booking page" to the project
  }, []);

  return (
    <div className="guests-group">
      <div className="guests1">
        <div className="guests-inner">
          <div className="evapeople-fill-parent">
            <img
              className="evapeople-fill-icon"
              loading="lazy"
              alt=""
              src="/evapeoplefill.svg"
            />
            <div className="guests2">Guests</div>
          </div>
        </div>
        <div className="button-plus-parent">
          <img
            className="button-plus-icon"
            loading="lazy"
            alt=""
            src="/button-plus.svg"
            onClick={onButtonPlusIconClick}
          />
          <div className="checkmark-icon-wrapper">
            <b className="checkmark-icon">1</b>
          </div>
          <img
            className="button-minus-icon"
            alt=""
            src="/button-minus.svg"
            onClick={onButtonMinusIconClick}
          />
        </div>
      </div>
      <div className="frame-container">
        <div className="frame-div">
          <div className="fluentbed-24-filled-wrapper">
            <img
              className="fluentbed-24-filled-icon"
              loading="lazy"
              alt=""
              src="/fluentbed24filled.svg"
            />
          </div>
          <div className="frame-parent1">
            <div className="bedrooms-wrapper">
              <div className="bedrooms">Bedrooms:</div>
            </div>
            <div className="studio-wrapper">
              <div className="studio">studio</div>
            </div>
            <div className="bg-parent">
              <div className="bg" />
              <div className="div">1</div>
            </div>
          </div>
          <div className="wrapper">
            <div className="div1">2</div>
          </div>
        </div>
        <div className="container">
          <div className="div2">3</div>
        </div>
      </div>
      <div className="fa-solidbath-parent">
        <img
          className="fa-solidbath-icon"
          loading="lazy"
          alt=""
          src="/fasolidbath.svg"
        />
        <div className="bathrooms">Bathrooms:</div>
        <div className="frame">
          <div className="div3">1</div>
        </div>
        <div className="wrapper1">
          <div className="div4">2</div>
        </div>
        <div className="div5">3</div>
      </div>
      <div className="elwheelchair-parent">
        <img
          className="elwheelchair-icon"
          loading="lazy"
          alt=""
          src="/elwheelchair.svg"
        />
        <div className="disabled-access">Disabled access</div>
      </div>
      <div className="parking">
        <div className="parking-inner">
          <div className="fa-solidcar-alt-parent">
            <img
              className="fa-solidcar-alt-icon"
              loading="lazy"
              alt=""
              src="/fasolidcaralt.svg"
            />
            <div className="parking1">Parking</div>
          </div>
        </div>
        <div className="check">
          <img
            className="evacheckmark-fill-icon"
            loading="lazy"
            alt=""
            src="/evacheckmarkfill.svg"
          />
        </div>
      </div>
      <div className="mdielevator-passenger-parent">
        <img
          className="mdielevator-passenger-icon"
          loading="lazy"
          alt=""
          src="/mdielevatorpassenger.svg"
        />
        <div className="elevator">Elevator</div>
      </div>
      <div className="mdidishwasher-parent">
        <img
          className="mdidishwasher-icon"
          loading="lazy"
          alt=""
          src="/mdidishwasher.svg"
        />
        <div className="dishwasher">Dishwasher</div>
      </div>
      <div className="mdiwashing-machine-parent">
        <img
          className="mdiwashing-machine-icon"
          loading="lazy"
          alt=""
          src="/mdiwashingmachine1.svg"
        />
        <div className="washing-machine">Washing machine</div>
      </div>
    </div>
  );
};

export default FrameComponent;
