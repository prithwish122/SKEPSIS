import React from 'react';


import { FAQItem } from '../FAQItem';

const faqData = [
     {
       question: "What is Skepsis?",
       answer: "Skepsis is the technical committee of the Computer Science and Engineering (CSE) department at Sister Nivedita University. It aims to foster innovation, knowledge sharing, and technical skill development among students."
     },
     {
       question: "What events does Skepsis organize?",
       answer: "Skepsis organizes a variety of events such as workshops, hackathons, coding competitions, seminars, and technical talks. These events provide opportunities for students to enhance their technical knowledge and practical skills."
     },
     {
       question: "How can I become a member of Skepsis?",
       answer: "To become a member of Skepsis, students need to demonstrate a keen interest in technology and participate in the committee’s activities. Members are selected based on their passion and contributions."
     },
     {
       question: "Who can join Skepsis?",
       answer: "Skepsis is open to all students of the Computer Science and Engineering department at Sister Nivedita University who are passionate about technology and innovation."
     },
     {
       question: "When was Skepsis founded?",
       answer: "Skepsis was founded in 2020 with the goal of encouraging technical excellence and providing a platform for students to explore emerging technologies in the field of computer science."
     }
   ];
   

export function FAQSection() {
  // Split the FAQ data into two arrays for left and right columns
  const midPoint = Math.ceil(faqData.length / 2);
  const leftColumnFaqs = faqData.slice(0, midPoint);
  const rightColumnFaqs = faqData.slice(midPoint);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto bg-gray-100 rounded-xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
       
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-200 rounded-xl p-8">
        {/* Left Column */}
        <div className="space-y-4">
          {leftColumnFaqs.map((faq, index) => (
            <FAQItem
              key={`left-${index}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === 0}
            />
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {rightColumnFaqs.map((faq, index) => (
            <FAQItem
              key={`right-${index}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}