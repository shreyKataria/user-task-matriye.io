import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Switch } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useUserManagement } from "../../../../contexts/UserManagementContext";
import "./style.css";

const columns = [
  { field: "id", headerName: "Sr. No", width: 70 },
  { field: "fullName", headerName: "Full Name", width: 230 },
  { field: "email", headerName: "Email Id", width: 230 },
  {
    field: "mobNo",
    headerName: "Mobile No",
    // type: "number",
    sortable: false,
    width: 180,
    valueGetter: (params) => params.value,
  },
  {
    field: "city",
    headerName: "City",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) => params.value,
  },
  {
    field: "crmUser",
    headerName: "CRM User",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    valueGetter: (params) => (params.value ? "Yes" : "No"),
  },
  {
    field: "role",
    headerName: "Status",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    valueGetter: (params) => params.value,
    renderCell: () => <Switch />,
  },
  {
    field: "Action",
    headerName: "Action",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) => params.value,
    renderCell: () => (
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    ),
  },
];

export default function UserTable() {
  const { users } = useUserManagement();

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{
          color: "white",
          border: "0px",
        }}
        className="user-table"
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 4 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
