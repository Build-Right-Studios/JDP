import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Q1. How long will a special offer last? Does it last for just 24 hours?",
      answer: "A. Yes or No. Because, a special offer is based upon first come 'first serve basis'. If someone is interested in the offer and avails the offered item at an attractive rate, it may or may not be available later for others. So, best to grab the deal as soon as you can!"
    },
    {
      question: "Q2. I want to exchange the product(s) I have received. How do I do that?",
      answer: "A. You can initiate an exchange by contacting our customer support within 7 days of receiving your order. Please provide your order number and the reason for the exchange. Our team will guide you through the process."
    },
    {
      question: "Q3. Do your products come with any warranty?",
      answer: "A. Yes, all our products come with a standard one-year manufacturer's warranty. You can find more details about the warranty period and coverage on the product page or by contacting our support team."
    },
    {
      question: "Q4. What happens if my goods get damaged during transportation?",
      answer: "A. We take great care in packaging our products to prevent damage during transit. However, if your order arrives damaged, please take a photo and contact us immediately. We will arrange for a replacement or a full refund."
    },
    {
      question: "Q5. If I have a bulk order to place, am I entitled to any price discount?",
      answer: "A. Yes, we offer special discounts for bulk orders. Please contact our sales team with your requirements, and we will provide you with a customized quote."
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen font-sans">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-8 font-['Poppins']">FAQ</h2>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4 last:border-b-0">
              <button
                className="w-full text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-lg font-['sans-serif'] text-green-700">
                  {faq.question}
                </span>
                <span className="text-2xl text-gray-400">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 font-['sans-serif'] leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
