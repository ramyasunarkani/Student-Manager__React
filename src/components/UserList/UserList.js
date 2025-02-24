import React from "react";
import Button from "../UI/Button";

const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <>
      <h2>All Students</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} {user.phone} {user.address}
            <Button type="button" onClick={() => onDelete(user.id)}>Delete</Button>
            <Button type="button" onClick={() => onEdit(user.id)}>Edit</Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
