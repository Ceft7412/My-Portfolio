import { useSelector } from "react-redux";
import skills from "../resources/jsons/skills.json";
function Section4() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <>
      <main className="section-4-block" id="skills">
        <div className="section-4-block__flex">
          {/* header title belongs */}
          <div className="section-4-block__header">
            <h1>Skills</h1>
          </div>

          {/* content belongs */}
          <div className="section-4-block__content">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="section-4__item">
                <div className={`section-4__body ${darkTheme ? "darker-body" : ""}`}>
                  <div className="section-4-body__header">
                    <h2>{category}</h2>
                  </div>

                  <div className="section-4-body__content">
                    {items.map((skill, index) => (
                      <div key={index} className="section-4-content__item">
                        <img
                          className="section-4-body__icon"
                          src={skill.src}
                          alt={skill.name}
                        />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Section4;
