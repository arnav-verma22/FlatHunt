import { FunctionComponent } from "react";
import Question from "./Question";
import styles from "./FrameComponent1.module.css";

const FAQs: FunctionComponent = () => {
  return (
    <section className={styles.outputFormatter}>
      <div className={styles.frequentlyAskedQuestions}>
        <h1 className={styles.frequentlyAskedQuestions1}>
          Frequently Asked Questions
        </h1>
        <div className={styles.questions}>
          <Question
            integerMorbiSemperSodales="Integer morbi semper sodales sit facilisi habitant pulvinar sed venenatis?"
            magnisCongueNequeSociisUt="Magnis congue neque sociis ut nisl. Quis dui lobortis lectus viverra."
          />
          <Question
            integerMorbiSemperSodales="Massa massa nulla rhoncus a quam consectetur sed purus, enim?"
            magnisCongueNequeSociisUt="Nunc molestie sit in sed sodales. Bibendum pharetra, id viverra suspendisse pharetra ac aenean neque. Sodales ornare penatibus eros consectetur potenti in feugiat purus. Posuere amet, sodales nibh eget. A et, a ante pretium praesent elementum feugiat pharetra congue."
            propWidth="1000px"
            propDisplay="inline-block"
            propDisplay1="unset"
            propAlignSelf="stretch"
          />
          <div className={styles.question3}>
            <b className={styles.dignissimCongueRutrum}>
              Dignissim congue rutrum pretium nunc sed nibh vitae tortor ut?
            </b>
            <img className={styles.closeIcon} alt="" src="/close-2.svg" />
          </div>
          <div className={styles.question4}>
            <b className={styles.vulputateImperdietFusce}>
              Vulputate imperdiet fusce vivamus nunc leo morbi scelerisque in?
            </b>
            <img className={styles.closeIcon1} alt="" src="/close-2.svg" />
          </div>
          <div className={styles.question5}>
            <b className={styles.sitRhoncusRhoncus}>
              Sit rhoncus rhoncus malesuada massa adipiscing arcu, semper ut in?
            </b>
            <img className={styles.closeIcon2} alt="" src="/close-2.svg" />
          </div>
          <div className={styles.question6}>
            <b className={styles.vulputateNislNon}>
              Vulputate nisl non neque iaculis lacus dui, habitant gravida?
            </b>
            <img className={styles.closeIcon3} alt="" src="/close-2.svg" />
          </div>
          <div className={styles.question7}>
            <b className={styles.estFelisA}>
              Est felis a velit at vitae venenatis rhoncus?
            </b>
            <img className={styles.closeIcon4} alt="" src="/close-2.svg" />
          </div>
          <div className={styles.question8}>
            <b className={styles.egetNamAccumsan}>
              Eget nam accumsan elementum accumsan imperdiet eu, cras?
            </b>
            <img className={styles.closeIcon5} alt="" src="/close-2.svg" />
          </div>
          <div className={styles.question9}>
            <b className={styles.fermentumEtSemper}>
              Fermentum et semper aliquet justo, facilisis?
            </b>
            <img className={styles.closeIcon6} alt="" src="/close-2.svg" />
          </div>
          <div className={styles.question10}>
            <b className={styles.aVulputateEst}>
              A vulputate est diam tempus condimentum in?
            </b>
            <img className={styles.closeIcon7} alt="" src="/close-2.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
