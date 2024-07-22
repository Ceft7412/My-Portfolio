import { MdDesignServices } from "react-icons/md";
import { LiaConnectdevelop } from "react-icons/lia";

import { useSelector } from "react-redux";
function Section2() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <>
      <main className="section-2-block" id="about">
        <section className="section-2-block__flex">
          <section className="section-2-block__header">
            <h1 className="section-2-block__title">ABOUT ME</h1>
          </section>
          <section className="section-2-block__content">
            <section className="section-2-content__description">
              <p>
                I am an IT Student at University of Mindanao. I like and enjoy developing
                something that pleases the eyes. Whenever there's project to be done, I
                always strive to make it as beautiful as possible. I have worked on
                technologies like JavaScript, PHP, Java, Python, HTML, CSS, MySQL, MongoDB
                in my 2 years at the University. And as an enthusiast of doing layouts, I
                am much more inclined on web stuff.
              </p>
              <p>
                Combining the skills that I gained, I managed to create projects that
                turns my imagination into reality.
              </p>
            </section>
            <section className="section-2-content__doing">
              <h1 className="section-2-content__title">What I'm Doing</h1>
              <section className="section-2-contant__cards">
                <section
                  className={`section-2-card__item ${
                    darkTheme ? "darker-card__item" : ""
                  }`}
                >
                  <div className="section-2-item__icon-container">
                    <MdDesignServices color="violet" fontSize={70} />
                  </div>
                  <div className="section-2-item__des">
                    <h1 className="section-2-des__title">Web Design</h1>
                    <p className="section-2-des__des">
                      I blend creativity with functionality. My designs focus on user
                      experience, accessibility, and aesthetics.
                    </p>
                  </div>
                </section>
                <section
                  className={`section-2-card__item ${
                    darkTheme ? "darker-card__item" : ""
                  }`}
                >
                  <div className="section-2-item__icon-container">
                    <LiaConnectdevelop color="red" fontSize={70} />
                  </div>
                  <div className="section-2-item__des">
                    <h1 className="section-2-des__title">Web Development</h1>
                    <p className="section-2-des__des">
                      From front-end technologies like ReactJS to back-end technologies
                      like Laravel, I'm very passionate at creating websites.
                    </p>
                  </div>
                </section>
              </section>
            </section>
            <section></section>
          </section>
        </section>
      </main>
    </>
  );
}

export default Section2;
