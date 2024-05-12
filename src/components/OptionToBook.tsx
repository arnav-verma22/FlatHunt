import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import styles from "./OptionToBook.module.css";

const OptionToBook: FunctionComponent = () => {
  const onButtonContinueBookingClick = useCallback(() => {
    // Please sync "Checkout page A" to the project
  }, []);

  return (
    <div className={styles.optionToBook}>
      <b className={styles.month}>£3990 / Month</b>
      <div className={styles.points}>
        <div className={styles.moves}>
          <div className={styles.moveIn}>
            <b className={styles.moveIn1}>Move in</b>
            <Button
              className={styles.inputMoveIn}
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
          <div className={styles.moveOut}>
            <b className={styles.moveOut1}>Move out</b>
            <Button
              className={styles.inputMoveOut}
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
        <div className={styles.guests}>
          <div className={styles.guests1}>
            <img
              className={styles.evapeopleFillIcon}
              loading="lazy"
              alt=""
              src="/evapeoplefill.svg"
            />
            <b className={styles.guests2}>Guests</b>
          </div>
          <div className={styles.quantity}>
            <img
              className={styles.evaplusFillIcon}
              loading="lazy"
              alt=""
              src="/evaplusfill1.svg"
            />
            <b className={styles.b}>1</b>
            <img
              className={styles.evaminusFillIcon}
              loading="lazy"
              alt=""
              src="/evaminusfill.svg"
            />
          </div>
        </div>
        <div className={styles.allUtilitiesAre}>All utilities are included</div>
      </div>
      <div className={styles.costs}>
        <div className={styles.btnContinue}>
          <div className={styles.averageMonthyRent}>Average monthy rent</div>
          <div className={styles.numbers}>
            <div className={styles.div}>£3700</div>
            <div className={styles.inclVat}>incl. VAT</div>
          </div>
        </div>
        <div className={styles.btnContinue1}>
          <div className={styles.payUponBooking}>
            <b className={styles.payUponBooking1}>Pay upon booking</b>
            <img
              className={styles.evaalertCircleFillIcon}
              alt=""
              src="/evaalertcirclefill.svg"
            />
          </div>
          <div className={styles.numbers1}>
            <b className={styles.b1}>£3989.23</b>
            <div className={styles.inclVat1}>incl. VAT</div>
          </div>
        </div>
        <div className={styles.btnContinue2}>
          <div className={styles.totalCostsParent}>
            <div className={styles.totalCosts}>
              <div className={styles.totalCosts1}>Total costs</div>
              <img
                className={styles.evaalertCircleFillIcon1}
                alt=""
                src="/evaalertcirclefill.svg"
              />
            </div>
            <div className={styles.showMore}>
              <div className={styles.showMore1}>Show more</div>
            </div>
          </div>
          <div className={styles.numbers2}>
            <div className={styles.div1}>£4001.70</div>
            <div className={styles.inclVat2}>incl. VAT</div>
          </div>
        </div>
      </div>
      <div className={styles.buttom}>
        <Button
          className={styles.buttonContinueBooking}
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
        <div className={styles.whenYouBook}>
          When you book this apartment, your reservation will be cofirmed
          instantly
        </div>
      </div>
    </div>
  );
};

export default OptionToBook;
