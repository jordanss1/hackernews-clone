import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "./header/Header";
import NewsFeed from "./NewsFeed";
import Welcome from "./Welcome";
import Trending from "./Trending";
import SearchContext from "../contexts/SearchContext";
import "../styling/mainPage.css";
import CallToAction from "./CallToAction";
import Footer from "./footer/Footer";
import useMediaQuery from "../hooks/useMediaQuery.tsx";

const App = () => {
  const { loading, setLoading } = useContext(SearchContext);
  const [display, setDisplay] = useState("d-none");
  const [mainSectionVisibility, setMainSectionVisibility] = useState(false);

  const is1000 = useMediaQuery(1000);

  const anchor = useRef();

  useEffect(() => {
    const id = setTimeout(() => setDisplay(""), 3500);

    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMainSectionVisibility(entry.isIntersecting);
    });

    observer.observe(anchor.current);
  }, []);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    const welcomeContainer =
      document.getElementsByClassName("welcome-container")[0];
    let id;

    if (mainSectionVisibility) {
      html.style.scrollSnapType = "none";
      welcomeContainer.style.opacity = "0";

      id = setTimeout(() => {
        setLoading(false);
      }, 2000);
    }

    return () => clearTimeout(id);
  }, [mainSectionVisibility]);

  useEffect(() => {
    if (!loading) {
      const gridContainer =
        document.getElementsByClassName("grid-container")[0];

      gridContainer.classList.add("main-enter");
    }
  }, [loading, setLoading]);

  return (
    <>
      <Welcome />
      <div className={`${display} main-container container-fluid gx-0`}>
        <Header headerName="The Hacker News" />
        <div className="divider mb-3"></div>
        {loading ? (
          <div className="ui segment loading-p">
            <div className="ui active inverted dimmer">
              <div className="ui large text loader">Loading</div>
            </div>
            <p></p>
            <p></p>
            <p ref={anchor}></p>
          </div>
        ) : (
          <main className="h-100 main-content">
            <section className="d-grid grid-container">
              <NewsFeed />
              <Trending is1000={is1000} />
            </section>
            <CallToAction />
            <Footer is1000={is1000} />
          </main>
        )}
      </div>
    </>
  );
};

export default App;
