import React, { useState } from "react";
import Accordion from "./Accordion";

const AccordionGroup = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "What is JavaScript?",
      answer:
        "JavaScript is a programming language commonly used to create interactive effects within web browsers.",
      isOpen: false,
    },
    {
      id: 2,
      question: "What are the data types in JavaScript?",
      answer:
        "JavaScript has several built-in data types, including numbers, strings, booleans, arrays, objects, and more.",
      isOpen: false,
    },
    {
      id: 3,
      question: "How do you declare a variable in JavaScript?",
      answer:
        "You can declare a variable using the 'var', 'let', or 'const' keyword, followed by the variable name.",
      isOpen: false,
    },
    // Add more FAQ objects as needed
  ]);
  const openAccordion = (id) => {
    // setFaqs(faqs.map((faq)=>{
    //   if(faq.id ===id){
    //     return {...faq,isOpen:'true'}
    //   }
    //   return {...faq,isOpen:'false'}
    // }))
    setFaqs(
      faqs.map((faq) =>
        faq.id === id
          ? { ...faq, isOpen: !faq.isOpen }
          : { ...faq, isOpen: false }
      )
    );
  };

  return (
    <div className=" border  border-violet-100 p-10 m-10 rounded">
      {faqs.map(({ id, question, answer, isOpen }) => (
        <Accordion
          openAccordion={openAccordion}
          key={id}
          id={id}
          isOpen={isOpen}
          question={question}
          answer={answer}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;
