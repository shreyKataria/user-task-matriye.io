import { Outlet } from "react-router-dom";
import ContentHeader from "../components/content/ContentHeader";
import { UserManagementProvider } from "./UserManagementContext";

export const AppProvider = () => {
  return (
    <UserManagementProvider>
      <div
        style={{
          margin: "20px",
        }}>
        <ContentHeader />
        <div
          style={{
            margin: "20px",
          }}>
          {" "}
          <Outlet />
        </div>
      </div>
    </UserManagementProvider>
  );
};
