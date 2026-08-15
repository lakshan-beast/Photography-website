import React, { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are you available for photoshoots outside of Kandy?",
      answer:
        "Absolutely! While I am based in Kandy, I am available to travel island-wide for couple portraiture, outdoor sessions, and birthday events.",
    },
    {
      question: "How long does it take to receive the final edited photos?",
      answer:
        "You will receive a 5-10 photo 'Sneak Peek' within 48 hours of the shoot. The full high-resolution edited gallery is delivered via a private online link within 2 to 3 weeks.",
    },
    {
      question: "Do we get access to all original unedited (RAW) photos?",
      answer:
        "Yes! Along with your color-graded and retouched photos, I provide access to all high-resolution unedited RAW files so you never miss a moment.",
    },
    {
      question: "How do we secure a booking date?",
      answer:
        "Dates are reserved on a first-come, first-served basis upon paying a 25% advance deposit. The remaining balance can be settled on the day of the photoshoot.",
    },
    {
      question:
        "What happens if my baby is cranky or needs feeding during the shoot?",
      answer:
        "Baby comfort is the top priority. Sessions operate on a strict zero-rush policy—we stop as many times as needed for feeding, outfit changes, and soothing.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-neutral-950 text-white py-20 px-6 md:px-12 lg:px-24 border border-neutral-900">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 font-mono tracking-wider uppercase">
            <FiHelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            Everything you need to know about the booking process and shoot day
            expectations.
          </p>
        </div>

        {/* according list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className="rounded-2xl bg-neutral-900/40 border border-neutral-800 overflow-hidden transition-all duration-300"
                key={index}>
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-neutral-900/80 transition-colors">
                  <span className="font-semibold text-base md:text-lg text-neutral-200">
                    {faq.question}
                  </span>

                  <FiChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs md:text-sm text-neutral-400 leading-relaxed border-t border-neutral-800/50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
