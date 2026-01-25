"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}}>
          <h1 className="text-6xl mb-6">
            Authentic <span className="text-gold">Konaseema</span> Sweets
          </h1>
          <p className="mb-8 text-lg">
            Traditional recipes • Pure ingredients • Homemade taste
          </p>
          <div className="flex gap-4">
            <button className="btn-primary">Shop Sweets</button>
            <a className="btn-primary bg-green-700">Order on WhatsApp</a>
          </div>
        </motion.div>

        <div className="premium-card p-6">
          <img
            src="https://images.unsplash.com/photo-1608198093002-de41b35e8f3b"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
