import projects from "../resources/jsons/projects.json";
import { useSelector } from "react-redux";
import { FaLink } from "react-icons/fa6";

function Section3() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <>
      <main className="section-3-block" id="projects">
        <section className="section-3-block__flex">
          <section className="section-3-block__header">
            <h1 className="section-3-block__title">PROJECTS</h1>
          </section>
          <div className="section-3-block__content">
            {projects.map((project, index) => (
              <div key={index} className="section-3-block__item">
                <div
                  className={`section-3-item__logo ${
                    darkTheme ? "section-3-item-logo__darker" : ""
                  }`}
                >
                  <img
                    className="section-3-item__picture"
                    src={project.logo}
                    alt={project.title}
                  />
                </div>
                <div className="section-3-item__about">
                  <span className="section-3-item__title">{project.title}</span>
                  <span className="section-3-item__description">
                    {project.description}
                  </span>
                  <span className="section-3-item__stack">{project.stack}</span>
                </div>
                <div className="section-3-item__link">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    className={`section-3-link__item demo-link ${
                      darkTheme ? "darker" : ""
                    }`}
                  >
                    <FaLink />
                    <span>Demo</span>
                  </a>
                  <div className="section-3-link__item">
                    <a href={project.githubLink} target="_blank">
                      <img
                        src="https://skillicons.dev/icons?i=github"
                        alt="Github"
                        width="30px"
                        height="30px"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Section3;
