import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "./Header";
import NewsFeed from "./NewsFeed";
import Welcome from "./Welcome";
import SearchContext from "../contexts/SearchContext";
import "../styling/mainPage.css";
import { style1, style2 } from "../styling/styleObjects";

const App = () => {
  const { articles, topArticles } = useContext(SearchContext);
  const [display, setDisplay] = useState("d-none");
  const [mainSectionVisibility, setMainSectionVisibility] = useState(false);
  const [loading, setLoading] = useState(true);

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
    const arrow = document.getElementsByClassName("arrows-div")[0];
    const welcomeContainer =
      document.getElementsByClassName("welcome-container")[0];
    let id;

    if (mainSectionVisibility) {
      html.style.scrollSnapType = "none";
      welcomeContainer.classList.add("welcome-leave");
      arrow.classList.add("arrows-div-opacity");

      id = setTimeout(() => {
        setLoading(false);
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
      const mainContainer =
        document.getElementsByClassName("grid-contain")[0];

      mainContainer.classList.add("main-enter");
    }
  }, [loading]);

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
          <main className="grid-contain d-grid grid-container">
            <section className="d-flex justify-content-center">
              <NewsFeed posts={articles} styleObj={style1} />
            </section>
            <section className="pe-0 pe-sm-5 grid-item-2">
              <h2 className="ui dividing header text-center text-sm-start pt-3 pt-sm-0">
                Top Headlines
              </h2>
              <NewsFeed posts={topArticles} styleObj={style2} />
            </section>
          </main>
        )}
      </div>
    </>
  );
};

export default App;
