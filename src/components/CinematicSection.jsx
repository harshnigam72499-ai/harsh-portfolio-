import { motion } from "framer-motion";

export default function CinematicSection({ id, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, scale: 0.92, y: 60 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.25 }}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="w-full">
        {children}
      </div>
    </motion.section>
  );
}
