import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import { Button } from "@material-tailwind/react";
import { initGA, logPageView } from "@/utils/analytics";
import ScrollToTopButton from "./widgets/layout/ScrollToTopButton";

function App() {
  const location = useLocation();
  const { pathname } = location;

  // Initialize Google Analytics
  useEffect(() => {
    initGA();
  }, []);

  // Track page views
  useEffect(() => {
    logPageView();
  }, [pathname]);

  return (
    <div className="h-full w-full bg-[url('/img/header-bg.png')] bg-center">
      {!(pathname == '/sign-in' || pathname == '/sign-up') && (
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
        </div>
      )}
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
