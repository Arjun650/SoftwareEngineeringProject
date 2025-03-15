import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Stats = () => {
    return (
        <section className="w-full py-12 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                    }}
                    className="flex flex-wrap justify-center md:justify-between max-w-[1450px] mx-auto text-center gap-10"
                >
                    {[
                        { value: "50+", label: "Industries Covered" },
                        { value: "1000+", label: "Interview Questions" },
                        { value: "95%", label: "Success Rate" },
                        { value: "24/7", label: "AI Support" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group flex flex-col items-center justify-center space-y-2 md:space-y-6 flex-1 min-w-[150px]"
                        >
                            <h3 className="text-4xl md:text-[4vw] font-bold transition-all duration-300">
                                <span className="text-orange-600 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                    {item.value}
                                </span>


                            </h3>
                            <p className="text-muted-foreground">{item.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
