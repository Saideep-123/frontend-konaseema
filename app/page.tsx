// app/page.tsx
"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  { name: "Sweets", slug: "sweets" },
  { name: "Snacks", slug: "snacks" },
  { name: "Pickles", slug: "pickles" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-cream pt-28 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-brown mb-4">
              Konaseema Foods
            </h1>
            <p className="text-lg md:text-xl text-brown/80 max-w-2xl mx-auto">
              Authentic traditional sweets and snacks, crafted with care and heritage.
            </p>
          </motion.div>
        </section>

        {/* Categories */}
        <section className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-brown mb-8">
            Categories
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/category/${cat.slug}`}
                  className="block card p-8 text-center hover:scale-[1.02] transition-transform"
                >
                  <div className="text-xl font-bold text-brown mb-2">
                    {cat.name}
                  </div>
                  <div className="text-sm text-brown/70">
                    Explore {cat.name.toLowerCase()}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
