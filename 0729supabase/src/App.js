// src/App.js
import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data: navidb, error } = await supabase
          .from('navidb')
          .select('*');

        if (error) throw error; //하위자바스크립트 실행 안함
        setData(navidb);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Data from navidb</h1>
      <ul>
        {data.map((item, index) => (
          <li key={item.wr_id}>
            {item.gnbnm} - {item.gnblink} - {item.prnum} - {item.cateno}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
