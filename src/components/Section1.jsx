import { MdEmail } from "react-icons/md";
import { useSelector } from "react-redux";
function Section1() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <>
      <section className="section-1-block">
        <div className="section-1-block__flex">
          <div className="section-1-block__content">
            <h1 className="section-1-content__name">CEDRICK CACERES</h1>
            <p className="section-1-content__description">
              Passionate web developer that thrives on challenges. Self-driven and
              detail-oriented.
            </p>
            <a href="#about" className="section-1-content__nodec">
              <span className={`section-1-content__more ${darkTheme ? "more__bg" : ""}`}>
                Read More
              </span>
            </a>
          </div>
          <div className="section-1-block__footer">
            <div className="section-1-footer__flex">
              {/* <div className="section-1-footer__item">
                <MdEmail fontSize={31} />

                <span>Email</span>
              </div> */}
              <a
                href="https://www.linkedin.com/in/cedrick-caceres-22b8612b4/"
                target="_blank"
                className="section-1-footer__item"
              >
                <img
                  src="https://skillicons.dev/icons?i=linkedin"
                  alt="LinkedIn"
                  width="30px"
                  height="30px"
                />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Ceft7412"
                target="_blank"
                className="section-1-footer__item"
              >
                <img
                  src="https://skillicons.dev/icons?i=github"
                  alt="Github"
                  width="30px"
                  height="30px"
                />
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
