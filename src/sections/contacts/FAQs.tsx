import { useState } from "react";
import ColoredTitle from "../../components/ColoredTitle";
import Tagline from "../../components/Tagline";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of logistics services including freight forwarding, warehousing, customs brokerage, and last mile delivery.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "Once your shipment is booked, you will receive a tracking number and a link to our tracking portal.",
  },
  {
    question: "Do you provide cargo insurance?",
    answer:
      "Yes, we provide comprehensive cargo insurance to protect your goods during transit.",
  },
  {
    question: "What is your delivery time frame?",
    answer:
      "Delivery times vary depending on the origin and destination, but we always strive for the fastest and most reliable routes.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white flex flex-col items-center text-gray-900 md:mt-10 p-10 py-8 px-16">
      <Tagline label="FAQs" className="mb-4" />
      <ColoredTitle
        title="Frequently Asked Questions"
        className="text-3xl max-w-4xl text-center mb-8"
        highlightWords={["Frequently", "Questions"]}
        highlightColor="text-blue-800"
      />

      <div className="w-full max-w-4xl space-y-4">
        {faqData.map((faq, idx) => (
          <div
            key={idx}
            className="border border-gray-100 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full flex justify-between items-center p-4 text-left font-medium hover:bg-gray-50"
            >
              <span>{faq.question}</span>
              {openIndex === idx ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {openIndex === idx && (
              <div className="p-4 border-t text-sm font-light border-gray-200 bg-gray-50 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
