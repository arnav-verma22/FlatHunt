import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import styles from "./ReadOurBlog.module.css";

const ReadOurBlog: FunctionComponent = () => {
  const onButtonLoadMoreClick = useCallback(() => {
    // Please sync "Blog page" to the project
  }, []);

  return (
    <section className={styles.readOurBlog}>
      <div className={styles.titletext}>
        <h1 className={styles.readOurBlog1}>Read our blog</h1>
      </div>
      <div className={styles.div}>
        <div className={styles.div1}>
          <img
            className={styles.unsplashR80lcluvvmIcon}
            loading="lazy"
            alt=""
            src="/unsplash-r80lcluvvm@2x.png"
          />
          <div className={styles.text}>
            <div className={styles.titletext1}>
              <h1 className={styles.turpisElitIn}>
                Turpis elit in dictum eget eget
              </h1>
              <div className={styles.nequeFaucibusPharetra}>
                Neque faucibus pharetra condimentum tincidunt commodo velit.
              </div>
            </div>
            <div className={styles.read}>
              <img
                className={styles.evaclockFillIcon}
                loading="lazy"
                alt=""
                src="/evaclockfill.svg"
              />
              <b className={styles.minRead}>1 min read</b>
            </div>
          </div>
        </div>
        <div className={styles.div2}>
          <img
            className={styles.unsplashmp0bgasD1cIcon}
            loading="lazy"
            alt=""
            src="/unsplashmp0bgas-d1c@2x.png"
          />
          <div className={styles.text1}>
            <div className={styles.titletext2}>
              <h1 className={styles.turpisElitIn1}>
                Turpis elit in dictum eget eget
              </h1>
              <div className={styles.convallisEuVel}>
                Convallis eu vel fames feugiat et venenatis nulla ipsum.
              </div>
            </div>
            <div className={styles.read1}>
              <img
                className={styles.evaclockFillIcon1}
                alt=""
                src="/evaclockfill.svg"
              />
              <b className={styles.minRead1}>1 min read</b>
            </div>
          </div>
        </div>
        <div className={styles.div3}>
          <img
            className={styles.unsplashgnvurwjskayIcon}
            loading="lazy"
            alt=""
            src="/unsplashgnvurwjskay@2x.png"
          />
          <div className={styles.text2}>
            <div className={styles.titletext3}>
              <h1 className={styles.faucibusEgestasUt}>
                Faucibus egestas ut sit purus ultricies at eu
              </h1>
              <div className={styles.viverraTellusRisus}>
                Viverra tellus risus lacus commodo urna fringilla cursus nulla
                amet.
              </div>
            </div>
            <div className={styles.read2}>
              <img
                className={styles.evaclockFillIcon2}
                alt=""
                src="/evaclockfill.svg"
              />
              <b className={styles.minRead2}>3 min read</b>
            </div>
          </div>
        </div>
        <div className={styles.div4}>
          <img
            className={styles.unsplashszyukewsdlaIcon}
            loading="lazy"
            alt=""
            src="/unsplashszyukewsdla@2x.png"
          />
          <div className={styles.text3}>
            <div className={styles.titletext4}>
              <h1 className={styles.feugiatGravidaSed}>
                Feugiat gravida sed sit lacus sagittis
              </h1>
              <div className={styles.pellentesqueUltricesHendreri}>
                Pellentesque ultrices hendrerit lacus lectus.
              </div>
            </div>
            <div className={styles.read3}>
              <img
                className={styles.evaclockFillIcon3}
                alt=""
                src="/evaclockfill.svg"
              />
              <b className={styles.minRead3}>3 min read</b>
            </div>
          </div>
        </div>
        <div className={styles.div5}>
          <img
            className={styles.unsplash3wyldrjxhEIcon}
            loading="lazy"
            alt=""
            src="/unsplash3wyldrjxhe@2x.png"
          />
          <div className={styles.text4}>
            <div className={styles.titletext5}>
              <h1 className={styles.feugiatGravidaSed1}>
                Feugiat gravida sed sit lacus sagittis
              </h1>
              <div className={styles.dolorElitViverra}>
                Dolor elit viverra facilisis aliquam, aliquet arcu nec.
              </div>
            </div>
            <div className={styles.read4}>
              <img
                className={styles.evaclockFillIcon4}
                alt=""
                src="/evaclockfill.svg"
              />
              <b className={styles.minRead4}>3 min read</b>
            </div>
          </div>
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
