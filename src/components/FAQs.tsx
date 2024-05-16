import { FunctionComponent } from "react";
import Question from "./Question";
import "./FrameComponent1.css";

const FAQs: FunctionComponent = () => {
  return (
    <section className="output-formatter">
      <div className="frequently-asked-questions1">
        <h1 className="frequently-asked-questions2">
          Frequently Asked Questions
        </h1>
        <div className="questions1">
          <Question
            integerMorbiSemperSodales="Integer morbi semper sodales sit facilisi habitant pulvinar sed venenatis?"
            magnisCongueNequeSociisUt="Magnis congue neque sociis ut nisl. Quis dui lobortis lectus viverra."
          />
          <Question
            integerMorbiSemperSodales="Massa massa nulla rhoncus a quam consectetur sed purus, enim?"
            magnisCongueNequeSociisUt="Nunc molestie sit in sed sodales. Bibendum pharetra, id viverra suspendisse pharetra ac aenean neque. Sodales ornare penatibus eros consectetur potenti in feugiat purus. Posuere amet, sodales nibh eget. A et, a ante pretium praesent elementum feugiat pharetra congue."
            propWidth="62.5rem"
            propDisplay="inline-block"
            propDisplay1="unset"
            propAlignSelf="stretch"
          />
          <div className="question-31">
            <b className="dignissim-congue-rutrum1">
              Dignissim congue rutrum pretium nunc sed nibh vitae tortor ut?
            </b>
            <img className="close-icon11" alt="" src="/close-2.svg" />
          </div>
          <div className="question-41">
            <b className="vulputate-imperdiet-fusce1">
              Vulputate imperdiet fusce vivamus nunc leo morbi scelerisque in?
            </b>
            <img className="close-icon12" alt="" src="/close-2.svg" />
          </div>
          <div className="question-51">
            <b className="sit-rhoncus-rhoncus1">
              Sit rhoncus rhoncus malesuada massa adipiscing arcu, semper ut in?
            </b>
            <img className="close-icon13" alt="" src="/close-2.svg" />
          </div>
          <div className="question-61">
            <b className="vulputate-nisl-non1">
              Vulputate nisl non neque iaculis lacus dui, habitant gravida?
            </b>
            <img className="close-icon14" alt="" src="/close-2.svg" />
          </div>
          <div className="question-71">
            <b className="est-felis-a1">
              Est felis a velit at vitae venenatis rhoncus?
            </b>
            <img className="close-icon15" alt="" src="/close-2.svg" />
          </div>
          <div className="question-81">
            <b className="eget-nam-accumsan1">
              Eget nam accumsan elementum accumsan imperdiet eu, cras?
            </b>
            <img className="close-icon16" alt="" src="/close-2.svg" />
          </div>
          <div className="question-91">
            <b className="fermentum-et-semper1">
              Fermentum et semper aliquet justo, facilisis?
            </b>
            <img className="close-icon17" alt="" src="/close-2.svg" />
          </div>
          <div className="question-101">
            <b className="a-vulputate-est1">
              A vulputate est diam tempus condimentum in?
            </b>
            <img className="close-icon18" alt="" src="/close-2.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
