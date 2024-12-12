import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import "./layout.css";
import "./parallax.css";
import About from "./pages/Bio";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Album from "./pages/Album";
import Nav from "./Nav";
import _ from "lodash";


function App() {
  const navBarHeight = 150;
  
  const [navBarIsTransparent, setNavBarIsTransparent] = useState(true);
  
  useEffect(() => {
    const scrollFn = () => {
        const scrollTop = document.getElementById("parallax").scrollTop
        if ((window.innerHeight - navBarHeight) < scrollTop) {
            if (!navBarIsTransparent) {
                return;
            }
            setNavBarIsTransparent(false);
        } else if (!navBarIsTransparent) {
            setNavBarIsTransparent(true);
        }
    };
    // const scrollThrottled = _.throttle(scrollFn, 16);
    document.getElementById("parallax")?.addEventListener("scroll", scrollFn);
    return () => {
      document.getElementById("parallax")?.removeEventListener("scroll", scrollFn);
    };
  }, [navBarIsTransparent]);

  return (
    <div className="App">
      <div className={"app-content"} id="app-content">
        <BrowserRouter>
          <Routes>
              <Route index element={<>
                  <div className="parallax" id="parallax">
                    <Nav height={navBarHeight} bgImage={!navBarIsTransparent}/>
                    <div className="main-image parallax__layer parallax__layer--back" id="main-image">
                      <div style={{marginTop: `${navBarHeight}px`}}>
                        <h1>Ben Greenwood</h1>
                        <h2>software engineer, drummer</h2>
                        I play drums (and other things) and try to build software that is useful for me.
                        <p/>
                        This is a space where I can show some of that stuff off and you can get a detailed history of my professional and artistic past if you are, for some reason, into that sort of thing.
                      </div>
                    </div>
                    <div className="main-section parallax__layer parallax__layer--base" id="main-section">
                      <About/><Events/><Album/><Contact/>
                    </div>
                  </div>
                </>} />
              <Route path="/content" element={<><Nav height={navBarHeight} bgImage={true}/><Outlet /></>}>
                    <Route index element={<><div>404</div></>} />
                    <Route path="*" element={<><div>404</div></>} />
                    <Route path="about" element={<About/>} />
                    <Route path="projects" element={<Events/>} />
                    <Route path="album" element={<Album/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="donate" element={<h1>Coming soon!</h1>} />
                  </Route>
              </Routes>
            </BrowserRouter>
          </div>
    </div>
  );
}

export default App;