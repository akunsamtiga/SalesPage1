"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-purple-200 to-white pb-20">

      {/* Background Wave */}
      <div className="absolute top-0 left-0 w-full hidden md:block">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            d="M0,224L80,208C160,192,320,160,480,144C640,128,800,128,960,144C1120,160,1280,192,1360,208L1440,224L1440,0L0,0Z"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Mobile Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="block md:hidden relative mb-6"
        >
          <div className="relative w-full h-[180px] rounded-b-3xl overflow-hidden">
            <Image
              src="/images/purple-electro-mobile.jpg"
              alt="Promo Elektronik Ungu"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white text-center py-4 px-6">
              <h1 className="text-xl font-bold">Elektronik Mewah Ungu</h1>
              <p className="text-sm">Elegan, Canggih, dan Hemat Energi</p>
            </div>
          </div>
        </motion.div>

        {/* Mobile Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="md:hidden text-center mt-6"
        >
          <p className="text-gray-700 text-base">
            Jelajahi koleksi perangkat elektronik kami dengan sentuhan ungu yang menawan.
          </p>
          <button className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-purple-700 transition">
            Lihat Koleksi Unggulan
          </button>
        </motion.div>

        {/* Desktop & Tablet Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-32">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Teknologi Ungu <br /> Untuk Hidup Lebih Mewah
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Dapatkan gadget dan home appliance pilihan dengan aksen ungu yang elegan.
            </p>
            <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-purple-700 transition">
              Jelajahi Sekarang
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[360px]"
          >
            <Image
              src="/images/sofa.jpg"
              alt="Showcase Elektronik Ungu"
              fill
              className="object-cover rounded-xl shadow-lg"
              priority
            />
            <div className="absolute bottom-5 right-5 bg-gray-900/80 text-white text-sm px-4 py-2 rounded-lg">
              <p>300+ Produk Ungu Terpilih</p>
            </div>
          </motion.div>
        </div>

        {/* Info & About */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-700 to-purple-500 text-white p-8 rounded-xl shadow-xl text-center md:text-left"
          >
            <p className="text-lg font-semibold">ELEKTRONIK PREMIUM</p>
            <h2 className="text-4xl font-bold mt-2">20.000+</h2>
            <p className="mt-2 text-sm">Unit Terjual</p>
            <h2 className="text-2xl font-bold mt-4">15+</h2>
            <p className="mt-2 text-sm">Merek Terpercaya</p>
          </motion.div>

          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl border shadow-lg flex flex-col md:flex-row items-center gap-6"
          >
            <div className="w-28 h-28 overflow-hidden rounded-full border-2 border-purple-500">
              <Image
                src="/images/sofa.jpg"
                alt="Tim Elektronik Ungu"
                width={112}
                height={112}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800">Tentang Kami</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Kami ahli menyediakan elektronik berdesain elegan dengan kualitas terbaik dan layanan prima.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
