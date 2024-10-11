"use client"
import React from "react";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserTable = () => {
  const [users, setUsers] = React.useState<User[]>([]);


  React.useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store",
      });
      const fetchedUsers: User[] = await res.json();
      setUsers(fetchedUsers);
    };
    fetchUsers();
  }, []);

  const sortByName = () => {
    setUsers(sort(users).asc(user => user.name));
  };

  return (
    <table className="table table-zebra">
      <thead>
        <tr>
          <th onClick={() => sortByName()}>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
