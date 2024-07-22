/**
 * root layout
 */
import RootLayout from "./layouts/RootLayout";

/**
 * Components
 */
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import SectionFooter from "../components/SectionFooter";

function Landing() {
  return (
    <>
      <RootLayout>
        <Section1 />
        <Section2 />
        <Section3 />
        <SectionFooter />
      </RootLayout>
    </>
  );
}

export default Landing;
