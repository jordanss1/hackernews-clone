import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "./Header";
import NewsFeed from "./NewsFeed";
import Welcome from "./Welcome";
import Trending from "./Trending";
import SearchContext from "../contexts/SearchContext";
import "../styling/mainPage.css";

const App = () => {
  const { loading, setLoading } = useContext(SearchContext);
  const [display, setDisplay] = useState("d-none");
  const [mainSectionVisibility, setMainSectionVisibility] = useState(false);

  const anchor = useRef();

  useEffect(() => {
    const id = setTimeout(() => setDisplay(""), 3500);

    return () => clearTimeout(id);
  }, []);

  console.log(mainSectionVisibility);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMainSectionVisibility(entry.isIntersecting);
    });

    observer.observe(anchor.current);
  }, []);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    const arrowDiv = document.getElementsByClassName("arrows-div")[0];
    const welcomeContainer =
      document.getElementsByClassName("welcome-container")[0];
    const arrow = document.getElementsByClassName("first-arrow")[0];
    const main = document.getElementsByClassName("main-container")[0];
    let id;

    if (mainSectionVisibility) {
      html.style.scrollSnapType = "none";
      welcomeContainer.classList.add("welcome-leave");
      arrowDiv.classList.add("arrows-div-opacity");
      arrow.classList.add("arrow-leaves");

      id = setTimeout(() => {
        setLoading(false);
        main.classList.add("main-true-height");
      }, 2000);
    }

    return () => {
      if (id) {
        clearTimeout(id);
      }
    };
  }, [mainSectionVisibility]);

  useEffect(() => {
    if (!loading) {
      const gridContainer = document.getElementsByClassName("grid-contain")[0];

      gridContainer.classList.add("main-enter");
    }
  }, [loading, setLoading]);

  return (
    <>
      <Welcome display={display} />
      <div className={`${display} main-container container-fluid gx-0`}>
        <Header headerName="The Hacker News" />
        <div className="divider mb-3"></div>
        {loading ? (
          <div class="ui segment loading-p">
            <div class="ui active inverted dimmer">
              <div class="ui large text loader">Loading</div>
            </div>
            <p></p>
            <p></p>
            <p ref={anchor}></p>
          </div>
        ) : (
          <main className="h-100">
            <section className="grid-contain d-grid grid-container">
              <section className="d-flex justify-content-end">
                <NewsFeed />
              </section>
              <Trending />
            </section>
          </main>
        )}
      </div>
    </>
  );
};

export default App;
