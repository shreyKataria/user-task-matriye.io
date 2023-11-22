import React from "react";
import { AppBreadcrumbs } from "../Breadcrumps/Breadcrumps";
import { useLocation } from "react-router-dom";
import { sidebarOptions } from "../../configs/sidebarOptions.config";
import { Avatar, IconButton } from "@mui/material";
import { MailOutline, NotificationsNone } from "@mui/icons-material";

const ContentHeader = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          gap: "10px",
          paddingRight: "15px",
        }}>
        <IconButton>
          <MailOutline sx={{ color: "white", zIndex: "tooltip" }} />
        </IconButton>
        <IconButton>
          <NotificationsNone sx={{ color: "white", zIndex: "tooltip" }} />
        </IconButton>
        <IconButton>
          <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </IconButton>
        <button
          className="app-btn"
          style={{
            margin: "5px 10px",
          }}>
          Logout
        </button>
      </div>
      <h1>
        {
          sidebarOptions.find((option) => option.route === pathname)
            .contentHeading
        }
      </h1>
      <AppBreadcrumbs />
    </div>
  );
};

export default ContentHeader;
