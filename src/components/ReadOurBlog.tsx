import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import "./ReadOurBlog.css";

const ReadOurBlog: FunctionComponent = () => {
  const onButtonLoadMoreClick = useCallback(() => {
    // Please sync "Blog page" to the project
  }, []);

  return (
    <section className="read-our-blog">
      <div className="titletext5">
        <h1 className="read-our-blog1">Read our blog</h1>
      </div>
      <div className="div19">
        <div className="div20">
          <img
            className="unsplash-r80lcluvvm-icon"
            loading="lazy"
            alt=""
            src="/unsplash-r80lcluvvm@2x.png"
          />
          <div className="text5">
            <div className="titletext6">
              <h1 className="turpis-elit-in">
                Turpis elit in dictum eget eget
              </h1>
              <div className="neque-faucibus-pharetra">
                Neque faucibus pharetra condimentum tincidunt commodo velit.
              </div>
            </div>
            <div className="read">
              <img
                className="evaclock-fill-icon2"
                loading="lazy"
                alt=""
                src="/evaclockfill.svg"
              />
              <b className="min-read">1 min read</b>
            </div>
          </div>
        </div>
        <div className="div21">
          <img
            className="unsplashmp0bgas-d1c-icon"
            loading="lazy"
            alt=""
            src="/unsplashmp0bgas-d1c@2x.png"
          />
          <div className="text6">
            <div className="titletext7">
              <h1 className="turpis-elit-in1">
                Turpis elit in dictum eget eget
              </h1>
              <div className="convallis-eu-vel">
                Convallis eu vel fames feugiat et venenatis nulla ipsum.
              </div>
            </div>
            <div className="read1">
              <img
                className="evaclock-fill-icon3"
                alt=""
                src="/evaclockfill.svg"
              />
              <b className="min-read1">1 min read</b>
            </div>
          </div>
        </div>
        <div className="div22">
          <img
            className="unsplashgnvurwjskay-icon"
            loading="lazy"
            alt=""
            src="/unsplashgnvurwjskay@2x.png"
          />
          <div className="text7">
            <div className="titletext8">
              <h1 className="faucibus-egestas-ut">
                Faucibus egestas ut sit purus ultricies at eu
              </h1>
              <div className="viverra-tellus-risus">
                Viverra tellus risus lacus commodo urna fringilla cursus nulla
                amet.
              </div>
            </div>
            <div className="read2">
              <img
                className="evaclock-fill-icon4"
                alt=""
                src="/evaclockfill.svg"
              />
              <b className="min-read2">3 min read</b>
            </div>
          </div>
        </div>
        <div className="div23">
          <img
            className="unsplashszyukewsdla-icon"
            loading="lazy"
            alt=""
            src="/unsplashszyukewsdla@2x.png"
          />
          <div className="text8">
            <div className="titletext9">
              <h1 className="feugiat-gravida-sed">
                Feugiat gravida sed sit lacus sagittis
              </h1>
              <div className="pellentesque-ultrices-hendreri">
                Pellentesque ultrices hendrerit lacus lectus.
              </div>
            </div>
            <div className="read3">
              <img
                className="evaclock-fill-icon5"
                alt=""
                src="/evaclockfill.svg"
              />
              <b className="min-read3">3 min read</b>
            </div>
          </div>
        </div>
        <div className="div24">
          <img
            className="unsplash3wyldrjxh-e-icon"
            loading="lazy"
            alt=""
            src="/unsplash3wyldrjxhe@2x.png"
          />
          <div className="text9">
            <div className="titletext10">
              <h1 className="feugiat-gravida-sed1">
                Feugiat gravida sed sit lacus sagittis
              </h1>
              <div className="dolor-elit-viverra">
                Dolor elit viverra facilisis aliquam, aliquet arcu nec.
              </div>
            </div>
            <div className="read4">
              <img
                className="evaclock-fill-icon6"
                alt=""
                src="/evaclockfill.svg"
              />
              <b className="min-read4">3 min read</b>
            </div>
          </div>
        </div>
      </div>
      <Button
        className="button-load-more1"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "18",
          background: "#064749",
          borderRadius: "40px",
          "&:hover": { background: "#064749" },
          width: 166,
          height: 48,
        }}
        onClick={onButtonLoadMoreClick}
      >
        Read more
      </Button>
    </section>
  );
};

export default ReadOurBlog;
