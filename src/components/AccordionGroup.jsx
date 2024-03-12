import React from "react";
import Accordion from "./Accordion";

const AccordionGroup = () => {
  const faqs = [
    {
      id: 1,
      question: "What is JavaScript?",
      answer:
        "JavaScript is a programming language commonly used to create interactive effects within web browsers.",
    },
    {
      id: 2,
      question: "What are the data types in JavaScript?",
      answer:
        "JavaScript has several built-in data types, including numbers, strings, booleans, arrays, objects, and more.",
    },
    {
      id: 3,
      question: "How do you declare a variable in JavaScript?",
      answer:
        "You can declare a variable using the 'var', 'let', or 'const' keyword, followed by the variable name.",
    },
    // Add more FAQ objects as needed
  ];
  return (
    <div className=" border  border-violet-100 p-10 m-10 rounded">
      {faqs.map(({ id, question, answer }) => (
        <Accordion key={id} question={question} answer={answer} />
      ))}
    </div>
  );
};

export default AccordionGroup;
