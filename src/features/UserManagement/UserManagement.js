import { Button, Input } from "@mui/material";
import UserTable from "./component/UserTable/UserTable";
import { GridSearchIcon } from "@mui/x-data-grid";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import CreateUserModal from "../CreateUserModal/CreateUserModal";
import { useUserManagement } from "../../contexts/UserManagementContext";
import "./UserManagement.css";

export const UserManagement = () => {
  const [open, setOpen] = useState(false);
  const { addUser, users, setFilterUser } = useUserManagement();

  return (
    <div className="Table-container">
      {open && (
        <CreateUserModal
          id={users.length + 1}
          onAddUser={addUser}
          open={open}
          setOpen={setOpen}
        />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "10px",
        }}>
        <div>
          <Button
            style={{
              color: "white",
            }}>
            Excel
          </Button>
          <Button
            style={{
              color: "white",
            }}>
            PDF
          </Button>
        </div>
        <div
          style={{
            color: "white",
          }}>
          <Input
            placeholder="Search"
            type="search"
            onChange={(e) => setFilterUser(e.target.value)}
            style={{
              marginRight: "10px",
              color: "white",
            }}
            renderSuffix={() => <GridSearchIcon />}
          />
          <Button
            style={{ color: "white" }}
            onClick={() => setOpen(true)}
            startIcon={<Add />}>
            Add User
          </Button>
        </div>
      </div>
      <div>
        <UserTable />
      </div>
    </div>
  );
};
