import React, { useEffect, useState } from "react";

const BasicEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const responce = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,
      );
      const data = await responce.json();
      if (data && data.length) setData(data);

    }
    getData();
  }, []);
  return <div>
    {data.map((post) =>(
        <ul key={post.id}>
            <li>{post.title}</li>
        </ul>
    ))}
  </div>;
};

export default BasicEffect;
