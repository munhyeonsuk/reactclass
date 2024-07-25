import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API 호출 함수
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

 
  

  return (
    <div className="App">
      <h1>Users</h1>
      { error && <p>Error: {error.message}</p>;}
      { loading ?  <p>Loading...</p> :
            <ul>
            {users.map(user => (
            <li key={user.id}>{user.name}</li>
            ))}
        </ul>
      }
    </div>
  );
}

export default App;
