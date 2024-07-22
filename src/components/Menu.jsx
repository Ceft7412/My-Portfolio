import Logo from "../resources/images/C.png";
import { BsFillSunFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { toggleTheme } from "../redux/themeSlice";

function Menu() {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    document.body.className = darkTheme ? "darkTheme" : "";
  }, [darkTheme]);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      setIsScrollingUp(st <= lastScrollTop);
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <div
        className={`menu ${isScrollingUp ? " show" : " hide"} ${
          darkTheme ? "bgColor" : "bgOther"
        }`}
      >
        <div className="menu__flex">
          <div className="menu__item">
            <h1 className="menu__logo">C</h1>
          </div>
          <div className="menu__item menu__right">
            <a
              href="#projects"
              className={`menu__text ${darkTheme ? "menu__hover-dark" : ""}`}
            >
              Projects
            </a>

            <a
              href="#about"
              className={`menu__text ${darkTheme ? "menu__hover-dark" : ""}`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`menu__text ${darkTheme ? "menu__hover-dark" : ""}`}
            >
              Skills
            </a>
            <span
              className={`menu__text menu-icon__container ${
                darkTheme ? "menu__hover-dark" : ""
              }`}
              onClick={() => dispatch(toggleTheme())}
            >
              <BsFillSunFill fontSize={25} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
