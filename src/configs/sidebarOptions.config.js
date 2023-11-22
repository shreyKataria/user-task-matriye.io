import { UserManagement } from "../features/UserManagement";

export const sidebarOptions = [
  {
    label: "Dashboard",
    route: "/",
    element: <div>Dashboard Home</div>,
    contentHeading: "Dashboard",
  },
  {
    label: "User Management",
    route: "/user-management",
    element: <UserManagement />,
    contentHeading: "User",
  },
  {
    label: "Master Settings",
    route: "/master-setting",
    element: <div>Master Settings</div>,
    contentHeading: "Master Settings",
  },
  {
    label: "Website",
    route: "/website",
    element: <div>Website</div>,
    contentHeading: "Website",
  },
  {
    label: "Applicant Job Post",
    route: "/applicant-job-posting",
    element: <div>Applicant Job Post</div>,
    contentHeading: "Applicant Job Post",
  },
  {
    label: "LMS Management",
    route: "/lms-management",
    element: <div>LMS Management</div>,
    contentHeading: "LMS Management",
  },
];
