import { useState } from "react";
import downarrow from "./assets/icon-arrow-down.svg";
import woman from "./assets/illustration-woman-online-desktop.svg";
import box from "./assets/illustration-box-desktop.svg";
const faqs = [
  { question: "How many team members can I invite?", answer: "You can invite up to 10 team members per project." },
  { question: "What is the maximum file upload size?", answer: "No more than 2GB. All files in your account must fit your allotted storage space." },
  { question: "How do I reset my password?", answer: "Click on 'Forgot password' and follow the instructions." },
  { question: "Can I cancel my subscription?", answer: "Yes, you can cancel anytime in your account settings." },
  { question: "Do you provide additional support?", answer: "Yes, we offer 24/7 support through email and chat." },
];

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      <img src={box} alt="" className="box"/>
      <div className="image"><img src={woman} alt="Illustration Woman Online" /></div>
      <div className="faq">
        <h2>FAQ</h2>
        <div>
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className=""
              >
                {faq.question}
                <span className={`arrow ${openIndex === index ? 'rotate' : ''}`}>
                <img src={downarrow} alt="Down Arrow" />
                </span>
              </button>
              {openIndex === index && (
                <p>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
