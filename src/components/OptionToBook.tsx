import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import "./OptionToBook.css";

const OptionToBook: FunctionComponent = () => {
  const onButtonContinueBookingClick = useCallback(() => {
    // Please sync "Checkout page A" to the project
  }, []);

  return (
    <div className="option-to-book">
      <b className="month">£3990 / Month</b>
      <div className="points1">
        <div className="moves">
          <div className="move-in">
            <b className="move-in1">Move in</b>
            <Button
              className="input-move-in"
              startIcon={
                <img width="20px" height="20px" src="/evacalendarfill.svg" />
              }
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#181a18",
                fontSize: "18",
                background: "#fff",
                borderRadius: "12px",
                "&:hover": { background: "#fff" },
                height: 48,
              }}
            >
              31.12.2021
            </Button>
          </div>
          <div className="move-out">
            <b className="move-out1">Move out</b>
            <Button
              className="input-move-out"
              startIcon={
                <img width="20px" height="20px" src="/evacalendarfill-1.svg" />
              }
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#181a18",
                fontSize: "18",
                background: "#fff",
                borderRadius: "12px",
                "&:hover": { background: "#fff" },
                height: 48,
              }}
            >
              31.02.2022
            </Button>
          </div>
        </div>
        <div className="guests1">
          <div className="guests2">
            <img
              className="evapeople-fill-icon1"
              loading="lazy"
              alt=""
              src="/evapeoplefill.svg"
            />
            <b className="guests3">Guests</b>
          </div>
          <div className="quantity">
            <img
              className="evaplus-fill-icon"
              loading="lazy"
              alt=""
              src="/evaplusfill1.svg"
            />
            <b className="b">1</b>
            <img
              className="evaminus-fill-icon"
              loading="lazy"
              alt=""
              src="/evaminusfill.svg"
            />
          </div>
        </div>
        <div className="all-utilities-are">All utilities are included</div>
      </div>
      <div className="costs">
        <div className="btn-continue">
          <div className="average-monthy-rent">Average monthy rent</div>
          <div className="numbers">
            <div className="div7">£3700</div>
            <div className="incl-vat">incl. VAT</div>
          </div>
        </div>
        <div className="btn-continue1">
          <div className="pay-upon-booking">
            <b className="pay-upon-booking1">Pay upon booking</b>
            <img
              className="evaalert-circle-fill-icon"
              alt=""
              src="/evaalertcirclefill.svg"
            />
          </div>
          <div className="numbers1">
            <b className="b1">£3989.23</b>
            <div className="incl-vat1">incl. VAT</div>
          </div>
        </div>
        <div className="btn-continue2">
          <div className="total-costs-parent">
            <div className="total-costs">
              <div className="total-costs1">Total costs</div>
              <img
                className="evaalert-circle-fill-icon1"
                alt=""
                src="/evaalertcirclefill.svg"
              />
            </div>
            <div className="show-more">
              <div className="show-more1">Show more</div>
            </div>
          </div>
          <div className="numbers2">
            <div className="div8">£4001.70</div>
            <div className="incl-vat2">incl. VAT</div>
          </div>
        </div>
      </div>
      <div className="buttom">
        <Button
          className="button-continue-booking"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#064749",
            borderRadius: "40px",
            "&:hover": { background: "#064749" },
            width: 223,
            height: 48,
          }}
          onClick={onButtonContinueBookingClick}
        >
          Continue booking
        </Button>
        <div className="when-you-book">
          When you book this apartment, your reservation will be cofirmed
          instantly
        </div>
      </div>
    </div>
  );
};

export default OptionToBook;
