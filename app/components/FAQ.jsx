"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Apa manfaat utama dari produk ini?",
    answer:
      "Produk ini dirancang untuk meningkatkan produktivitas dan efisiensi Anda dengan fitur-fitur canggih yang mudah digunakan.",
  },
  {
    question: "Apakah saya mendapatkan dukungan pelanggan?",
    answer:
      "Ya, kami menyediakan dukungan pelanggan 24/7 untuk membantu Anda dengan semua pertanyaan dan kebutuhan teknis Anda.",
  },
  {
    question: "Bagaimana cara melakukan pembelian?",
    answer:
      "Anda dapat membeli produk ini langsung dari website kami dengan beberapa metode pembayaran yang tersedia.",
  },
  {
    question: "Apakah ada jaminan uang kembali?",
    answer:
      "Ya, kami menawarkan jaminan uang kembali dalam 30 hari jika Anda tidak puas dengan produk kami.",
  },
  {
    question: "Bisakah saya mengakses materi setelah pembelian?",
    answer:
      "Tentu! Setelah pembelian, Anda akan mendapatkan akses penuh ke materi dan pembaruan selamanya.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 bg-[#F9FAFB] text-gray-900">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-purple-700">
          Pertanyaan Umum
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Jawaban untuk pertanyaan yang sering diajukan tentang produk kami.
        </p>
      </motion.div>

      {/* FAQ List */}
      <motion.div
        className="mt-12 max-w-4xl mx-auto space-y-5"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="rounded-xl border border-purple-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            whileHover={{ scale: 1.01 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left font-medium text-gray-800 bg-gradient-to-r from-purple-50 to-white hover:from-purple-100 transition-colors duration-300"
            >
              <span>{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-purple-600" />
              </motion.div>
            </button>
            <motion.div
              initial="collapsed"
              animate={openIndex === index ? "open" : "collapsed"}
              variants={{
                open: { height: "auto", opacity: 1 },
                collapsed: { height: 0, opacity: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-5 text-gray-700 text-base leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FAQ;
