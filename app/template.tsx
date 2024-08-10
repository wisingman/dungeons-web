"use client";  // Indicates that this component is a client-side component in a Next.js application

import { motion } from "framer-motion";  // Importing the 'motion' component from 'framer-motion' for handling animations

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            // The initial state of the animation: the component starts with 0 opacity and no vertical movement (y: 0)
            initial={{ y: 0, opacity: 0 }}

            // The final state of the animation: the component becomes fully visible (opacity: 1) with no vertical movement (y: 0)
            animate={{ y: 0, opacity: 1 }}

            // The animation's transition properties: the animation will use an "easeInOut" curve and will last for 0.55 seconds
            transition={{ ease: "easeInOut", duration: 0.55 }}
        >
            {children}
        </motion.div>
    );
}