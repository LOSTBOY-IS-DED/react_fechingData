import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/users/' + currentTab)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, [currentTab]);
  return (
    <>
      <div className="flex gap-4 justify-center p-4 mt-2">
        <button
          style={{ color: currentTab == 1 ? 'red' : 'black' }}
          onClick={() => {
            setCurrentTab(1);
          }}
        >
          card 1
        </button>
     

      <button
        style={{ color: currentTab == 2 ? 'red' : 'black' }}
        onClick={() => {
          setCurrentTab(2);
        }}
      >
        card 2
      </button>

      <button
        style={{ color: currentTab == 3 ? 'red' : 'black' }}
        onClick={() => {
          setCurrentTab(3);
        }}
      >
        card 3
        </button>
         </div>
      <div>{loading ? 'loading..' : data.name}</div>
    </>
  );
}

export default App;
