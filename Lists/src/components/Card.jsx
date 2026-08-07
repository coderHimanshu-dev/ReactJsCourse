import React from "react";

const employees = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    post: "Frontend Developer",
    location: "New York",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    post: "UI Designer",
    location: "San Francisco",
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    post: "Backend Developer",
    location: "Chicago",
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    post: "Project Manager",
    location: "Austin",
  },
  {
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    post: "QA Engineer",
    location: "Seattle",
  },
];

const Card = () => {
  return (
    <div>
      {employees.map(({ name, email, post, location }) => (
        <ul key={Math.random()}>
          <li>Name : {name}</li>
          <li>Email : {email}</li>
          <li>Post : {post}</li>
          <li>Location : {location}</li>
        </ul>
      ))}
    </div>
  );
};

export default Card;
