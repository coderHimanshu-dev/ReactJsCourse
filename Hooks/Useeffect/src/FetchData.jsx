import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

 
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,
      );
      const data = await response.json();

      if (data && data.length) setData(data);


    }
    getData();
  }, []);

  return (
    <div>
      {data.map((todo) => (
        <ul key={todo.id}>
            <li >{todo.title}</li>
            <li>Body - {todo.body}</li>
        </ul>
      ))}
    </div>
  );
};

export default FetchData;
