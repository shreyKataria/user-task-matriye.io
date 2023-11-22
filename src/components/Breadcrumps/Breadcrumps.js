import { Breadcrumbs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { sidebarOptions } from "../../configs/sidebarOptions.config";

export const AppBreadcrumbs = () => {
  const location = useLocation();
  return (
    <Breadcrumbs sx={{ color: "white" }} separator="›" aria-label="breadcrumb">
      <Link
        style={{
          textDecoration: "none",
          color: "white",
        }}
        to="/">
        Dashboard
      </Link>
      {sidebarOptions.slice(1).map((option) => {
        return location.pathname === option.route ? (
          <Link
            style={{
              textDecoration: "none",
              color: "white",
            }}
            to={option.route}>
            {option.label}
          </Link>
        ) : undefined;
      })}
    </Breadcrumbs>
  );
};
