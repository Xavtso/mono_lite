import React, { useEffect, useState } from "react";
import axios from 'axios';
import './index.css'

function App() {

  const [backendData, setBackendData] = useState([]);
const api = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000',
});
  
  
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/api")
      .then((response) => {
        setBackendData(response.data);
      })
      .catch((error) => console.log(error));
  },[]);

  // useEffect(() => {
  //     fetch("http://localhost:5000/api")
  //     .then((response) => {
  //           response.json();
  //     }).then(data => setBackendData(data))
  //     .catch((error) => console.log(error));
  // }, []);


  return (
    <div>
      {backendData}
    </div>
  );
}

export default App;
