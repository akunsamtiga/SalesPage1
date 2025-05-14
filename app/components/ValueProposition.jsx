"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaDesktop, FaMobileAlt, FaShieldAlt, FaStar } from "react-icons/fa"; // Ikon elektronik

const features = [
  {
    icon: <FaDesktop className="h-12 w-12 text-[#8B5E3B]" />,
    title: "Desain Elegan & Modern",
    description: "Produk elektronik kami memiliki desain yang stylish dan futuristik, cocok untuk rumah dan kantor.",
  },
  {
    icon: <FaMobileAlt className="h-12 w-12 text-[#4CAF50]" />,
    title: "Kualitas Terbaik",
    description: "Menggunakan teknologi terkini dan material premium untuk ketahanan maksimal.",
  },
  {
    icon: <FaShieldAlt className="h-12 w-12 text-[#6A5ACD]" />,
    title: "Keamanan Terjamin",
    description: "Setiap produk telah melalui uji ketahanan dan memenuhi standar keamanan tertinggi.",
  },
  {
    icon: <FaStar className="h-12 w-12 text-[#FFD700]" />,
    title: "Paling Dipercaya",
    description: "Dipercaya oleh konsumen di seluruh dunia dan menjadi pilihan utama di industri elektronik.",
  },
];

const ValueProposition = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        {/* Judul Section */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#6D28D9] leading-tight"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          Mengapa Memilih Produk Kami?
        </motion.h2>
        <p className="text-gray-700 mt-4 text-lg">
          Kami tidak hanya menjual produk elektronik, tetapi juga pengalaman yang membawa inovasi ke ruang Anda.
        </p>
      </div>

      {/* Grid untuk Value Proposition */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto mt-14"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.8 },
          },
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition duration-300 transform hover:scale-105"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call-to-Action */}
      <div className="text-center mt-14">
        <motion.a
          href="#cta"
          className="bg-[#6D28D9] text-white px-8 py-4 rounded-md font-semibold text-xl shadow-lg hover:bg-[#4B1F87] transition duration-300 transform hover:scale-105"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6 } },
          }}
        >
          Lihat Koleksi Kami
        </motion.a>
      </div>
    </section>
  );
};

export default ValueProposition;
