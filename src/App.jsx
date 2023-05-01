import { Box } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ALL_LINKS from "./constant";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const Pages = [
    ALL_LINKS.Home_Page,
    ALL_LINKS.About_Page,
    ALL_LINKS.Skills_Page,
    ALL_LINKS.Projects_Page,
  ];
  const [active, setActive] = useState("/");
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
  }, [active]);

  return (
    <Box
      width="100vw"
      background="linear-gradient(-180deg, rgba(22,23,23,1) 0%, rgba(0,0,0,1) 100%);"
      minHeight="100vh"
    >
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <Routes>
            {Pages.map((item, i) => {
              return (
                <Route
                  exact
                  path={item.pageLink}
                  key={i}
                  element={<item.view active={active} setActive={setActive} />}
                />
              );
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Box>
  );
}

export default App;
