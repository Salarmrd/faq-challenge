import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const faqs = [
    {
      question: "How many team members can I invite?",
      answer: "You can invite up to 10 team members for free.",
    },
    {
      question: "What is the maximum file upload size?",
      answer: "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      question: "How do I reset my password?",
      answer: "Click on ‘Forgot password’ on the login page and follow the instructions.",
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel anytime from your account settings.",
    },
    {
      question: "Do you provide additional support?",
      answer: "Yes, we offer 24/7 customer support via chat and email.",
    },
  ];
  const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  }
  return (
    <>
     hi
    </>
  )
}

export default App
