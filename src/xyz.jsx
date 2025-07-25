 // not using axios yet

import axios from "axios";
import { useEffect, useState } from "react"


function App() {

  const [currentTab , setCurrentTab] = useState(1);
  const [data , setData] = useState({});
  const [loading , setLoading] = useState(true);

  // without using axios

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://jsonplaceholder.typicode.com/users/"+currentTab).then(async res => {
  //     const json = await res.json();
  //     setData(json);
  //     console.log(json);
  //     setLoading(false);
  //   })
    
  // },[currentTab])


  // using axios
  useEffect(() => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users/"+currentTab).then((res)=>{
      setData(res.data)
      setLoading(false)
    })
  },[currentTab])


  return (
    <>
    <div>
      <div className="flex gap-4 justify-center p-4 mt-2">
        <button style={{color: currentTab == 1 ? "red" : "black"}} onClick={() => {
        setCurrentTab(1)
      }}>
        user 1
      </button>
      <button style={{color: currentTab == 2 ? "red" : "black"}} onClick={() => {
        setCurrentTab(2)
      }}>
        user 2
      </button>
      <button style={{color: currentTab == 3 ? "red" : "black"}} onClick={() => {
        setCurrentTab(3)
      }}>
        user 3
      </button>
      <button style={{color: currentTab == 4 ? "red" : "black"}} onClick={() => {
        setCurrentTab(4)
      }}>
        user 4
      </button>
      </div>
      
      <br/>
      <div className="flex justify-center text-7xl">
        {loading ? "Loading..." : data.name}
      </div>
      
    </div>
    </>
  )
}

export default App;