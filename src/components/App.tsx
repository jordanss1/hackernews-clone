import { useContext, useEffect, useRef, useState, ReactElement } from "react";
import Header from "./header/Header";
import Welcome from "./Welcome";
import SearchContext from "../contexts/SearchContext";
import CallToAction from "./CallToAction";
import Footer from "./footer/Footer";
import PlaceHolderMain from "./placeholders/PlaceHolderMain";
import Articles from "./articles/Articles";
import useMediaQuery from "../hooks/useMediaQuery";
import "../styling/mainPage.css";

const App = (): ReactElement => {
  const { loading } = useContext(SearchContext);
  const [display, setDisplay] = useState<string>("d-none");
  const [mainSectionVisibility, setMainSectionVisibility] =
    useState<boolean>(false);

  const is1000 = useMediaQuery(1000);

  const visibilityRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = setTimeout(() => setDisplay(""), 3500);

    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (visibilityRef.current) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setMainSectionVisibility(entry.isIntersecting);
      });

      observer.observe(visibilityRef.current);
    }
  }, []);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    const welcomeContainer = document.getElementsByClassName(
      "welcome-container"
    )[0] as HTMLElement;

    if (mainSectionVisibility) {
      html.style.scrollSnapType = "none";
      welcomeContainer.style.opacity = "0";
    }
  }, [mainSectionVisibility]);

  useEffect(() => {
    if (!loading) {
      const gridContainer = document.getElementsByClassName(
        "main-content"
      )[0] as HTMLElement;

      gridContainer.classList.add("main-enter");
    }
  }, [loading]);

  return (
    <>
      <Welcome />
      <div className={`${display} main-container container-fluid gx-0`}>
        <Header />
        <div ref={visibilityRef} className="divider mb-3"></div>
        {loading ? (
          <PlaceHolderMain />
        ) : (
          <main className="main-content">
            <Articles is1000={is1000} />
            <CallToAction />
          </main>
        )}
        <Footer is1000={is1000} />
      </div>
    </>
  );
};

export default App;
