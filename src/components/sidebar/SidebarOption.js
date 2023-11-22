import { Link } from "react-router-dom";
import "./SidebarOption.css";

export const SidebarOption = ({ children, to }) => {
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "white",
      }}
      to={to}>
      <div
        style={{
          padding: "15px 40px",
        }}>
        {children}
      </div>
    </Link>
  );
};
