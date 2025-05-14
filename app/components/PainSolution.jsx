"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ExclamationCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

const PainSolution = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 bg-[#F8F6FC]">
      {/* Judul */}
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#4B2993] leading-tight">
          Masalah Umum & Solusinya
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Pelanggan sering menghadapi kendala ini sebelum menemukan teknologi yang tepat. Kami hadir untuk mengatasinya.
        </p>
      </motion.div>

      {/* Konten */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-14"
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
        {/* Masalah */}
        <motion.div
          className="bg-white border-l-4 border-[#D1B3FF] p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h3 className="flex items-center text-2xl font-semibold text-[#6B4EFF] mb-5">
            <ExclamationCircleIcon className="h-6 w-6 text-[#9C80FF] mr-2" />
            Masalah yang Umum Terjadi
          </h3>
          <ul className="mt-4 space-y-4 text-gray-700 text-[17px] leading-relaxed">
            <li className="flex items-start">
              <span className="mr-3 mt-1">
                <ExclamationCircleIcon className="h-5 w-5 text-[#D1B3FF]" />
              </span>
              Perangkat tidak berfungsi optimal saat dibutuhkan
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">
                <ExclamationCircleIcon className="h-5 w-5 text-[#D1B3FF]" />
              </span>
              Bingung memilih produk teknologi yang sesuai
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">
                <ExclamationCircleIcon className="h-5 w-5 text-[#D1B3FF]" />
              </span>
              Tidak tahu fitur mana yang paling penting
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">
                <ExclamationCircleIcon className="h-5 w-5 text-[#D1B3FF]" />
              </span>
              Khawatir beli produk tapi tidak tahan lama
            </li>
          </ul>
        </motion.div>

        {/* Solusi */}
        <motion.div
          className="bg-white border-l-4 border-[#A88BFE] p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h3 className="flex items-center text-2xl font-semibold text-[#6B4EFF] mb-5">
            <CheckCircleIcon className="h-6 w-6 text-[#A88BFE] mr-2" />
            Solusi yang Kami Tawarkan
          </h3>
          <ul className="mt-4 space-y-4 text-gray-700 text-[17px] leading-relaxed">
            <li className="flex items-start">
              <span className="mr-3 mt-1">
                <CheckCircleIcon className="h-5 w-5 text-[#BCA6FF]" />
              </span>
              Rekomendasi produk berkualitas & bergaransi
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">
                <CheckCircleIcon className="h-5 w-5 text-[#BCA6FF]" />
              </span>
              Panduan lengkap sebelum dan sesudah pembelian
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">
                <CheckCircleIcon className="h-5 w-5 text-[#BCA6FF]" />
              </span>
              Dukungan pelanggan 24/7 untuk konsultasi
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1">
                <CheckCircleIcon className="h-5 w-5 text-[#BCA6FF]" />
              </span>
              Garansi pengembalian & penggantian cepat
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* CTA */}
      <div className="text-center mt-16">
        <motion.a
          href="#produk"
          className="inline-block bg-[#6B4EFF] hover:bg-[#5A3BEF] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-105"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } },
          }}
        >
          Temukan Produk yang Tepat 🔍
        </motion.a>
      </div>
    </section>
  );
};

export default PainSolution;
