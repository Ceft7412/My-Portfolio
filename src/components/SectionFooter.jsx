import { useSelector } from "react-redux";
function SectionFooter() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  return (
    <>
      <main className={`section-footer ${darkTheme ? "footer__darker-border" : ""}`}>
        <section className="section-footer__flex">
          <p className="section-footer__copyright">
            © {new Date().getFullYear()} Cedrick Caceres
          </p>
        </section>
      </main>
    </>
  );
}

export default SectionFooter;
