import { FunctionComponent } from "react";
import styles from "./CityDetails.module.css";

const CityDetails: FunctionComponent = () => {
  return (
    <section className={styles.bookingPageInner}>
      <div className={styles.frameParent}>
        <div className={styles.apartmentsForRentInLondonParent}>
          <h1 className={styles.apartmentsForRent}>
            Apartments for rent in London
          </h1>
          <div className={styles.aTrulyGlobalContainer}>
            <p className={styles.aTrulyGlobal}>
              A truly global city, London has long been considered a
              cutting-edge metropolis and hub for culture, style and finance.
              With each borough, Tube zone and neighborhood of London sporting
              its own vibe and lifestyle advantages, it can be downright
              difficult to settle on where to look for a furnished apartment in
              London . Whether you’re a digital nomad looking for a studio
              apartment in London or just seeking a month to month rental in
              London, Blueground has you covered. With a pub on almost every
              corner and beautiful parks in all major neighborhoods, you’ll feel
              right at home across all of Blueground’s exquisite London flats.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.furnishedApartmentRentals}>
              Furnished apartment rentals in London. Getting the most out of
              living in London starts with securing a furnished flat for rent.
              Fortunately, Blueground’s flats for rent across London marry
              convenient locations close to public transportation, top notch
              interiors and modern furnishings, and support from our local team.
              Zero in on the ideal serviced apartment in London from studios to
              two-bedroom apartments by filtering for your date, area, and
              must-have amenities on our site. Moving to London has never been
              simpler!
            </p>
            <p className={styles.blankLine1}>&nbsp;</p>
            <p className={styles.theChoiceIs}>
              The choice is yours from Chelsea to Soho to Shoreditch, always
              within a short walk from Tube stops and local hangouts. Show up
              and start living in your new London accommodation with furnishings
              and a fully-equipped setup taken care of before your arrival by
              the team at Blueground. So book today, and move in tomorrow so you
              can enjoy all a Blueground London flat has to offer: premium work
              from home setups, a user-friendly guest app service, flexible
              contracts, and a booking process free of broker’s fees (and
              stresses!).
            </p>
          </div>
        </div>
        <div className={styles.frequentlyAskedQuestions}>
          <div className={styles.questions}>
            <div className={styles.question1}>
              <div className={styles.text}>
                <b className={styles.integerMorbiSemper}>
                  Integer morbi semper sodales sit facilisi habitant pulvinar
                  sed venenatis?
                </b>
                <div className={styles.magnisCongueNeque}>
                  Magnis congue neque sociis ut nisl. Quis dui lobortis lectus
                  viverra.
                </div>
              </div>
              <img
                className={styles.closeIcon}
                loading="lazy"
                alt=""
                src="/close.svg"
              />
            </div>
            <div className={styles.question11}>
              <div className={styles.text1}>
                <b className={styles.massaMassaNulla}>
                  Massa massa nulla rhoncus a quam consectetur sed purus, enim?
                </b>
                <div className={styles.nuncMolestieSit}>
                  Nunc molestie sit in sed sodales. Bibendum pharetra, id
                  viverra suspendisse pharetra ac aenean neque. Sodales ornare
                  penatibus eros consectetur potenti in feugiat purus. Posuere
                  amet, sodales nibh eget. A et, a ante pretium praesent
                  elementum feugiat pharetra congue.
                </div>
              </div>
              <img className={styles.closeIcon1} alt="" src="/close.svg" />
            </div>
            <div className={styles.question3}>
              <b className={styles.dignissimCongueRutrum}>
                Dignissim congue rutrum pretium nunc sed nibh vitae tortor ut?
              </b>
              <img className={styles.closeIcon2} alt="" src="/close-2.svg" />
            </div>
            <div className={styles.question4}>
              <b className={styles.vulputateImperdietFusce}>
                Vulputate imperdiet fusce vivamus nunc leo morbi scelerisque in?
              </b>
              <img className={styles.closeIcon3} alt="" src="/close-2.svg" />
            </div>
            <div className={styles.question5}>
              <b className={styles.sitRhoncusRhoncus}>
                Sit rhoncus rhoncus malesuada massa adipiscing arcu, semper ut
                in?
              </b>
              <img className={styles.closeIcon4} alt="" src="/close-2.svg" />
            </div>
            <div className={styles.question6}>
              <b className={styles.vulputateNislNon}>
                Vulputate nisl non neque iaculis lacus dui, habitant gravida?
              </b>
              <img className={styles.closeIcon5} alt="" src="/close-2.svg" />
            </div>
            <div className={styles.question7}>
              <b className={styles.estFelisA}>
                Est felis a velit at vitae venenatis rhoncus?
              </b>
              <img className={styles.closeIcon6} alt="" src="/close-2.svg" />
            </div>
            <div className={styles.question8}>
              <b className={styles.egetNamAccumsan}>
                Eget nam accumsan elementum accumsan imperdiet eu, cras?
              </b>
              <img className={styles.closeIcon7} alt="" src="/close-2.svg" />
            </div>
            <div className={styles.question9}>
              <b className={styles.fermentumEtSemper}>
                Fermentum et semper aliquet justo, facilisis?
              </b>
              <img className={styles.closeIcon8} alt="" src="/close-2.svg" />
            </div>
            <div className={styles.question10}>
              <b className={styles.aVulputateEst}>
                A vulputate est diam tempus condimentum in?
              </b>
              <img className={styles.closeIcon9} alt="" src="/close-2.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityDetails;
