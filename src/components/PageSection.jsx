import { motion } from "framer-motion";

export default function PageSection({ id, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-20 overflow-hidden"
    >
      {children}
    </motion.section>
  );
}
