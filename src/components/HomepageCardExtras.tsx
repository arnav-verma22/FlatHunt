import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import "./HomepageCardExtras.css";

const HomepageCardExtras: FunctionComponent = () => {
  const onButtonLoadMoreClick = useCallback(() => {
    // Please sync "Blog page" to the project
  }, []);

  return (
    <section className="bespoke-partnerships">
      <div className="text4">
        <div className="titlesubtext">
          <h1 className="bespoke-spaces">Bespoke spaces</h1>
          <div className="expertly-designed-to">
            Expertly designed to create extraordinary spaces with the flexible
            renter in mind
          </div>
        </div>
        <Button
          className="button-load-more"
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
