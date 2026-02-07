import React from "react";

const page = async()=>{
  const response = await fetch("http://localhost:3000/api/timer");
  const data = await response.json();

  return(
    <div>
      <h1>Next Response: (default)</h1>
      <p>Time:{data.readable}</p>
      <p>ID:{data.requestId}</p>
    </div>
  )
}

export default page;