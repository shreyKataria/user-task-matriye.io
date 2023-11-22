import React from "react";
import SidebarHeader from "./SidebarHeader";
import { sidebarOptions } from "../../configs/sidebarOptions.config";
import { SidebarOption } from "./SidebarOption";
import "./SidebarOption.css";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <SidebarHeader />
      <div>
        {sidebarOptions.map((option) => {
          return (
            <div
              className={`Sidebar-options ${
                option.route === pathname ? "so-active" : ""
              }`}>
              <SidebarOption to={option.route}>{option.label}</SidebarOption>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
