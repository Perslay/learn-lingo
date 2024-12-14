import css from "./MainHome.module.css";

export const MainHome = () => {
  return (
    <div className={css.mainHome}>
      <div className={css.middle}>
        <div className={css.left}>
          <h2 className={css.secondHeading}>
            Unlock your potential with the best{" "}
            <mark className={css.mark}>language</mark> tutors
          </h2>
          <p className={css.mainParagraph}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          {/* niech ten przycisk gdzies prowadzi */}
          <button className={css.startButton}>Get started</button>
        </div>
        <img
          className={css.homeImage}
          src="/images/home.jpg"
          srcSet="/images/home.jpg 1x, /images/home@2x.jpg 2x"
          alt="placeholder"
        />
      </div>
      <ul className={css.list}>
        <li>
          <p className={css.number}>32,000 +</p>
          <p className={css.feature}>Experienced tutors</p>
        </li>
        <li>
          <p className={css.number}>300,000 +</p>
          <p className={css.feature}>5-star tutor reviews</p>
        </li>
        <li>
          <p className={css.number}>120 +</p>
          <p className={css.feature}>Subjects taught</p>
        </li>
        <li>
          <p className={css.number}>200 +</p>
          <p className={css.feature}>Tutor nationalities</p>
        </li>
      </ul>
    </div>
  );
};
