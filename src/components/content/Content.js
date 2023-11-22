import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppProvider } from "../../contexts/AppProvider";
import { sidebarOptions } from "../../configs/sidebarOptions.config";

const Content = () => {
  return (
    <Routes>
      <Route element={<AppProvider />}>
        {sidebarOptions.map(({ route, element }) => {
          return <Route path={route.slice(1)} element={element} />;
        })}
      </Route>
    </Routes>
  );
};

export default Content;
