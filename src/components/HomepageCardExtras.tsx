import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import styles from "./HomepageCardExtras.module.css";

const HomepageCardExtras: FunctionComponent = () => {
  const onButtonLoadMoreClick = useCallback(() => {
    // Please sync "Blog page" to the project
  }, []);

  return (
    <section className={styles.bespokePartnerships}>
      <div className={styles.text}>
        <div className={styles.titlesubtext}>
          <h1 className={styles.bespokeSpaces}>Bespoke spaces</h1>
          <div className={styles.expertlyDesignedTo}>
            Expertly designed to create extraordinary spaces with the flexible
            renter in mind
          </div>
        </div>
        <Button
          className={styles.buttonLoadMore}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#064749",
            borderRadius: "40px",
            "&:hover": { background: "#064749" },
            width: 188,
            height: 48,
          }}
          onClick={onButtonLoadMoreClick}
        >
          Start booking
        </Button>
      </div>
    </section>
  );
};

export default HomepageCardExtras;
