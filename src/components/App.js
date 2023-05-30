import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "./header/Header";
import Welcome from "./Welcome";
import SearchContext from "../contexts/SearchContext";
import CallToAction from "./CallToAction";
import Footer from "./footer/Footer";
import PlaceHolderMain from "./placeholders/PlaceHolderMain";
import Articles from "./articles/Articles";
import useMediaQuery from "../hooks/useMediaQuery.tsx";
import "../styling/mainPage.css";

const App = () => {
  const { loading, setLoading } = useContext(SearchContext);
  const [display, setDisplay] = useState("d-none");
  const [mainSectionVisibility, setMainSectionVisibility] = useState(false);

  const is1000 = useMediaQuery(1000);

  const visibilityRef = useRef();

  useEffect(() => {
    const id = setTimeout(() => setDisplay(""), 3500);

    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMainSectionVisibility(entry.isIntersecting);
    });

    observer.observe(visibilityRef.current);
  }, []);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    const welcomeContainer =
      document.getElementsByClassName("welcome-container")[0];
    let id;

    if (mainSectionVisibility) {
      html.style.scrollSnapType = "none";
      welcomeContainer.style.opacity = "0";
    }

    return () => clearTimeout(id);
  }, [mainSectionVisibility]);

  useEffect(() => {
    if (!loading) {
      const gridContainer = document.getElementsByClassName("main-content")[0];

      gridContainer.classList.add("main-enter");
    }
  }, [loading, setLoading]);

  return (
    <>
      <Welcome />
      <div className={`${display} main-container container-fluid gx-0`}>
        <Header headerName="The Hacker News" />
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
