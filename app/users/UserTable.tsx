import React from "react";
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

type validSortField = "name" | "email";
type validSortOrder = "asc" | "desc";

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  // Destructure and validate sortOrder queries
  const [fieldRaw, orderRaw] = sortOrder
    ? sortOrder.split("-")
    : ["name", "asc"];

  const isValidSortField = (field: string): field is validSortField =>
    field === "name" || field === "email";
  const isValidSortOrder = (order: string): order is validSortOrder =>
    order === "asc" || order === "desc";

  const field = isValidSortField(fieldRaw) ? fieldRaw : "name";
  const order = isValidSortOrder(orderRaw) ? orderRaw : "asc";

  // Sort users based on sortOrder queries
  const sortedUsers = sort(users)[order](
    field === "email" ? (user) => user.email : (user) => user.name
  );

  // Alternate sort order on each consequtive click of the same field
  const getNextSortOrder = (sortField: validSortField) => {
    if (sortField === field) return order === "desc" ? "asc" : "desc";
    return "asc";
  };

  return (
    <table className="table table-zebra">
      <thead>
        <tr>
          <th>
            <Link href={`/users?sortOrder=name-${getNextSortOrder('name')}`}>
              Name
            </Link>
          </th>
          <th>
            <Link href={`/users?sortOrder=email-${getNextSortOrder('email')}`}>
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
