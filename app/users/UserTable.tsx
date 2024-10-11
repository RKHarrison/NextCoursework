import React, { useEffect } from "react";
import { sort } from "fast-sort";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  const [key, order] = sortOrder ? sortOrder.split("-") : ["name", "asc"];

  const sortedUsers =
    order === "asc"
      ? sort(users).asc(
          key === "email" ? (user) => user.email : (user) => user.name
        )
      : sort(users).desc(
          key === "email" ? (user) => user.email : (user) => user.name
        );

  const getNextSortOrder = () => {
    const nextOrder = order === "desc" ? "asc" : "desc";
    return nextOrder;
  };

  return (
    <table className="table table-zebra">
      <thead>
        <tr>
          <th>
            <Link href={`/users?sortOrder=name-${getNextSortOrder()}`}>
              Name
            </Link>
          </th>
          <th>
            <Link href={`/users?sortOrder=email-${getNextSortOrder()}`}>
              Email
            </Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
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
