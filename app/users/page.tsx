import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading user table...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
      <p>{new Date().toLocaleTimeString()}</p>
    </>
  );
};

export default UsersPage;
