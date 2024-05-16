import { FunctionComponent } from "react";
import Question from "./Question";
import "./FrameComponent1.css";

const FAQs: FunctionComponent = () => {
  return (
    <section className="output-formatter">
      <div className="frequently-asked-questions">
        <h1 className="frequently-asked-questions1">
          Frequently Asked Questions
        </h1>
        <div className="questions">
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
          <div className="question-3">
            <b className="dignissim-congue-rutrum">
              Dignissim congue rutrum pretium nunc sed nibh vitae tortor ut?
            </b>
            <img className="close-icon1" alt="" src="/close-2.svg" />
          </div>
          <div className="question-4">
            <b className="vulputate-imperdiet-fusce">
              Vulputate imperdiet fusce vivamus nunc leo morbi scelerisque in?
            </b>
            <img className="close-icon2" alt="" src="/close-2.svg" />
          </div>
          <div className="question-5">
            <b className="sit-rhoncus-rhoncus">
              Sit rhoncus rhoncus malesuada massa adipiscing arcu, semper ut in?
            </b>
            <img className="close-icon3" alt="" src="/close-2.svg" />
          </div>
          <div className="question-6">
            <b className="vulputate-nisl-non">
              Vulputate nisl non neque iaculis lacus dui, habitant gravida?
            </b>
            <img className="close-icon4" alt="" src="/close-2.svg" />
          </div>
          <div className="question-7">
            <b className="est-felis-a">
              Est felis a velit at vitae venenatis rhoncus?
            </b>
            <img className="close-icon5" alt="" src="/close-2.svg" />
          </div>
          <div className="question-8">
            <b className="eget-nam-accumsan">
              Eget nam accumsan elementum accumsan imperdiet eu, cras?
            </b>
            <img className="close-icon6" alt="" src="/close-2.svg" />
          </div>
          <div className="question-9">
            <b className="fermentum-et-semper">
              Fermentum et semper aliquet justo, facilisis?
            </b>
            <img className="close-icon7" alt="" src="/close-2.svg" />
          </div>
          <div className="question-10">
            <b className="a-vulputate-est">
              A vulputate est diam tempus condimentum in?
            </b>
            <img className="close-icon8" alt="" src="/close-2.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
