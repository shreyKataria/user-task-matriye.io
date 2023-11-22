import { createContext, useContext, useState } from "react";
import { defaultData } from "../features/UserManagement/mock/defaultData";

export const UserManagementContext = createContext({});

export const useUserManagement = () => useContext(UserManagementContext);

export const UserManagementProvider = ({ children }) => {
  const [users, setUsers] = useState(defaultData);
  const [filterUser, setFilterUser] = useState("");

  const addUser = (payload) => {
    const prevUsers = [...users];
    prevUsers.push(payload);
    setUsers(prevUsers);
  };

  return (
    <UserManagementContext.Provider
      value={{
        addUser,
        setFilterUser,
        users: users.filter(
          (e) => e.email.includes(filterUser) || e.fullName.includes(filterUser)
        ),
      }}>
      {children}
    </UserManagementContext.Provider>
  );
};
