"use client";  // Indicates that this is a client-side component in a Next.js application

import { motion } from "framer-motion";  // Importing the 'motion' component from the 'framer-motion' library for animations

export default function Transition({
                                       children,
                                   }: {
    children: React.ReactNode;  // Props typing for 'children', ensuring it can accept any valid React nodes
}) {
    return (
        <motion.div
            // Initial animation state: element starts with 0 opacity and no vertical movement (y: 0)
            initial={{ y: 0, opacity: 0 }}

            // Animation target state: element will become fully visible (opacity: 1) with no vertical movement (y: 0)
            animate={{ y: 0, opacity: 1 }}

            // Transition settings: the animation will use an "easeInOut" curve and last for 0.55 seconds
            transition={{ ease: "easeInOut", duration: 0.55 }}
        >
            {children}
        </motion.div>
    );
}