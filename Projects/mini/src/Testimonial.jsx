import React, { useState } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const authors = [
    {
      id: 1,
      author: "Albert Einstein",
      quote:
        "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    },
    {
      id: 2,
      author: "Maya Angelou",
      quote:
        "You will face many defeats in life, but never let yourself be defeated.",
    },
    {
      id: 3,
      author: "Oscar Wilde",
      quote: "Be yourself; everyone else is already taken.",
    },
    {
      id: 4,
      author: "Mark Twain",
      quote: "The secret of getting ahead is getting started.",
    },
    {
      id: 5,
      author: "Steve Jobs",
      quote: "The only way to do great work is to love what you do.",
    },
    {
      id: 6,
      author: "Nelson Mandela",
      quote: "It always seems impossible until it's done.",
    },
    {
      id: 7,
      author: "Walt Disney",
      quote: "The way to get started is to quit talking and begin doing.",
    },
    {
      id: 8,
      author: "Confucius",
      quote: "It does not matter how slowly you go as long as you do not stop.",
    },
    {
      id: 9,
      author: "Henry Ford",
      quote: "Whether you think you can or you think you can't, you're right.",
    },
    {
      id: 10,
      author: "Helen Keller",
      quote: "Life is either a daring adventure or nothing at all.",
    },
  ];

  const addIndex = () => {
    setCurrentIndex((currentIndex +1) % authors.length);
  };

  const removeIndex = () => {
    setCurrentIndex((currentIndex + authors.length - 1) % authors.length);
  };
  return (
    <div>
      <section>
        {authors[currentIndex].quote} <br /> - {authors[currentIndex].author}
      </section>
      <button onClick={addIndex}>Next</button>
      <button onClick={removeIndex}>Previous</button>
    </div>
  );
};

export default Testimonial;
