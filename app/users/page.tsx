import React from "react";
import UserTable from "./UserTable";

const UsersPage = async () => {
  return (
    <>
      <h1>Users</h1>
      <UserTable />
      <p>{new Date().toLocaleTimeString()}</p>
    </>
  );
};

export default UsersPage;
