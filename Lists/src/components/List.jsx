import React from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const List = () => {
  return (
    <div>
      {numbers.map(num => (
        <ul key={num}>
          <li>
            {num}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default List;
