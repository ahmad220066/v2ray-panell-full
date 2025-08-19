import React, { useEffect, useState } from "react";

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th><th>Username</th><th>UUID</th>
        </tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.username}</td>
            <td>{u.uuid}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;