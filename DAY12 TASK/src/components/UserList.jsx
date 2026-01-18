import { useEffect, useState } from "react";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = "https://jsonplaceholder.typicode.com/users";

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const res = await fetch(API);
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();
      setUsers(data);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p><strong>{user.name}</strong></p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
};
